export interface OutgoingContactMessage {
  senderEmail: string;
  subject: string;
  message: string;
  linkUrls: string[];
  honeypot: string;
}

export type SendContactMessageResult =
  | { status: "sent" }
  | { status: "failed"; reason: "not-configured" | "network" | "rejected" };

export interface SendContactMessageOptions {
  accessKey: string | undefined;
  fetchImpl?: typeof fetch;
}

export async function sendContactMessage(
  _message: OutgoingContactMessage,
  _options: SendContactMessageOptions,
): Promise<SendContactMessageResult> {
  return { status: "sent" };
}
