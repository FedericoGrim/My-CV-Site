"use client";

import React, { useEffect, useRef, useState } from "react";
import "./mepopup.css";

interface MePopupProps {
  onClose: () => void;
}

const typeText =
  "A HIGHLY MOTIVATED ENGINEER DRIVEN BY COMPLEX CHALLENGES, CUTTING-EDGE TECHNOLOGIES, AND OUT-OF-THE-BOX PROBLEM SOLVING. \n \nFOCUSED ON DELIVERING SECURE, FUTURE-PROOF SOLUTIONS WHILE CONTINUOUSLY EVOLVING WITH THE TECH LANDSCAPE. \n \nPASSIONATE ABOUT MAKING A SIGNIFICANT MARK IN TECHNOLOGICAL ADVANCEMENT.";

  export function MePopup({ onClose }: MePopupProps) {
  const borderRef = useRef<SVGPathElement | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [bio, setBio] = useState("");

  // Animazione del tracciato SVG (Bordi del pannello)
  useEffect(() => {
    let contentTimer: number | null = null;
    const path = borderRef.current;

    if (path) {
      try {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
        path.getBoundingClientRect();
        path.style.transition = "stroke-dashoffset 900ms cubic-bezier(0.4, 0, 0.2, 1)";
        requestAnimationFrame(() => {
          path.style.strokeDashoffset = "0";
        });
        contentTimer = window.setTimeout(() => setShowContent(true), 900);
      } catch (e) {
        setShowContent(true);
      }
    } else {
      setShowContent(true);
    }

    return () => {
      if (contentTimer) window.clearTimeout(contentTimer);
    };
  }, []);

  // Effetto Scrittura (Typewriter) corretto senza bug closure/undefined
  useEffect(() => {
    if (!showContent) return;

    let intervalId: number;
    let currentIdx = 0;

    const bioTimer = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        if (currentIdx < typeText.length) {
          const nextChar = typeText.toUpperCase()[currentIdx];
          // Controllo di sicurezza stringente per evitare caratteri spuri
          if (nextChar !== undefined) {
            setBio((prev) => prev + nextChar);
          }
          currentIdx++;
        } else {
          window.clearInterval(intervalId);
        }
      }, 20);
    }, 400);

    return () => {
      window.clearTimeout(bioTimer);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [showContent]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-panel tron" onClick={(e) => e.stopPropagation()}>
        <div className="panel-grid-background" aria-hidden="true" />
        
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-body tron-body show">
          <svg className="tron-border" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <rect
              ref={borderRef as any}
              className="tron-path"
              x="1" y="1" width="98" height="98"
              rx="1" ry="1"
              fill="none"
            />
          </svg>

          <div className={`bike-container ${!showContent ? "active" : "done"}`}>
            <div className="light-bike bike-left" />
            <div className="light-bike bike-right" />
          </div>

          <div className="panel-stage">
            {/* Pannello Identità (Sinistra) */}
            <div className="identity-pane">
              <div className="glitch-photo-frame">
                <img src="/My-CV-Site/images/MyPhoto.jpg" alt="Federico" className="photo" />
                <div className="scan-line" />
                <div className="scan-ring">
                  <span /><span /><span />
                </div>
              </div>
              
              <div className="personal-data">
                <div className="data-line"><span>NAME:</span> FEDERICO GRIMALDI</div>
                <div className="data-line"><span>ROLE:</span> FULL STACK SOFTWARE ARCHITECT</div>
                <div className="data-line"><span>FOCUS:</span> SECURITY & RELIABILITY</div>
                <div className="data-line"><span>LOCATION:</span> TORINO (IT) </div>
              </div>
            </div>

            {/* Pannello Bio/Feed (Destra) */}
            <div className="feed-pane">
              <div className="bio-description">
                {bio}
                <span className="cursor">_</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MePopup;