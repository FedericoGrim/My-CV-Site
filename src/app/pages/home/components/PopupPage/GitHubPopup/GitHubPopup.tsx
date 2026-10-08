"use client";

import React, { useEffect, useState } from "react";
import { VT323 } from "next/font/google";
import "./githubpopup.css";

const vt323 = VT323({ subsets: ["latin"], weight: "400" });

const GITHUB_URL = "https://github.com/FedericoGrim";

interface GitHubPopupProps { icon?: React.ReactNode; onClose: () => void }

const transcript = [
  "INTERFACE 2037 READY FOR INQUIRY",
  "",
  "> MU-TH-UR, SHOW ME FEDERICO'S GITHUB REPOSITORIES.",
  "",
  "REQUEST ACKNOWLEDGED.",
  "OPENING DATA LINK TO GITHUB.COM/FEDERICOGRIM ...",
].join("\n");

// Kept short so the new tab opens while the browser still counts it as
// part of the visitor's click (Chrome allows about 5 seconds)
const CHAR_DELAY_MS = 22;
const REDIRECT_DELAY_MS = 800;

export function GitHubPopup({ onClose }: GitHubPopupProps) {
  const [typed, setTyped] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const done = typed >= transcript.length;

  // Type the conversation with MU-TH-UR one character at a time
  useEffect(() => {
    if (done) return;
    const timer = window.setTimeout(() => setTyped((n) => n + 1), CHAR_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [typed, done]);

  // Then open the GitHub profile in a new tab; if the browser blocks it,
  // the visitor is pointed to the manual link
  useEffect(() => {
    if (!done) return;
    const timer = window.setTimeout(() => {
      const tab = window.open(GITHUB_URL, "_blank");
      if (tab) tab.opener = null;
      else setBlocked(true);
    }, REDIRECT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [done]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="GitHub" onClick={onClose} tabIndex={-1}>
      <div className={`modal-panel mother ${vt323.className}`} onClick={(e) => e.stopPropagation()}>
        <header className="mother-bar">
          <span>MU-TH-UR 6000</span>
          <span className="mother-bar-center">REPOSITORY ACCESS</span>
          <button className="mother-exit" onClick={onClose} aria-label="Close">[ EXIT ]</button>
        </header>

        <div className="mother-screen" aria-live="polite">
          <p className="mother-line">
            {transcript.slice(0, typed)}
            {blocked && "\n\nDATA LINK BLOCKED BY HOST. SELECT MANUAL ACCESS."}
            <span className="mother-cursor" />
          </p>
          <a className="mother-line mother-link mother-manual" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            &gt; MANUAL ACCESS
          </a>
        </div>
      </div>
    </div>
  );
}

export default GitHubPopup;
