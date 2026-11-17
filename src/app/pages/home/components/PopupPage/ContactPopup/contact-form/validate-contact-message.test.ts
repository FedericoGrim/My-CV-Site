import { describe, expect, it } from "vitest";
import {
  MAX_LINKS,
  MAX_MESSAGE_LENGTH,
  MAX_SUBJECT_LENGTH,
  validateContactMessage,
  type ContactMessageDraft,
} from "./validate-contact-message";

const validDraft: ContactMessageDraft = {
  senderEmail: "jane@example.com",
  subject: "Job offer",
  message: "Hello Federico, I would like to talk to you.",
  links: "",
};

describe("validateContactMessage", () => {
  it("accepts a complete draft without links", () => {
    const result = validateContactMessage(validDraft);

    expect(result.errors).toEqual({});
    expect(result.linkUrls).toEqual([]);
  });

  it.each(["", "   ", "not-an-email", "jane@", "@example.com", "jane @example.com"])(
    "rejects the sender email %j",
    (senderEmail) => {
      const result = validateContactMessage({ ...validDraft, senderEmail });

      expect(result.errors.senderEmail).toBeDefined();
    },
  );

  it("trims surrounding spaces before checking the sender email", () => {
    const result = validateContactMessage({ ...validDraft, senderEmail: "  jane@example.com  " });

    expect(result.errors.senderEmail).toBeUndefined();
  });

  it("requires a subject", () => {
    const result = validateContactMessage({ ...validDraft, subject: "   " });

    expect(result.errors.subject).toBeDefined();
  });

  it("rejects a subject longer than the limit", () => {
    const result = validateContactMessage({ ...validDraft, subject: "a".repeat(MAX_SUBJECT_LENGTH + 1) });

    expect(result.errors.subject).toBeDefined();
  });

  it("accepts a subject exactly at the limit", () => {
    const result = validateContactMessage({ ...validDraft, subject: "a".repeat(MAX_SUBJECT_LENGTH) });

    expect(result.errors.subject).toBeUndefined();
  });

  it("requires a message", () => {
    const result = validateContactMessage({ ...validDraft, message: "" });

    expect(result.errors.message).toBeDefined();
  });

  it("rejects a message longer than the limit", () => {
    const result = validateContactMessage({ ...validDraft, message: "a".repeat(MAX_MESSAGE_LENGTH + 1) });

    expect(result.errors.message).toBeDefined();
  });

  it("returns one URL per non-empty line of links", () => {
    const result = validateContactMessage({
      ...validDraft,
      links: "https://drive.google.com/file/d/abc\n\n  http://example.com/doc.pdf  \n",
    });

    expect(result.errors.links).toBeUndefined();
    expect(result.linkUrls).toEqual(["https://drive.google.com/file/d/abc", "http://example.com/doc.pdf"]);
  });

  it.each(["example.com/doc.pdf", "javascript:alert(1)", "ftp://example.com/file", "https://"])(
    "rejects the link %j",
    (link) => {
      const result = validateContactMessage({ ...validDraft, links: link });

      expect(result.errors.links).toBeDefined();
    },
  );

  it("rejects more links than the limit", () => {
    const links = Array.from({ length: MAX_LINKS + 1 }, (_, index) => `https://example.com/${index}`).join("\n");

    const result = validateContactMessage({ ...validDraft, links });

    expect(result.errors.links).toBeDefined();
  });

  it("reports every invalid field at once", () => {
    const result = validateContactMessage({ senderEmail: "", subject: "", message: "", links: "nope" });

    expect(Object.keys(result.errors).sort()).toEqual(["links", "message", "senderEmail", "subject"]);
  });
});
