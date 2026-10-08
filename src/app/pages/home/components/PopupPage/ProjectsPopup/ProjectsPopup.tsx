"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import "./projectspopup.css";

interface ProjectsPopupProps {
  icon?: React.ReactNode;
  onClose: () => void;
}

type ProjectCategory = "PYTHON" | "RUST" | "CSHARP" | "WEB" | "DEVOPS" | "SCHOOL";

interface ProjectData {
  id: string;
  name: string;
  status: string;
  tech: string;
  period: string;
  categories: ProjectCategory[];
  details: string;
  role: string;
  overview: string;
  features: string[];
  repo: string;
}

interface LanguageCore {
  id: string;
  category: ProjectCategory;
  name: string;
  iconTag: string;
  description: string;
}

export function ProjectsPopup({ icon, onClose }: ProjectsPopupProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedLang, setSelectedLang] = useState<LanguageCore | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [panTransform, setPanTransform] = useState<string>("");
  const viewportRef = useRef<HTMLDivElement>(null);

  // 1. Database dei Core (linguaggi/aree tecniche reali dal CV)
  const languages: LanguageCore[] = [
    { id: "LANG_01", category: "PYTHON", name: "PYTHON_NET", iconTag: "PY", description: "Backend API asincrone, automazione e tool desktop." },
    { id: "LANG_02", category: "RUST", name: "RUST_SYSTEM", iconTag: "RS", description: "Backend a tre livelli ad alte prestazioni e memoria sicura." },
    { id: "LANG_03", category: "CSHARP", name: "DOTNET_CORE", iconTag: "C#", description: "REST API e servizi backend in C# / .NET." },
    { id: "LANG_04", category: "WEB", name: "WEB_STACK", iconTag: "TS", description: "Interfacce React/Next.js e piattaforme web full-stack." },
    { id: "LANG_05", category: "DEVOPS", name: "DEVOPS_INFRA", iconTag: "OP", description: "Container, orchestrazione, IAM e infrastruttura self-hosted." },
    { id: "LANG_06", category: "SCHOOL", name: "SCHOOL_LOGS", iconTag: "ED", description: "Progetti ed esperienze extracurriculari da percorso scolastico." },
  ];

  // 2. Database dei progetti reali (dal CV di Federico Grimaldi)
  const allProjects: ProjectData[] = [
    {
      id: "PROJ_01", name: "KEYDEN", status: "ACTIVE", tech: "Python (FastAPI) / TypeScript (Next.js)", period: "08/2024 - Presente",
      categories: ["PYTHON", "WEB"], role: "Founder & Full-Stack Developer", repo: "github.com/FedericoGrim/keyden",
      details: "Password manager open-source con Clean Architecture, DDD e IAM enterprise-grade.",
      overview: "Password manager open-source progettato applicando Clean Architecture e Domain-Driven Design end-to-end. Le API asincrone in FastAPI usano dependency injection (IoC), hashing Argon2 per le credenziali e Keycloak (OAuth2/JWT) per l'identity management di livello enterprise.",
      features: [
        "Clean Architecture e Domain-Driven Design su tutto lo stack",
        "Autenticazione enterprise con Keycloak (OAuth2/JWT) e hashing Argon2",
        "Persistenza PostgreSQL con SQLAlchemy, migrazioni Alembic e validazione Pydantic",
        "UI React/Next.js responsive con orchestrazione multi-container via Docker Compose",
        "Documentazione Sphinx e API documentate con Swagger UI",
      ],
    },
    {
      id: "PROJ_02", name: "ICCOM_PLATFORM", status: "COMPLETED", tech: "Rust / React (Vite)", period: "02/2026 - 05/2026",
      categories: ["RUST", "WEB", "DEVOPS"], role: "Software Developer (Freelance)", repo: "Privato (cliente)",
      details: "Backend scalabile in Rust con autenticazione Keycloak e frontend React/Vite.",
      overview: "Progettazione e sviluppo di un backend scalabile per ICCOM S.R.L. basato su architettura a tre livelli (Three-Layered Design) in Rust, con autenticazione sicura tramite Keycloak e OAuth 2.0. Frontend realizzato in React con Vite, distribuito in produzione tramite Docker Compose.",
      features: [
        "Backend in Rust con architettura Three-Layered per separazione delle responsabilità",
        "Autenticazione sicura con Keycloak e OAuth 2.0",
        "Frontend React/Vite integrato con le API del backend",
        "Deployment production-ready orchestrato con Docker Compose",
      ],
    },
    {
      id: "PROJ_03", name: "ICCOM_DESKTOP_TOOLS", status: "COMPLETED", tech: "Python / CustomTkinter / Pandas", period: "08/2024 - 06/2025",
      categories: ["PYTHON"], role: "Junior Full-Stack Developer (Stage)", repo: "Privato (azienda)",
      details: "App desktop Python per automazione dati ed export Excel.",
      overview: "Sviluppo di applicazioni desktop custom in Python per l'automazione di processi di elaborazione dati ed export Excel, con manutenzione evolutiva di strumenti legacy aziendali.",
      features: [
        "GUI desktop realizzate con CustomTkinter",
        "Automazione di elaborazione dati ed export Excel con Pandas",
        "Manutenzione e refactoring di tool legacy esistenti",
      ],
    },
    {
      id: "PROJ_04", name: "ICCOM_MONITOR_PORTAL", status: "COMPLETED", tech: "JavaScript / HTML5 / CSS3 / SQL", period: "08/2024 - 06/2025",
      categories: ["WEB", "DEVOPS"], role: "Junior Full-Stack Developer (Stage)", repo: "Privato (azienda)",
      details: "Piattaforma web interna per aggregazione dati e monitoraggio.",
      overview: "Sviluppo di una piattaforma web interna per l'aggregazione e il monitoraggio dei dati tra i vari reparti aziendali, affiancata da configurazione e supporto dell'infrastruttura di rete professionale (Cisco, MikroTik, UniFi) con assistenza on-site e da remoto.",
      features: [
        "Piattaforma web interna per aggregazione dati multi-reparto",
        "Query e reportistica su database SQL",
        "Configurazione e supporto di rete professionale (Cisco, MikroTik, UniFi)",
      ],
    },
    {
      id: "PROJ_05", name: "EXTRANET_MICROSERVICES", status: "COMPLETED", tech: "C# (.NET) / Next.js / React / TypeScript", period: "01/2024 - 05/2024",
      categories: ["CSHARP", "WEB", "DEVOPS"], role: "Junior Backend/Full-Stack Developer (Stage)", repo: "Privato (azienda)",
      details: "Microservizi C# .NET in team Agile con workflow DevOps production-grade.",
      overview: "Collaborazione in team Agile su architetture a microservizi e workflow DevOps production-grade. Sviluppo di REST API in C# .NET con gestione di database relazionali PostgreSQL e integrazione di Keycloak per IAM basato su OAuth 2.0/JWT. Contributo a componenti frontend responsive in Next.js/React/TypeScript.",
      features: [
        "REST API sviluppate in C# .NET con PostgreSQL",
        "Autenticazione IAM con Keycloak (OAuth 2.0/JWT)",
        "Componenti frontend responsive in Next.js, React e TypeScript",
        "Containerizzazione Docker e orchestrazione Kubernetes locale (k3d, Helm)",
        "Infrastructure as Code con Terraform e pipeline CI/CD su GitHub Actions",
      ],
    },
    {
      id: "PROJ_06", name: "PERSONAL_HOME_LAB", status: "ACTIVE", tech: "Docker / Kubernetes / Terraform / Keycloak", period: "In corso",
      categories: ["DEVOPS"], role: "Owner & Maintainer", repo: "N/D (infrastruttura privata)",
      details: "Infrastruttura self-hosted personale per identity management e zero-trust.",
      overview: "Infrastruttura personale self-hosted per l'esplorazione pratica di concetti di produzione: orchestrazione container, identity management centralizzato e sicurezza zero-trust su un ambiente multi-VM.",
      features: [
        "Ecosistema Docker gestito con Portainer e GitLab self-hosted per CI/CD",
        "Ambiente multi-VM (Ubuntu Server) con accesso VNC",
        "Identity management centralizzato con istanza Keycloak dedicata",
        "Accesso remoto zero-trust via Cloudflare Tunnels, Fail2ban e monitoring Netdata",
        "Esecuzione locale di modelli AI con Ollama e Open WebUI",
      ],
    },
    {
      id: "PROJ_07", name: "ROMECUP_2025", status: "COMPLETED", tech: "C / C++ / Python", period: "02/2024 - 03/2024",
      categories: ["SCHOOL"], role: "Team Member - Autonomous Robotics", repo: "mondodigitale.org/progetti/romecup",
      details: "Robot calciatori autonomi per la competizione nazionale RomeCup.",
      overview: "Programmazione di due robot calciatori autonomi per la competizione nazionale di robotica RomeCup, con rilevamento della palla in tempo reale (sensori IR, ultrasuoni, bussola IMU) e logica di navigazione autonoma.",
      features: [
        "Rilevamento palla in tempo reale con sensori IR, ultrasuoni e bussola IMU",
        "Logica di navigazione autonoma sviluppata in C/C++ e Python",
        "Risoluzione di guasti hardware e ottimizzazione del codice sotto pressione durante il torneo dal vivo",
      ],
    },
    {
      id: "PROJ_08", name: "TECH_FUSION_LAB", status: "COMPLETED", tech: "Leadership / Peer Education", period: "04/2023 - 05/2024",
      categories: ["SCHOOL"], role: "Co-Founder & Facilitator", repo: "N/D",
      details: "Laboratorio scolastico interdisciplinare di peer education e innovazione.",
      overview: "Co-fondazione e gestione di un laboratorio scolastico interdisciplinare per favorire la condivisione di conoscenze e l'esplorazione tecnica pratica tra studenti, con organizzazione di workshop su IT e telecomunicazioni.",
      features: [
        "Co-fondazione e coordinamento di un laboratorio scolastico interdisciplinare",
        "Organizzazione e conduzione di workshop interattivi su temi IT e telecomunicazioni",
        "Coordinamento di team studenteschi nella progettazione di progetti tecnici",
      ],
    },
  ];

  // Filtra i progetti in base alla categoria selezionata
  const filteredProjects = allProjects.filter(p => {
    if (!selectedLang) return false;
    return p.categories.includes(selectedLang.category);
  });

  const handleSelectLang = useCallback((index: number, blockEl: HTMLDivElement | null) => {
    if (selectedLang) return;

    // Pan the world so the clicked block's screen position becomes the
    // viewport center, then zoom in on that same point.
    const zoom = 2.4;
    if (blockEl && viewportRef.current) {
      const viewportRect = viewportRef.current.getBoundingClientRect();
      const blockRect = blockEl.getBoundingClientRect();
      const viewportCenterX = viewportRect.left + viewportRect.width / 2;
      const viewportCenterY = viewportRect.top + viewportRect.height / 2;
      const blockCenterX = blockRect.left + blockRect.width / 2;
      const blockCenterY = blockRect.top + blockRect.height / 2;
      const offsetX = blockCenterX - viewportCenterX;
      const offsetY = blockCenterY - viewportCenterY;
      const dx = -zoom * offsetX;
      const dy = -zoom * offsetY;
      setPanTransform(`translate(${dx}px, ${dy}px) scale(${zoom})`);
    } else {
      setPanTransform(`scale(${zoom})`);
    }

    setActiveIndex(index);
    setTimeout(() => {
      setSelectedLang(languages[index]);
    }, 600);
  }, [languages, selectedLang]);

  const handleBackToGrid = useCallback(() => {
    setSelectedLang(null);
    setSelectedProject(null);
    setPanTransform("");
  }, []);

  const handleBackToList = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // Tastiera attiva solo sui core principali
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === "Escape") handleBackToList();
        return;
      }

      if (selectedLang) {
        if (e.key === "Escape") handleBackToGrid();
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
        handleSelectLang(activeIndex, null);
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, selectedLang, selectedProject, languages.length, handleSelectLang, handleBackToGrid, handleBackToList, onClose]);

  return (
    <div className="fui-modal-overlay crt-warp" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="crt-scanlines"></div>
      <div className="crt-flicker"></div>

      <div className="fui-interface-container" onClick={(e) => e.stopPropagation()}>

        <div className="fui-border border-left"><div>0001</div><div>0002</div><div>0003</div><div>0004</div><div>0005</div><div>0006</div></div>
        <div className="fui-border border-right"><div>LN_1</div><div>LN_2</div><div>LN_3</div><div>LN_4</div><div>LN_5</div><div>LN_6</div></div>

        <header className="fui-header">
          <div className="header-left">
            {icon && <span className="header-icon">{icon}</span>}
            <h2 className="header-title">CORE_MATRIX // FEDERICO_GRIMALDI</h2>
          </div>
          <button className="fui-close-btn" onClick={onClose}>[ ABORT_CONNECTION ]</button>
        </header>

        {/* Viewport 3D */}
        <div className="fui-viewport-3d" ref={viewportRef}>
          <div
            className="fui-world-transformer"
            style={panTransform ? { transform: panTransform } : undefined}
          >
            <div className="fui-tactical-grid distributed-6n">

              {languages.map((lang, index) => {
                const isActive = index === activeIndex;

                // Griglia 3x2 per i 6 Core
                const row = Math.floor(index / 3);
                const col = index % 3;

                const computedLeft = 180 + (col * 180);
                const computedTop = 228 + (row * 265);

                return (
                  <div
                    key={lang.id}
                    className={`monolith-wrapper ${isActive ? "system-active" : ""}`}
                    style={{ top: `${computedTop}px`, left: `${computedLeft}px` }}
                    onMouseEnter={() => !selectedLang && setActiveIndex(index)}
                    onClick={(e) => handleSelectLang(index, e.currentTarget)}
                  >
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

        {/* Schermata Pop-up: Lista Progetti del Core selezionato */}
        {selectedLang && (
          <div className="fui-sub-window-overlay" onClick={handleBackToGrid}>
            <div className="fui-sub-window extended-window" onClick={(e) => e.stopPropagation()}>
              <div className="sub-window-header">
                <h3>REPOSITORY // {selectedLang.name} // PROJECTS</h3>
                <button onClick={handleBackToGrid}>[BACK_TO_GRID]</button>
              </div>
              <div className="sub-window-body scrollable-repo">
                <p className="lang-summary-text">{selectedLang.description}</p>

                {filteredProjects.length === 0 ? (
                  <p className="lang-summary-text">Nessun progetto registrato per questo core.</p>
                ) : (
                  <div className="projects-terminal-list">
                    {filteredProjects.map((proj) => (
                      <div
                        key={proj.id}
                        className="terminal-project-row"
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedProject(proj)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setSelectedProject(proj);
                          }
                        }}
                      >
                        <div className="row-main-info">
                          <span className="proj-id-badge">{proj.id}</span>
                          <span className="proj-name-text">{proj.name}</span>
                          <span className="proj-status-badge" data-status={proj.status}>{proj.status}</span>
                        </div>
                        <div className="row-technical-details">
                          <span className="tech-badge">{proj.tech}</span>
                          <span className="loc-counter">{proj.period}</span>
                        </div>
                        <p className="proj-desc-paragraph">{proj.details}</p>
                        <span className="row-open-hint">&gt;&gt; OPEN_FILE</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Schermata Pop-up: Dettaglio completo del progetto selezionato */}
        {selectedProject && (
          <div className="fui-project-overlay" onClick={handleBackToList}>
            <div className="fui-project-window" onClick={(e) => e.stopPropagation()}>
              <div className="project-window-header">
                <h3>{selectedProject.id} // {selectedProject.name}</h3>
                <button onClick={handleBackToList}>[CLOSE_FILE]</button>
              </div>
              <div className="project-window-body scrollable-repo">
                <div className="project-meta-grid">
                  <div className="meta-cell">
                    <span className="meta-label">STATUS</span>
                    <span className="proj-status-badge" data-status={selectedProject.status}>{selectedProject.status}</span>
                  </div>
                  <div className="meta-cell">
                    <span className="meta-label">TECH_STACK</span>
                    <span className="meta-value">{selectedProject.tech}</span>
                  </div>
                  <div className="meta-cell">
                    <span className="meta-label">PERIODO</span>
                    <span className="meta-value">{selectedProject.period}</span>
                  </div>
                  <div className="meta-cell">
                    <span className="meta-label">RUOLO</span>
                    <span className="meta-value">{selectedProject.role}</span>
                  </div>
                  <div className="meta-cell meta-cell-wide">
                    <span className="meta-label">REPO</span>
                    <span className="meta-value">{selectedProject.repo}</span>
                  </div>
                </div>

                <h4 className="project-section-title">// OVERVIEW</h4>
                <p className="project-overview-text">{selectedProject.overview}</p>

                <h4 className="project-section-title">// KEY_FEATURES</h4>
                <ul className="project-features-list">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProjectsPopup;
