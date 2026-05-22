"use client";

import React from "react";
import "./studypopup.css";

interface StudyPopupProps { icon?: React.ReactNode; onClose: () => void }

export function StudyPopup({ icon, onClose }: StudyPopupProps) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Study modal" onClick={onClose} tabIndex={-1}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-center">
          <div className="modal-icon">{icon}</div>
          <h2 className="modal-title">Study</h2>
          <div className="modal-body">Study content placeholder. Replace with specialized component.</div>
        </div>
      </div>
    </div>
  );
}

export default StudyPopup;
