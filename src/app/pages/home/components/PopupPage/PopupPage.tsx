"use client";

import type { KeyboardEvent } from "react";
import type { PopupPageProps } from "./PopupPageProps";

export function PopupPage({ activeItem, icon, onClose }: PopupPageProps) {
  const handleOverlayKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${activeItem} modal`}
      onClick={onClose}
      onKeyDown={handleOverlayKeyDown}
      tabIndex={-1}
    >
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="modal-center">
          <div className="modal-icon">{icon}</div>
          <h2 className="modal-title">{activeItem}</h2>
          <div className="modal-body">Qui andrà il contenuto relativo a {activeItem}.</div>
        </div>
      </div>
    </div>
  );
}
