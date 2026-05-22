"use client";

import React from "react";
import "./workpopup.css";

interface WorkPopupProps { icon?: React.ReactNode; onClose: () => void }

export function WorkPopup({ icon, onClose }: WorkPopupProps) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Work modal" onClick={onClose} tabIndex={-1}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-center">
          <div className="modal-icon">{icon}</div>
          <h2 className="modal-title">Work</h2>
          <div className="modal-body">Work content placeholder. Replace with specialized component.</div>
        </div>
      </div>
    </div>
  );
}

export default WorkPopup;
