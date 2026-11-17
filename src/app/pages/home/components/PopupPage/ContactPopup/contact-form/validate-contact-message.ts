export const MAX_SUBJECT_LENGTH = 120;
export const MAX_MESSAGE_LENGTH = 5000;
export const MAX_LINKS = 5;

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

export function validateContactMessage(_draft: ContactMessageDraft): ContactMessageValidation {
  return { errors: {}, linkUrls: [] };
}
