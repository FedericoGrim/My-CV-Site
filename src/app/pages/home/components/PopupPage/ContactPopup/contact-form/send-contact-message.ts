const FORM_ENDPOINT = "https://api.web3forms.com/submit";
const SUBJECT_PREFIX = "[CV site]";

export interface OutgoingContactMessage {
  senderEmail: string;
  subject: string;
  message: string;
  linkUrls: string[];
}

export type SendContactMessageResult =
  | { status: "sent" }
  | { status: "failed"; reason: "not-configured" | "network" | "rejected" };

export interface SendContactMessageOptions {
  accessKey: string | undefined;
  fetchImpl?: typeof fetch;
}

export async function sendContactMessage(
  message: OutgoingContactMessage,
  { accessKey, fetchImpl = fetch }: SendContactMessageOptions,
): Promise<SendContactMessageResult> {
  if (!accessKey) {
    return { status: "failed", reason: "not-configured" };
  }

  let response: Response;
  try {
    response = await fetchImpl(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        email: message.senderEmail,
        subject: `${SUBJECT_PREFIX} ${message.subject}`,
        message: appendLinks(message.message, message.linkUrls),
      }),
    });
  } catch {
    return { status: "failed", reason: "network" };
  }

  return (await isAccepted(response)) ? { status: "sent" } : { status: "failed", reason: "rejected" };
}

export function appendLinks(message: string, linkUrls: string[]): string {
  if (linkUrls.length === 0) {
    return message;
  }
  return `${message}\n\nLinks:\n${linkUrls.map((url) => `- ${url}`).join("\n")}`;
}

async function isAccepted(response: Response): Promise<boolean> {
  if (!response.ok) {
    return false;
  }
  try {
    const body = await response.json();
    return body?.success === true;
  } catch {
    return false;
  }
}
