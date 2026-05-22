"use client";

import React from "react";
import "./githubpopup.css";

interface GitHubPopupProps { icon?: React.ReactNode; onClose: () => void }

export function GitHubPopup({ icon, onClose }: GitHubPopupProps) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="GitHub modal" onClick={onClose} tabIndex={-1}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-center">
          <div className="modal-icon">{icon}</div>
          <h2 className="modal-title">GitHub</h2>
          <div className="modal-body">GitHub content placeholder. Replace with specialized component.</div>
        </div>
      </div>
    </div>
  );
}

export default GitHubPopup;
