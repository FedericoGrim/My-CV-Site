export const MAX_SUBJECT_LENGTH = 120;
export const MAX_MESSAGE_LENGTH = 5000;
export const MAX_LINKS = 5;

const MAX_EMAIL_LENGTH = 254;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactMessageDraft {
  senderEmail: string;
  subject: string;
  message: string;
  links: string;
}

export type ContactMessageErrors = Partial<Record<keyof ContactMessageDraft, string>>;

export interface ContactMessageValidation {
  errors: ContactMessageErrors;
  linkUrls: string[];
}

export function validateContactMessage(draft: ContactMessageDraft): ContactMessageValidation {
  const errors: ContactMessageErrors = {};

  const senderEmail = draft.senderEmail.trim();
  if (!senderEmail) {
    errors.senderEmail = "Enter your email so I can reply.";
  } else if (senderEmail.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(senderEmail)) {
    errors.senderEmail = "This email address does not look valid.";
  }

  const subject = draft.subject.trim();
  if (!subject) {
    errors.subject = "Enter a subject.";
  } else if (subject.length > MAX_SUBJECT_LENGTH) {
    errors.subject = `The subject must be at most ${MAX_SUBJECT_LENGTH} characters.`;
  }

  const message = draft.message.trim();
  if (!message) {
    errors.message = "Write a message.";
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `The message must be at most ${MAX_MESSAGE_LENGTH} characters.`;
  }

  const linkUrls = parseLines(draft.links);
  if (linkUrls.length > MAX_LINKS) {
    errors.links = `Add at most ${MAX_LINKS} links.`;
  } else if (!linkUrls.every(isWebUrl)) {
    errors.links = "Each link must be a full http(s) address, one per line.";
  }

  return { errors, linkUrls };
}

function parseLines(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function isWebUrl(candidate: string): boolean {
  try {
    const { protocol, hostname } = new URL(candidate);
    return (protocol === "http:" || protocol === "https:") && hostname !== "";
  } catch {
    return false;
  }
}
