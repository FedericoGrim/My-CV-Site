"use client";

import React, { useState } from "react";
import { OWNER_EMAIL } from "./owner-email";
import {
  appendLinks,
  type OutgoingContactMessage,
  type SendContactMessageResult,
} from "./send-contact-message";
import {
  MAX_MESSAGE_LENGTH,
  MAX_SUBJECT_LENGTH,
  validateContactMessage,
  type ContactMessageDraft,
  type ContactMessageErrors,
} from "./validate-contact-message";

interface ContactFormProps {
  sendMessage: (message: OutgoingContactMessage) => Promise<SendContactMessageResult>;
  onCancel: () => void;
}

type Status = "editing" | "sending" | "sent";

const emptyDraft: ContactMessageDraft = { senderEmail: "", subject: "", message: "", links: "" };

export function ContactForm({ sendMessage, onCancel }: ContactFormProps) {
  const [draft, setDraft] = useState(emptyDraft);
  const [spamTrap, setSpamTrap] = useState("");
  const [errors, setErrors] = useState<ContactMessageErrors>({});
  const [status, setStatus] = useState<Status>("editing");
  const [hasSendFailed, setHasSendFailed] = useState(false);

  const updateDraft = (field: keyof ContactMessageDraft) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setDraft((current) => ({ ...current, [field]: event.target.value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (status === "sending") return;

    const validation = validateContactMessage(draft);
    setErrors(validation.errors);
    if (Object.keys(validation.errors).length > 0) return;

    if (spamTrap) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setHasSendFailed(false);
    const result = await sendMessage({
      senderEmail: draft.senderEmail.trim(),
      subject: draft.subject.trim(),
      message: draft.message.trim(),
      linkUrls: validation.linkUrls,
    });

    if (result.status === "sent") {
      setStatus("sent");
      return;
    }
    setStatus("editing");
    setHasSendFailed(true);
  }

  if (status === "sent") {
    return (
      <div className="contact-form contact-form-done" role="status">
        <p className="contact-form-title">Message sent.</p>
        <p>I will reply to {draft.senderEmail.trim()} as soon as I can.</p>
        <button type="button" className="pip-action" onClick={onCancel}>
          [ Done ]
        </button>
      </div>
    );
  }

  const isSending = status === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <Field label="Your email" name="senderEmail" error={errors.senderEmail}>
        <input
          id="contact-sender-email"
          type="email"
          autoComplete="email"
          value={draft.senderEmail}
          onChange={updateDraft("senderEmail")}
          {...fieldAccessibility("senderEmail", errors)}
        />
      </Field>

      <Field label="Subject" name="subject" error={errors.subject}>
        <input
          id="contact-subject"
          type="text"
          maxLength={MAX_SUBJECT_LENGTH}
          value={draft.subject}
          onChange={updateDraft("subject")}
          {...fieldAccessibility("subject", errors)}
        />
      </Field>

      <Field label="Message" name="message" error={errors.message}>
        <textarea
          id="contact-message"
          rows={5}
          maxLength={MAX_MESSAGE_LENGTH}
          value={draft.message}
          onChange={updateDraft("message")}
          {...fieldAccessibility("message", errors)}
        />
      </Field>

      <Field label="Links to files (optional, one per line)" name="links" error={errors.links}>
        <textarea
          id="contact-links"
          rows={2}
          placeholder="https://drive.google.com/..."
          value={draft.links}
          onChange={updateDraft("links")}
          {...fieldAccessibility("links", errors)}
        />
      </Field>

      <input
        type="text"
        name="website"
        className="contact-form-trap"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={spamTrap}
        onChange={(event) => setSpamTrap(event.target.value)}
      />

      {hasSendFailed && (
        <p className="contact-form-failure" role="alert">
          Your message could not be sent. You can try again, or{" "}
          <a href={buildMailtoFallback(draft)}>open your mail app</a> instead.
        </p>
      )}

      <div className="contact-form-actions">
        <button type="submit" className="pip-action" disabled={isSending}>
          {isSending ? "[ Sending... ]" : "[ Send message ]"}
        </button>
        <button type="button" className="pip-action" onClick={onCancel}>
          [ Cancel ]
        </button>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: keyof ContactMessageDraft;
  error?: string;
  children: React.ReactElement<{ id: string }>;
}

function Field({ label, name, error, children }: FieldProps) {
  return (
    <div className="contact-form-field">
      <label htmlFor={children.props.id}>{label}</label>
      {children}
      {error && (
        <p id={errorId(name)} className="contact-form-error">
          {error}
        </p>
      )}
    </div>
  );
}

function errorId(field: keyof ContactMessageDraft): string {
  return `contact-error-${field}`;
}

function fieldAccessibility(field: keyof ContactMessageDraft, errors: ContactMessageErrors) {
  return errors[field]
    ? { "aria-invalid": true as const, "aria-describedby": errorId(field) }
    : { "aria-invalid": false as const };
}

function buildMailtoFallback(draft: ContactMessageDraft): string {
  const { linkUrls } = validateContactMessage(draft);
  const body = appendLinks(draft.message.trim(), linkUrls);
  return `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(draft.subject.trim())}&body=${encodeURIComponent(body)}`;
}
