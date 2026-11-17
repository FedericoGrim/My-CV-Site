import { describe, expect, it, vi } from "vitest";
import { sendContactMessage, type OutgoingContactMessage } from "./send-contact-message";

const outgoingMessage: OutgoingContactMessage = {
  senderEmail: "jane@example.com",
  subject: "Job offer",
  message: "Hello Federico",
  linkUrls: [],
};

const accessKey = "test-access-key";

function fetchReturning(response: Partial<Response> & { json?: () => Promise<unknown> }) {
  return vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }), ...response });
}

function sentPayload(fetchImpl: ReturnType<typeof vi.fn>) {
  const [, init] = fetchImpl.mock.calls[0];
  return JSON.parse(init.body as string);
}

describe("sendContactMessage", () => {
  it("posts the message as JSON to the form endpoint", async () => {
    const fetchImpl = fetchReturning({});

    await sendContactMessage(outgoingMessage, { accessKey, fetchImpl });

    const [url, init] = fetchImpl.mock.calls[0];
    expect(url).toBe("https://api.web3forms.com/submit");
    expect(init.method).toBe("POST");
    expect(init.headers).toMatchObject({ "Content-Type": "application/json", Accept: "application/json" });
    expect(sentPayload(fetchImpl)).toMatchObject({
      access_key: accessKey,
      email: "jane@example.com",
      message: "Hello Federico",
    });
  });

  it("prefixes the subject so the mail is easy to filter", async () => {
    const fetchImpl = fetchReturning({});

    await sendContactMessage(outgoingMessage, { accessKey, fetchImpl });

    expect(sentPayload(fetchImpl).subject).toBe("[CV site] Job offer");
  });

  it("appends the links to the message body", async () => {
    const fetchImpl = fetchReturning({});

    await sendContactMessage(
      { ...outgoingMessage, linkUrls: ["https://example.com/a", "https://example.com/b"] },
      { accessKey, fetchImpl },
    );

    expect(sentPayload(fetchImpl).message).toBe(
      "Hello Federico\n\nLinks:\n- https://example.com/a\n- https://example.com/b",
    );
  });

  it("reports success when the service accepts the message", async () => {
    const result = await sendContactMessage(outgoingMessage, { accessKey, fetchImpl: fetchReturning({}) });

    expect(result).toEqual({ status: "sent" });
  });

  it("reports a rejection when the service answers with success false", async () => {
    const fetchImpl = fetchReturning({ json: async () => ({ success: false }) });

    const result = await sendContactMessage(outgoingMessage, { accessKey, fetchImpl });

    expect(result).toEqual({ status: "failed", reason: "rejected" });
  });

  it("reports a rejection when the HTTP status is an error", async () => {
    const fetchImpl = fetchReturning({ ok: false, json: async () => ({ success: false }) });

    const result = await sendContactMessage(outgoingMessage, { accessKey, fetchImpl });

    expect(result).toEqual({ status: "failed", reason: "rejected" });
  });

  it("reports a rejection when the response is not valid JSON", async () => {
    const fetchImpl = fetchReturning({
      json: async () => {
        throw new SyntaxError("Unexpected token");
      },
    });

    const result = await sendContactMessage(outgoingMessage, { accessKey, fetchImpl });

    expect(result).toEqual({ status: "failed", reason: "rejected" });
  });

  it("reports a network failure when the request throws", async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new TypeError("Failed to fetch"));

    const result = await sendContactMessage(outgoingMessage, { accessKey, fetchImpl });

    expect(result).toEqual({ status: "failed", reason: "network" });
  });

  it.each([undefined, ""])("does not call the service when the access key is %j", async (missingKey) => {
    const fetchImpl = fetchReturning({});

    const result = await sendContactMessage(outgoingMessage, { accessKey: missingKey, fetchImpl });

    expect(result).toEqual({ status: "failed", reason: "not-configured" });
    expect(fetchImpl).not.toHaveBeenCalled();
  });
});
