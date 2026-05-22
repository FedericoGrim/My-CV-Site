"use client";

import React from "react";
import "./contactpopup.css";

interface ContactPopupProps { icon?: React.ReactNode; onClose: () => void }

export function ContactPopup({ icon, onClose }: ContactPopupProps) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Contact modal" onClick={onClose} tabIndex={-1}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-center">
          <div className="modal-icon">{icon}</div>
          <h2 className="modal-title">Contact</h2>
          <div className="modal-body">Contact content placeholder. Replace with specialized component.</div>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;
