"use client";

import React, { useEffect, useRef, useState } from "react";
import { Orbitron } from "next/font/google";
import "./mepopup.css";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["500", "700"] });

const CHARS_PER_TICK = 4;

// Size in px of the cut-off top-left and bottom-right corners
const CHAMFER = 28;

interface MePopupProps {
  onClose?: () => void;
  inline?: boolean;
}

const typeText =
  "SOFTWARE DEVELOPMENT STUDENT AT ITS ACADEMY ICT PIEMONTE AND ASPIRING CLOUD / SOFTWARE ARCHITECT. \n \nA STRUCTURED INTERNSHIP AT EXTRANET S.R.L. GAVE ME HANDS-ON EXPERIENCE WITH C# .NET CORE, CONTAINERIZATION AND MODERN ARCHITECTURAL PATTERNS, BUILDING SOLID BACKEND FOUNDATIONS. \n \nGUIDED BY SOFTWARE CRAFTSMANSHIP, I KEEP STUDYING INDUSTRY STANDARDS ON MY OWN, FROM CLEAN CODE TO THE PRAGMATIC PROGRAMMER.";

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

  // Typewriter: a few characters per tick so the whole bio prints in about a second
  useEffect(() => {
    if (!showContent) return;

    let intervalId: number;
    let typed = 0;

    const bioTimer = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        typed += CHARS_PER_TICK;
        setBio(typeText.slice(0, typed));
        if (typed >= typeText.length) window.clearInterval(intervalId);
      }, 12);
    }, 150);

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
                <div className="data-line"><span className={orbitron.className}>ROLE</span> SOFTWARE DEVELOPER · ASPIRING CLOUD ARCHITECT</div>
                <div className="data-line"><span className={orbitron.className}>FOCUS</span> BACKEND · CLEAN CODE</div>
                <div className="data-line"><span className={orbitron.className}>LOCATION</span> ROBASSOMERO (TO)</div>
                <div className="data-line"><span className={orbitron.className}>LANGUAGES</span> ITALIAN (NATIVE) · ENGLISH (C1)</div>
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