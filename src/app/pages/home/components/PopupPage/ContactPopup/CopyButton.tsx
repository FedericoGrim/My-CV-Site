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
    try {
      await navigator.clipboard.writeText(textToCopy);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), FEEDBACK_DURATION_MS);
  }

  return (
    <button type="button" className="pip-action" onClick={copy} aria-live="polite">
      [ {feedbackLabel(status, label)} ]
    </button>
  );
}

function feedbackLabel(status: CopyStatus, label: string): string {
  if (status === "copied") return "Copied!";
  if (status === "failed") return "Copy failed";
  return label;
}
