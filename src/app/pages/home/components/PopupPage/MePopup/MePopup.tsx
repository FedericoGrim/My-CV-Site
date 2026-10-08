"use client";

import React, { useEffect, useRef, useState } from "react";
import { Orbitron } from "next/font/google";
import "./mepopup.css";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "700"] });

// Size in px of the cut-off top-left and bottom-right corners
const CHAMFER = 28;

interface MePopupProps {
  onClose?: () => void;
  inline?: boolean;
}

const typeText =
  "A HIGHLY MOTIVATED ENGINEER DRIVEN BY COMPLEX CHALLENGES, CUTTING-EDGE TECHNOLOGIES, AND OUT-OF-THE-BOX PROBLEM SOLVING. \n \nFOCUSED ON DELIVERING SECURE, FUTURE-PROOF SOLUTIONS WHILE CONTINUOUSLY EVOLVING WITH THE TECH LANDSCAPE. \n \nPASSIONATE ABOUT MAKING A SIGNIFICANT MARK IN TECHNOLOGICAL ADVANCEMENT.";

  export function MePopup({ onClose, inline = false }: MePopupProps) {
  const borderRef = useRef<SVGPolygonElement | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [bio, setBio] = useState("");

  // Animazione del tracciato SVG (Bordi del pannello)
  useEffect(() => {
    let contentTimer: number | null = null;
    const path = borderRef.current;

    if (path) {
      try {
        // pathLength="1" on the polygon makes the dash independent of its size
        path.style.strokeDasharray = "1";
        path.style.strokeDashoffset = "1";
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

  // Keep the chamfered border polygon matching the panel size in px
  useEffect(() => {
    const path = borderRef.current;
    const svg = path?.ownerSVGElement;
    if (!path || !svg) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width: w, height: h } = entry.contentRect;
      path.setAttribute("points", `${CHAMFER},0 ${w},0 ${w},${h - CHAMFER} ${w - CHAMFER},${h} 0,${h} 0,${CHAMFER}`);
    });
    observer.observe(svg);
    return () => observer.disconnect();
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

  const panel = (
      <div className={`modal-panel tron ${inline ? "me-inline" : ""}`} onClick={(e) => e.stopPropagation()}>

        <div className="modal-body tron-body show">
          <svg className="tron-border" aria-hidden="true">
            <polygon ref={borderRef} className="tron-path" pathLength={1} fill="none" />
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
              </div>
              
              <div className="personal-data">
                <div className="data-line"><span className={orbitron.className}>NAME</span> FEDERICO GRIMALDI</div>
                <div className="data-line"><span className={orbitron.className}>ROLE</span> FULL STACK SOFTWARE ARCHITECT</div>
                <div className="data-line"><span className={orbitron.className}>FOCUS</span> SECURITY & RELIABILITY</div>
                <div className="data-line"><span className={orbitron.className}>LOCATION</span> TORINO (IT)</div>
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
  );

  if (inline) return panel;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      {panel}
    </div>
  );
}

export default MePopup;