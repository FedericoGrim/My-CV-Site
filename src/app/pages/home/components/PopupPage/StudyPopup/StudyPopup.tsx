"use client";

import React, { useState } from "react";
import { Antonio } from "next/font/google";
import "./studypopup.css";

const antonio = Antonio({ subsets: ["latin"], weight: ["400", "700"] });

interface StudyPopupProps { icon?: React.ReactNode; onClose: () => void }

interface School {
  code: string;
  name: string;
  logo: string;
  url: string;
  course: string;
  location: string;
  period: string;
  status: string;
  stats: { label: string; value: string }[];
  summary: string;
  focus: string[];
  highlights: string[];
}

const schools: School[] = [
  {
    code: "01-2020",
    name: "ITTS Carlo Grassi",
    logo: "/My-CV-Site/images/GrassiLogo.png",
    url: "https://www.itisgrassi.edu.it",
    course: "Computer Science and Telecommunications",
    location: "Torino (IT)",
    period: "09/2020 - 06/2025",
    status: "Completed",
    stats: [
      { label: "Final grade", value: "100/100" },
      { label: "PCTO hours", value: "2067" },
      { label: "EQF level", value: "4" },
    ],
    summary:
      "Five-year technical diploma in Computer Science and Telecommunications, graduated with full marks. The course built the foundations in programming, networking and systems, paired with a large amount of hands-on work in real companies.",
    focus: ["Programming", "Networks & systems", "Telecommunications", "Databases", "Project management"],
    highlights: [
      "Backend internship on C# .NET microservices with Keycloak IAM, Docker and Kubernetes (2024)",
      "Internship at ICCOM S.R.L.: Python desktop tools and an internal monitoring platform (2024 - 2025)",
      "RomeCup national robotics competition with two autonomous soccer robots",
      "Co-founded Tech Fusion Lab, a peer-education lab running IT and telecom workshops",
      "Cisco IT Essentials certification from the Cisco Networking Academy (03/2025)",
    ],
  },
  {
    code: "02-2025",
    name: "ITS ICT Piemonte",
    logo: "/My-CV-Site/images/ITS-Logo.jpg",
    url: "https://www.its-ictpiemonte.it",
    course: "Higher Technical Diploma - Software Developer",
    location: "Torino (IT)",
    period: "11/2025 - present",
    status: "In progress",
    stats: [{ label: "EQF level", value: "5" }],
    summary:
      "Two-year post-diploma programme to become a Software Developer, alternating classroom modules with periods inside partner companies to work on real software projects.",
    focus: ["Software engineering", "Web development", "Databases", "Cloud & DevOps", "Security"],
    highlights: [
      "Higher technical education (ITS) focused on professional software development",
      "In parallel, freelance backend work in Rust with Keycloak and React for ICCOM S.R.L. (2026)",
    ],
  },
];

export function StudyPopup({ onClose }: StudyPopupProps) {
  const [selected, setSelected] = useState(0);
  const school = schools[selected];

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Study" onClick={onClose} tabIndex={-1}>
      <div className={`modal-panel lcars ${antonio.className}`} onClick={(e) => e.stopPropagation()}>
        <header className="lcars-top">
          <div className="lcars-elbow lcars-elbow-top" />
          <div className="lcars-bar">
            <h2>Educational records</h2>
          </div>
        </header>

        <div className="lcars-middle">
          <nav className="lcars-sidebar" aria-label="Schools">
            {schools.map((s, i) => (
              <button
                key={s.code}
                className={`lcars-side-button ${i === selected ? "active" : ""}`}
                onClick={() => setSelected(i)}
                aria-pressed={i === selected}
              >
                <span>{s.code}</span>
                {s.name}
              </button>
            ))}
            <div className="lcars-side-filler" />
          </nav>

          <section className="lcars-content" key={school.code}>
            <div className="lcars-record-head">
              <img src={school.logo} alt={`${school.name} logo`} className="lcars-logo" />
              <div>
                <h3>{school.name}</h3>
                <p>{school.course}</p>
              </div>
            </div>

            <p className="lcars-summary">{school.summary}</p>

            <dl className="lcars-data">
              <div><dt>Location</dt><dd>{school.location}</dd></div>
              <div><dt>Period</dt><dd>{school.period}</dd></div>
              <div><dt>Status</dt><dd>{school.status}</dd></div>
              {school.stats.map((stat) => (
                <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>
              ))}
            </dl>

            <h4 className="lcars-section">Focus areas</h4>
            <ul className="lcars-chips">
              {school.focus.map((f) => <li key={f}>{f}</li>)}
            </ul>

            <h4 className="lcars-section">Highlights</h4>
            <ul className="lcars-highlights">
              {school.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>

            <a className="lcars-pill lcars-link" href={school.url} target="_blank" rel="noopener noreferrer">
              Access school site
            </a>
          </section>
        </div>

        <footer className="lcars-bottom">
          <div className="lcars-elbow lcars-elbow-bottom" />
          <div className="lcars-bar lcars-bar-segments">
            <span /><span /><span />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default StudyPopup;
