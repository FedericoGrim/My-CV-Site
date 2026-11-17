"use client";

import React from "react";
import type { OutgoingContactMessage, SendContactMessageResult } from "./send-contact-message";

interface ContactFormProps {
  sendMessage: (message: OutgoingContactMessage) => Promise<SendContactMessageResult>;
  onCancel: () => void;
}

export function ContactForm(_props: ContactFormProps) {
  return null;
}
