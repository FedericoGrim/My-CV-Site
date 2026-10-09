"use client";

import React, { useState } from "react";
import { Share_Tech_Mono } from "next/font/google";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import "./contactpopup.css";

const shareTechMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

interface ContactPopupProps { icon?: React.ReactNode; onClose: () => void }

interface Entry {
  name: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  bestFor: string;
  action: string;
}

const folders: { name: string; entries: Entry[] }[] = [
  {
    name: "Direct contact",
    entries: [
      { name: "Email", value: "federico.grimaldi2006@gmail.com", href: "mailto:federico.grimaldi2006@gmail.com", icon: <MailOutlineIcon />,
        description: "Standard issue mail terminal. The most reliable way to reach me for anything that needs a written trace.", bestFor: "Job offers, collaborations", action: "Compose message" },
      { name: "Phone", value: "+39 348 342 3417", href: "tel:+393483423417", icon: <PhoneIcon />,
        description: "Direct voice line. Works best when something is quick or urgent.", bestFor: "Quick calls", action: "Start call" },
      { name: "Telegram", value: "@FedeGrim", href: "https://t.me/FedeGrim", icon: <TelegramIcon />,
        description: "Encrypted courier service across the wasteland. Fast and informal.", bestFor: "Quick messages", action: "Open chat" },
    ],
  },
  {
    name: "Social",
    entries: [
      { name: "LinkedIn", value: "Federico Grimaldi", href: "https://www.linkedin.com/in/grimaldi-federico", icon: <LinkedInIcon />,
        description: "Professional network record with my full work history and endorsements.", bestFor: "Professional networking", action: "Open profile" },
      { name: "GitHub", value: "FedericoGrim", href: "https://github.com/FedericoGrim", icon: <GitHubIcon />,
        description: "Archive of my code: personal projects, experiments and this very site.", bestFor: "Code and projects", action: "Open profile" },
      { name: "Instagram", value: "@federico_grima", href: "https://www.instagram.com/federico_grima/", icon: <InstagramIcon />,
        description: "Personal log of life outside the vault.", bestFor: "Personal side", action: "Open profile" },
    ],
  },
  {
    name: "Curriculum vitae",
    entries: [
      { name: "CV (Italiano)", value: "Download from Google Drive", href: "https://drive.google.com/file/d/13JVq1By-XVz3h-OcJ_kq4ndh3_CRdB7U/view?usp=sharing", icon: <DescriptionOutlinedIcon />,
        description: "Complete curriculum vitae in Italian, ready to print or forward.", bestFor: "Italian recruiters", action: "Open file" },
      { name: "CV (English)", value: "Download from Google Drive", href: "https://drive.google.com/file/d/12I7PibYYqV-Of_TJviZxVc2P1WG8mK1m/view?usp=sharing", icon: <DescriptionOutlinedIcon />,
        description: "Complete curriculum vitae in English, ready to print or forward.", bestFor: "International recruiters", action: "Open file" },
    ],
  },
];

export function ContactPopup({ onClose }: ContactPopupProps) {
  const [entry, setEntry] = useState(folders[0].entries[0]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Contact" onClick={onClose} tabIndex={-1}>
      <div className={`modal-panel pipboy ${shareTechMono.className}`} onClick={(e) => e.stopPropagation()}>
        <header className="pip-status">
          <span className="pip-title">Contact</span>
        </header>

        <div className="pip-main">
          <ul className="pip-list">
            {folders.map((folder) => (
              <li key={folder.name}>
                <span className="pip-folder">{folder.name}</span>
                <ul>
                  {folder.entries.map((e) => (
                    <li key={e.name}>
                      <a
                        href={e.href}
                        target={e.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={e === entry ? "selected" : ""}
                        onMouseEnter={() => setEntry(e)}
                        onFocus={() => setEntry(e)}
                      >
                        {e.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="pip-detail" key={entry.name}>
            <div className="pip-art" aria-hidden="true">{entry.icon}</div>
            <p className="pip-description">{entry.description}</p>
            <dl className="pip-stats">
              <div><dt>Channel</dt><dd>{entry.name}</dd></div>
              <div><dt>Address</dt><dd className="pip-value">{entry.value}</dd></div>
              <div><dt>Best for</dt><dd>{entry.bestFor}</dd></div>
            </dl>
            <a
              className="pip-action"
              href={entry.href}
              target={entry.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              [ {entry.action} ]
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPopup;
