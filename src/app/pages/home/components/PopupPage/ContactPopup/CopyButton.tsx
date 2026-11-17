"use client";

import React, { useEffect, useRef, useState } from "react";

const FEEDBACK_DURATION_MS = 2000;

type CopyStatus = "idle" | "copied" | "failed";

interface CopyButtonProps {
  textToCopy: string;
  label: string;
}

export function CopyButton({ textToCopy, label }: CopyButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copy() {
    setStatus((await copyToClipboard(textToCopy)) ? "copied" : "failed");
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), FEEDBACK_DURATION_MS);
  }

  return (
    <button type="button" className="pip-action" onClick={copy} aria-live="polite">
      [ {feedbackLabel(status, label)} ]
    </button>
  );
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return copyWithLegacyCommand(text);
  }
}

// Some browsers and webviews refuse the Clipboard API but still honour the old copy command
function copyWithLegacyCommand(text: string): boolean {
  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    field.remove();
  }
}

function feedbackLabel(status: CopyStatus, label: string): string {
  if (status === "copied") return "Copied!";
  if (status === "failed") return "Copy failed";
  return label;
}
