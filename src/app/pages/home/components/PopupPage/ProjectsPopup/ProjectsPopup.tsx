"use client";

import React, { useState, useEffect, useCallback } from "react";
import "./projectspopup.css";

interface ProjectsPopupProps {
  icon?: React.ReactNode;
  onClose: () => void;
}

interface ProjectData {
  id: string;
  name: string;
  status: string;
  tech: string;
  lines: number;
  details: string;
}

interface LanguageCore {
  id: string;
  name: string;
  iconTag: string;
  description: string;
  activeNodes: number;
}

export function ProjectsPopup({ icon, onClose }: ProjectsPopupProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedLang, setSelectedLang] = useState<LanguageCore | null>(null);
  const [isZooming, setIsZooming] = useState(false);

  // 1. Database dei Core dei Linguaggi (I Monoliti 3D sulla griglia)
  const languages: LanguageCore[] = [
    { id: "LANG_01", name: "PYTHON_NET", iconTag: "PY", description: "Moduli IA, reti neurali e script di telemetria automatizzati.", activeNodes: 3 },
    { id: "LANG_02", name: "RUST_SYSTEM", iconTag: "RS", description: "Motori computazionali a memoria sicura ad altissime prestazioni.", activeNodes: 2 },
    { id: "LANG_03", name: "GO_SERVICES", iconTag: "GO", description: "Microservizi di rete, routing dati tattici e istanze API.", activeNodes: 2 },
    { id: "LANG_04", name: "WEB_STACK", iconTag: "TS", description: "Interfacce centrali di controllo, dashboard web e WebSocket.", activeNodes: 3 },
  ];

  // 2. Database globale dei progetti
  const allProjects: ProjectData[] = [
    // Python
    { id: "PROJ_01", name: "NEURAL_NET", status: "ACTIVE", tech: "Python / PyTorch", lines: 45830, details: "Rete neurale convoluzionale per il riconoscimento delle anomalie di griglia." },
    { id: "PROJ_02", name: "AERO_TRACK", status: "COMPILING", tech: "Python / SciPy", lines: 18450, details: "Algoritmo predittivo per il tracciamento e l'intercettazione di vettori atmosferici." },
    { id: "PROJ_03", name: "DATA_CRUNCH", status: "STABLE", tech: "Python / Pandas", lines: 12100, details: "Analisi flussi e pipeline ETL per log di sistema decentralizzati." },
    // Rust
    { id: "PROJ_04", name: "QUANT_ENG", status: "INDEXING", tech: "Rust / Wasm", lines: 23115, details: "Motore di simulazione quantistica per il calcolo delle traiettorie vettoriali." },
    { id: "PROJ_05", name: "KERNEL_FALLBACK", status: "STANDBY", tech: "Rust / ASM", lines: 6150, details: "Sistema operativo minimale per il ripristino di emergenza dei terminali." },
    // Go
    { id: "PROJ_06", name: "REST_API", status: "COMPILED", tech: "Golang / Redis", lines: 14209, details: "Microservizio ad alte prestazioni per il routing dei dati tattici a bassa latenza." },
    { id: "PROJ_07", name: "TELE_MESH", status: "ACTIVE", tech: "Golang / Libp2p", lines: 9840, details: "Rete mesh decentralizzata e crittografata per la telemetria nodi." },
    // Web Stack (TS/JS)
    { id: "PROJ_08", name: "WEB_DASH", status: "STABLE", tech: "Next.js / TS", lines: 8942, details: "Interfaccia di controllo centrale con aggiornamenti in tempo real via WebSocket." },
    { id: "PROJ_09", name: "CYPHER_UI", status: "ACTIVE", tech: "React / ThreeJS", lines: 15400, details: "Pannello di visualizzazione 3D delle chiavi crittografiche attive." },
    { id: "PROJ_10", name: "NODE_BROKER", status: "STANDBY", tech: "Node.js / TS", lines: 7420, details: "Gestore delle connessioni concorrenti per la dashboard di controllo." }
  ];

  // Filtra i progetti in base al linguaggio selezionato
  const filteredProjects = allProjects.filter(p => {
    if (!selectedLang) return false;
    if (selectedLang.id === "LANG_01") return p.tech.includes("Python");
    if (selectedLang.id === "LANG_02") return p.tech.includes("Rust");
    if (selectedLang.id === "LANG_03") return p.tech.includes("Golang");
    if (selectedLang.id === "LANG_04") return p.tech.includes("TS") || p.tech.includes("Node");
    return false;
  });

  const handleSelectLang = useCallback((index: number) => {
    if (selectedLang) return;
    setIsZooming(true);
    setTimeout(() => {
      setSelectedLang(languages[index]);
      setIsZooming(false);
    }, 500);
  }, [languages, selectedLang]);

  // Tastiera attiva solo sui 4 monoliti principali
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedLang) {
        if (e.key === "Escape") setSelectedLang(null);
        return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % languages.length);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + languages.length) % languages.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleSelectLang(activeIndex);
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, selectedLang, languages.length, handleSelectLang, onClose]);

  return (
    <div className="fui-modal-overlay crt-warp" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="crt-scanlines"></div>
      <div className="crt-flicker"></div>

      <div className="fui-interface-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Intestazioni */}
        <div className="fui-border border-top"><span>SYS_STATUS: ONLINE</span><span>DATABASE: SEPARATED_BY_CORE</span><span>LANG_ACTIVE: {activeIndex + 1}/{languages.length}</span></div>
        <div className="fui-border border-bottom"><span>NAV_MODE: SELECT LANGUAGE NODES [ENTER]</span><span>MATRIX_V2</span></div>
        <div className="fui-border border-left"><div>0001</div><div>0002</div><div>0003</div><div>0004</div></div>
        <div className="fui-border border-right"><div>LN_1</div><div>LN_2</div><div>LN_3</div><div>LN_4</div></div>

        <header className="fui-header">
          <div className="header-left">
            {icon && <span className="header-icon">{icon}</span>}
            <h2 className="header-title">CORE_MATRIX // LANGUAGES</h2>
          </div>
          <button className="fui-close-btn" onClick={onClose}>[ ABORT_CONNECTION ]</button>
        </header>

        {/* Viewport 3D */}
        <div className="fui-viewport-3d">
          <div className={`fui-world-transformer ${isZooming ? "camera-zoom-active" : ""}`}>
            <div className="fui-tactical-grid distributed-4n">
              
              {languages.map((lang, index) => {
                const isActive = index === activeIndex;

                // Griglia 2x2 pulita per i 4 Core Linguaggio principali
                const row = Math.floor(index / 2);
                const col = index % 2;
                
                const computedLeft = 200 + (col * 340);
                const computedTop = 200 + (row * 340);

                return (
                  <div 
                    key={lang.id} 
                    className={`monolith-wrapper ${isActive ? "system-active" : ""}`}
                    style={{ top: `${computedTop}px`, left: `${computedLeft}px` }}
                    onMouseEnter={() => !selectedLang && setActiveIndex(index)}
                    onClick={() => handleSelectLang(index)}
                  >
                    {/* Label olografica del Linguaggio */}
                    <div className="hologram-label lang-node">
                      <div className="tag-id font-large">&lt;/&gt; {lang.name}</div>
                      <div className="tag-status">NODES_DETECTED: {lang.activeNodes}</div>
                    </div>

                    {/* Cubo Monolite */}
                    <div className="monolith-3d core-monolith">
                      <div className="face face-front"><span className="internal-code">{lang.iconTag}</span></div>
                      <div className="face face-back"></div>
                      <div className="face face-left"></div>
                      <div className="face face-right"></div>
                      <div className="face face-top"></div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* Schermata Pop-up: Lista Progetti del Linguaggio selezionato */}
        {selectedLang && (
          <div className="fui-sub-window-overlay" onClick={() => setSelectedLang(null)}>
            <div className="fui-sub-window extended-window" onClick={(e) => e.stopPropagation()}>
              <div className="sub-window-header">
                <h3>REPOSITORY // {selectedLang.name} // PROJECTS</h3>
                <button onClick={() => setSelectedLang(null)}>[BACK_TO_GRID]</button>
              </div>
              <div className="sub-window-body scrollable-repo">
                <p className="lang-summary-text">{selectedLang.description}</p>
                
                <div className="projects-terminal-list">
                  {filteredProjects.map((proj) => (
                    <div key={proj.id} className="terminal-project-row">
                      <div className="row-main-info">
                        <span className="proj-id-badge">{proj.id}</span>
                        <span className="proj-name-text">{proj.name}</span>
                        <span className="proj-status-badge" data-status={proj.status}>{proj.status}</span>
                      </div>
                      <div className="row-technical-details">
                        <span className="tech-badge">{proj.tech}</span>
                        <span className="loc-counter">{proj.lines.toLocaleString()} LOC</span>
                      </div>
                      <p className="proj-desc-paragraph">{proj.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProjectsPopup;