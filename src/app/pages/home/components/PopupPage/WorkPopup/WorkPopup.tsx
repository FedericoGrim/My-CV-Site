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
    period: "02/2026 - 05/2026",
    summary: "Designed and built a scalable backend for ICCOM S.R.L., deployed to production together with its React frontend.",
    tasks: [
      "Three-layered backend architecture in Rust",
      "Secure authentication with Keycloak and OAuth 2.0",
      "React / Vite frontend integrated with the backend APIs",
      "Production deployment orchestrated with Docker Compose",
    ],
    stack: ["Rust", "Keycloak", "OAuth 2.0", "React", "Vite", "Docker Compose"],
  },
  {
    start: "08/2024",
    company: "ICCOM S.R.L.",
    role: "Junior Full-Stack Developer (Internship)",
    period: "08/2024 - 06/2025",
    summary: "Internship building internal tools and supporting the company's network infrastructure.",
    tasks: [
      "Custom Python desktop apps to automate data processing and Excel exports",
      "Internal web platform to aggregate and monitor data across departments",
      "Maintenance and refactoring of legacy company tools",
      "Network setup and support on Cisco, MikroTik and UniFi, on-site and remote",
    ],
    stack: ["Python", "CustomTkinter", "Pandas", "JavaScript", "SQL", "Networking"],
  },
  {
    start: "01/2024",
    company: "EXTRANET",
    role: "Junior Backend / Full-Stack Developer (Internship)",
    period: "01/2024 - 05/2024",
    summary: "Agile team work on a microservices architecture with production-grade DevOps workflows.",
    tasks: [
      "REST APIs in C# .NET backed by PostgreSQL",
      "Keycloak IAM integration with OAuth 2.0 / JWT",
      "Responsive frontend components in Next.js, React and TypeScript",
      "Docker, local Kubernetes (k3d, Helm), Terraform and GitHub Actions CI/CD",
    ],
    stack: ["C#", ".NET", "PostgreSQL", "Keycloak", "Next.js", "Kubernetes", "Terraform"],
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
