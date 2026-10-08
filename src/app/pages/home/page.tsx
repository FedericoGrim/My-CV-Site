"use client";
import React, { useState } from "react";
import "./style.css";
import { MyImage } from "@/components/Image/Image";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import CodeIcon from '@mui/icons-material/Code';
import { MePopup } from "./components/PopupPage/MePopup/MePopup";
import { WorkPopup } from "./components/PopupPage/WorkPopup/WorkPopup";
import { StudyPopup } from "./components/PopupPage/StudyPopup/StudyPopup";
import { GitHubPopup } from "./components/PopupPage/GitHubPopup/GitHubPopup";
import { ContactPopup } from "./components/PopupPage/ContactPopup/ContactPopup";
import { ProjectsPopup } from "./components/PopupPage/ProjectsPopup/ProjectsPopup";

const menuItems = [
  { label: "Work", icon: <WorkIcon fontSize="medium" /> },
  { label: "Projects", icon: <CodeIcon fontSize="medium" /> },
  { label: "Study", icon: <SchoolIcon fontSize="medium" /> },
  { label: "GitHub", icon: <GitHubIcon fontSize="medium" /> },
  { label: "Contact", icon: <MailIcon fontSize="medium" /> },
];

export default function HomePage() {
  const [isClicked, setIsClicked] = useState(false);
  const [titleMoved, setTitleMoved] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setTitleMoved(true);
    }
    // Pressing the logo again brings the Me section back
    setActiveItem(null);
  };

  const closeModal = () => setActiveItem(null);

  return (
    <section className={`page-home min-h-screen relative flex flex-col items-center justify-center bg-transparent text-white ${isClicked ? 'split' : ''}`}>
      <p className={`page-title font-Teko text-4xl text-center uppercase tracking-[0.3em] text-MantisGreen ${titleMoved ? "moved" : ""}`}>
        Federico Grimaldi
      </p>

      <div className={`logo-menu relative ${isClicked ? "open" : ""}`}>
        <button
          type="button"
          onClick={handleClick}
          className={`glow-ring group flex items-center justify-center rounded-full border-4 p-2 transition duration-500 focus:outline-none focus:ring-2 ${isClicked ? "active" : "base"}`}
        >
          <MyImage
            src="/My-CV-Site/images/myLogo.png"
            alt="Federico Grimaldi logo"
            width={300}
            height={300}
            loading="eager"
            className="rounded-full"
          />
        </button>

        <div className="icon-grid" aria-hidden={!isClicked}>
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={`icon-item item-${index}`}
              onClick={() => setActiveItem(item.label)}
              tabIndex={isClicked ? 0 : -1}
              aria-pressed={activeItem === item.label}
            >
              <span className="icon-button">{item.icon}</span>
              <span className="icon-label">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <p
        className={`fade-text bottom-text mt-6 font-Teko text-2xl text-center uppercase tracking-[0.25em] ${isClicked ? "fade-out text-white/40 pointer-events-none" : "text-white/80"}`}
        aria-hidden={isClicked}
      >
        Press To Discover
      </p>

      {isClicked && !activeItem && <MePopup inline />}

      {activeItem === "Work" && (
        <WorkPopup
          icon={menuItems.find((m) => m.label === activeItem)?.icon ?? null}
          onClose={closeModal}
        />
      )}

      {activeItem === "Study" && (
        <StudyPopup
          icon={menuItems.find((m) => m.label === activeItem)?.icon ?? null}
          onClose={closeModal}
        />
      )}

      {activeItem === "GitHub" && (
        <GitHubPopup
          icon={menuItems.find((m) => m.label === activeItem)?.icon ?? null}
          onClose={closeModal}
        />
      )}

      {activeItem === "Contact" && (
        <ContactPopup
          icon={menuItems.find((m) => m.label === activeItem)?.icon ?? null}
          onClose={closeModal}
        />
      )}

      {activeItem === "Projects" && (
        <ProjectsPopup
          icon={menuItems.find((m) => m.label === activeItem)?.icon ?? null}
          onClose={closeModal}
        />
      )}
    </section>
  );
}


