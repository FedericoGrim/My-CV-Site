"use client";

import React, { useEffect, useRef, useState } from "react";
import "./workpopup.css";

interface WorkPopupProps { icon?: React.ReactNode; onClose: () => void }

interface Job {
  start: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  tasks: string[];
  stack: string[];
}

// Most recent first
const jobs: Job[] = [
  {
    start: "02/2026",
    company: "ICCOM S.R.L.",
    role: "Software Developer (Freelance)",
    period: "02/2026 - 06/2026",
    summary: "Built a high-performance backend and its frontend for ICCOM S.R.L., with the whole ecosystem containerized for smooth deployments.",
    tasks: [
      "Three-layered backend architecture in Rust for clear separation of concerns, simplicity and modularity",
      "Flexible document database layer with MongoDB",
      "Secure role-based authentication with Keycloak (OAuth 2.0 / JWT)",
      "Fast, lightweight React / Vite frontend",
      "Whole ecosystem containerized with Docker and Docker Compose",
    ],
    stack: ["Rust", "MongoDB", "Keycloak", "OAuth 2.0", "React", "Vite", "Docker Compose"],
  },
  {
    start: "09/2024",
    company: "ELECTRONIC LAB",
    role: "IT Technician & Website Maintenance (Internship)",
    period: "09/2024 - 10/2024",
    summary: "28-day internship at a local computer store in Malaga, Spain, during an Erasmus+ mobility programme in my last year of high school.",
    tasks: [
      "IT technical work in a computer store",
      "Website maintenance",
    ],
    stack: ["IT support", "Websites", "Erasmus+"],
  },
  {
    start: "08/2024",
    company: "ICCOM S.R.L.",
    role: "Junior Full-Stack Developer (Internship & Apprenticeship)",
    period: "08/2024 - 06/2025",
    summary: "One-year apprenticeship during my last year of high school, focused on internal software tools, automation and IT infrastructure support. Paused in October 2024 for the Erasmus+ programme.",
    tasks: [
      "Custom Python desktop apps to automate data processing and Excel report generation",
      "Maintenance and updates of legacy tools built by previous teams",
      "Internal web platform with a Python backend to aggregate data and monitor company departments",
      "Configuration and maintenance of Cisco, MikroTik and UniFi network hardware, with on-site and remote support",
    ],
    stack: ["Python", "CustomTkinter", "Pandas", "JavaScript", "HTML5 / CSS3", "SQL", "WordPress", "Networking"],
  },
  {
    start: "2023/24",
    company: "EXTRANET S.R.L.",
    role: "Junior Backend / Full-Stack Developer (Internship)",
    period: "4th year of high school",
    summary: "Team member in an Agile team working on microservices and modern DevOps workflows, guided by a senior developer.",
    tasks: [
      "REST APIs in C# .NET on relational PostgreSQL data models",
      "Keycloak integration for OAuth 2.0 / JWT authentication",
      "Responsive UI components for an internal Next.js app in React and TypeScript",
      "Docker in practice, plus first exposure to local Kubernetes (k3d), Helm / Helmfile and Terraform",
      "GitHub for team collaboration and the foundations of CI/CD with GitHub Actions",
    ],
    stack: ["C#", ".NET", "PostgreSQL", "Keycloak", "Docker", "Kubernetes", "Next.js", "TypeScript"],
  },
];

// Horizontal drag distance in px that counts as a swipe
const SWIPE_THRESHOLD = 50;

export function WorkPopup({ onClose }: WorkPopupProps) {
  const [selected, setSelected] = useState(0);
  const dragStart = useRef<number | null>(null);

  const go = (index: number) => setSelected(Math.max(0, Math.min(jobs.length - 1, index)));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setSelected((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setSelected((i) => Math.min(jobs.length - 1, i + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Swipe the glass panels like Anderton's gloves
  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    dragStart.current = null;
    if (dx <= -SWIPE_THRESHOLD) go(selected + 1);
    else if (dx >= SWIPE_THRESHOLD) go(selected - 1);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Work" onClick={onClose} tabIndex={-1}>
      <div className="modal-panel precog" onClick={(e) => e.stopPropagation()}>
        <header className="precog-header">
          <span>Career archive</span>
          <span className="precog-hint">Drag or use ← → to browse</span>
        </header>

        <div
          className="precog-stage"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => (dragStart.current = null)}
        >
          {jobs.map((job, i) => {
            const offset = i - selected;
            return (
              <article
                key={job.period}
                className={`precog-card ${offset === 0 ? "active" : ""}`}
                style={{ "--offset": offset, "--distance": Math.abs(offset) } as React.CSSProperties}
                onClick={() => go(i)}
                aria-current={offset === 0}
              >
                <span className="precog-corner" aria-hidden="true" />
                <p className="precog-period">{job.period}</p>
                <h3>{job.company}</h3>
                <p className="precog-role">{job.role}</p>
                {offset === 0 && (
                  <div className="precog-detail">
                    <p>{job.summary}</p>
                    <ul className="precog-tasks">
                      {job.tasks.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    <ul className="precog-stack">
                      {job.stack.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <nav className="precog-timeline" aria-label="Timeline">
          {jobs.map((job, i) => (
            <button
              key={job.period}
              className={i === selected ? "active" : ""}
              onClick={() => go(i)}
              aria-label={`${job.company}, ${job.period}`}
            >
              <span className="precog-dot" />
              {job.start}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default WorkPopup;
