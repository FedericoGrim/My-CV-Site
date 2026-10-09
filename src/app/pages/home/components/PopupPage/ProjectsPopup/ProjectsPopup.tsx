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

  // 1. Technical cores (languages / areas from the CV)
  const languages: LanguageCore[] = [
    { id: "LANG_01", category: "PYTHON", name: "PYTHON_NET", iconTag: "PY", description: "Async backend APIs, automation and desktop tools." },
    { id: "LANG_02", category: "RUST", name: "RUST_SYSTEM", iconTag: "RS", description: "High-performance, memory-safe three-layered backends." },
    { id: "LANG_03", category: "CSHARP", name: "DOTNET_CORE", iconTag: "C#", description: "REST APIs and backend services in C# / .NET." },
    { id: "LANG_04", category: "WEB", name: "WEB_STACK", iconTag: "TS", description: "React / Next.js interfaces and full-stack web platforms." },
    { id: "LANG_05", category: "DEVOPS", name: "DEVOPS_INFRA", iconTag: "OP", description: "Containers, orchestration, IAM and self-hosted infrastructure." },
    { id: "LANG_06", category: "SCHOOL", name: "SCHOOL_LOGS", iconTag: "ED", description: "Extracurricular projects and experiences from high school." },
  ];

  // 2. Projects from the CV
  const allProjects: ProjectData[] = [
    {
      id: "PROJ_01", name: "KEYDEN", status: "ACTIVE", tech: "Python (FastAPI) / TypeScript (Next.js)", period: "08/2024 - Present",
      categories: ["PYTHON", "WEB"], role: "Creator & Full-Stack Developer (personal project)", repo: "github.com/FedericoGrim/Keyden-PasswordManager",
      details: "Open-source password manager built with Clean Architecture, DDD and secure IAM.",
      overview: "Full-stack open-source password manager built with Clean Architecture and Domain-Driven Design for a strict separation of concerns. Async APIs in FastAPI with Dependency Injector (IoC), Argon2 hashing, strong encryption and Keycloak (OAuth2/JWT) for secure identity and access management.",
      features: [
        "Clean Architecture and Domain-Driven Design across the stack",
        "Async FastAPI APIs with Dependency Injector (IoC)",
        "Argon2 hashing, strong encryption and Keycloak (OAuth2/JWT) for IAM",
        "PostgreSQL data layer with async SQLAlchemy ORM, Alembic migrations and Pydantic validation",
        "Responsive React / Next.js UI with Axios, multi-container setup with Docker Compose",
        "Quality and docs through Pytest, Sphinx and Swagger UI",
      ],
    },
    {
      id: "PROJ_02", name: "ICCOM_PLATFORM", status: "COMPLETED", tech: "Rust / MongoDB / React (Vite)", period: "02/2026 - 06/2026",
      categories: ["RUST", "WEB", "DEVOPS"], role: "Software Developer (Freelance)", repo: "Private (client)",
      details: "High-performance Rust backend with MongoDB, Keycloak and a React / Vite frontend.",
      overview: "High-performance backend for ICCOM S.R.L. written in Rust on a three-layered architecture, for clear separation of concerns, simple code and modularity. Flexible document data layer in MongoDB, role-based authentication with Keycloak (OAuth 2.0/JWT), and a fast React / Vite frontend, all containerized with Docker Compose.",
      features: [
        "Three-layered Rust backend for separation of concerns and modularity",
        "Flexible document database layer with MongoDB",
        "Secure role-based authentication with Keycloak (OAuth 2.0/JWT)",
        "Fast, lightweight React / Vite frontend",
        "Whole ecosystem containerized with Docker and Docker Compose",
      ],
    },
    {
      id: "PROJ_03", name: "ICCOM_DESKTOP_TOOLS", status: "COMPLETED", tech: "Python / CustomTkinter / Pandas", period: "08/2024 - 06/2025",
      categories: ["PYTHON"], role: "Junior Full-Stack Developer (Apprenticeship)", repo: "Private (company)",
      details: "Python desktop apps for data automation and Excel reports.",
      overview: "Custom Python desktop applications that automate data processing and Excel report generation, together with maintenance and updates of legacy tools built by previous teams.",
      features: [
        "Desktop GUIs built with CustomTkinter",
        "Data processing and Excel report generation automated with Pandas",
        "Maintenance and updates of existing legacy tools",
      ],
    },
    {
      id: "PROJ_04", name: "ICCOM_MONITOR_PORTAL", status: "COMPLETED", tech: "Python / JavaScript / HTML5 / CSS3 / SQL", period: "08/2024 - 06/2025",
      categories: ["WEB", "DEVOPS"], role: "Junior Full-Stack Developer (Apprenticeship)", repo: "Private (company)",
      details: "Internal web platform to aggregate data and monitor company departments.",
      overview: "Internal web platform connected to a Python backend that aggregates data and monitors the status of the company's departments, alongside configuration and maintenance of professional network hardware (Cisco, MikroTik, UniFi) with on-site and remote support for clients.",
      features: [
        "Internal web platform backed by Python for cross-department monitoring",
        "Data aggregation on SQL databases",
        "Network hardware setup and support (Cisco, MikroTik, UniFi)",
      ],
    },
    {
      id: "PROJ_05", name: "EXTRANET_MICROSERVICES", status: "COMPLETED", tech: "C# (.NET) / Next.js / React / TypeScript", period: "2023/24 (4th year of high school)",
      categories: ["CSHARP", "WEB", "DEVOPS"], role: "Junior Backend / Full-Stack Developer (Internship)", repo: "Private (company)",
      details: "C# .NET microservices in an Agile team with modern DevOps workflows.",
      overview: "Work inside an Agile team on microservices and modern DevOps workflows, guided by a senior developer. REST APIs in C# .NET on PostgreSQL, Keycloak integration for OAuth 2.0/JWT authentication, and responsive UI components for an internal Next.js app.",
      features: [
        "REST APIs in C# .NET on relational PostgreSQL data models",
        "IAM with Keycloak (OAuth 2.0/JWT)",
        "Responsive frontend components in Next.js, React and TypeScript",
        "Docker in practice, plus first exposure to local Kubernetes (k3d), Helm / Helmfile and Terraform",
        "GitHub collaboration and CI/CD foundations with GitHub Actions",
      ],
    },
    {
      id: "PROJ_06", name: "PERSONAL_HOME_LAB", status: "ACTIVE", tech: "Ubuntu Server / Docker / Portainer / GitLab / Keycloak", period: "Ongoing",
      categories: ["DEVOPS"], role: "Owner & Maintainer", repo: "N/A (private infrastructure)",
      details: "Self-hosted infrastructure for containers, CI/CD, local AI and zero-trust access.",
      overview: "Headless Ubuntu Server hosting several Linux VMs and a Docker ecosystem, used to run self-hosted databases, personal projects, CI/CD, local AI models and centralized identity management behind zero-trust remote access.",
      features: [
        "Headless Ubuntu Server with multiple Linux VMs reachable over VNC",
        "Docker ecosystem managed with Portainer for databases, projects and utilities",
        "Self-hosted GitLab for repositories and personal CI/CD workflows",
        "Local AI models with Ollama and Open WebUI, plus a dedicated Keycloak instance for IAM",
        "Zero-trust access with Cloudflare Tunnels, Fail2ban intrusion prevention and Netdata monitoring",
      ],
    },
    {
      id: "PROJ_07", name: "ROMECUP_2025", status: "COMPLETED", tech: "C / C++ / Python", period: "02/2024 - 03/2024",
      categories: ["SCHOOL"], role: "Software Developer (Team) / Hardware Integrator", repo: "mondodigitale.org/progetti/romecup",
      details: "Two autonomous soccer robots for the RomeCup national robotics competition.",
      overview: "Design and programming of two autonomous soccer robots (Soccer Hub - Twin Robots category) for the RomeCup national robotics competition by Fondazione Mondo Digitale, able to locate an IR-emitting ball and coordinate their moves to score.",
      features: [
        "Embedded C/C++ and Python for motor control and real-time decision making",
        "IR sensors, ultrasonic sensors and IMU compasses for spatial orientation",
        "Autonomous navigation, ball tracking and attack / defense strategies",
        "Fixing hardware failures and optimizing code under pressure during the tournament",
      ],
    },
    {
      id: "PROJ_08", name: "TECH_FUSION_LAB", status: "COMPLETED", tech: "Leadership / Peer Education", period: "04/2023 - 05/2024",
      categories: ["SCHOOL"], role: "Co-Founder & Facilitator", repo: "N/A",
      details: "Interdisciplinary school lab for peer education and innovation.",
      overview: "Co-founded and ran an interdisciplinary school lab to promote knowledge sharing and hands-on technical exploration among students, with interactive workshops on IT and telecommunications.",
      features: [
        "Co-founded and managed an interdisciplinary school lab",
        "Organized and led interactive IT and telecom workshops, simplifying complex concepts",
        "Coordinated student teams designing and building technical projects",
        "Cross-functional collaboration, community building and peer-to-peer mentoring",
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
                  <p className="lang-summary-text">No projects recorded for this core.</p>
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
                    <span className="meta-label">PERIOD</span>
                    <span className="meta-value">{selectedProject.period}</span>
                  </div>
                  <div className="meta-cell">
                    <span className="meta-label">ROLE</span>
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
