"use client";
import React, { useState } from "react";
import "./style.css";
import { MyImage } from "@/components/Image/Image";
import { Person } from "@mui/icons-material";
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
  { label: "Me", icon: <Person fontSize="medium" /> },
  { label: "Work", icon: <WorkIcon fontSize="medium" /> },
  { label: "Study", icon: <SchoolIcon fontSize="medium" /> },
  { label: "GitHub", icon: <GitHubIcon fontSize="medium" /> },
  { label: "Contact", icon: <MailIcon fontSize="medium" /> },
  { label: "Projects", icon: <CodeIcon fontSize="medium" /> },
];

export default function HomePage() {
  const [isClicked, setIsClicked] = useState(false);
  const [titleMoved, setTitleMoved] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [movingIndex, setMovingIndex] = useState<number | null>(null);
  const [revealLogo, setRevealLogo] = useState(false);
  const iconRevealTimer = React.useRef<number | null>(null);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setTitleMoved(true);
    }
  };

  const handleMenuItemClick = (label: string, index: number) => {
    // Start icon movement, open modal after a short delay, and clear moving state after animation
    if (movingIndex !== null) return;
    setMovingIndex(index);
    setTimeout(() => setActiveItem(label), 600);
    setTimeout(() => {
      setMovingIndex(null);
    }, 900);
  };

  const closeModal = () => {
    // Close modal, then reveal the logo first; icons return on logo transition end
    setActiveItem(null);
    setRevealLogo(true);
  };

  const handleLogoTransitionEnd = (event: React.TransitionEvent<HTMLButtonElement>) => {
    if (!revealLogo || activeItem) return;
    if (event.propertyName !== "opacity") return;

    if (iconRevealTimer.current) {
      window.clearTimeout(iconRevealTimer.current);
    }

    iconRevealTimer.current = window.setTimeout(() => {
      setRevealLogo(false);
      iconRevealTimer.current = null;
    }, 300);
  };

  React.useEffect(() => {
    return () => {
      if (iconRevealTimer.current) {
        window.clearTimeout(iconRevealTimer.current);
      }
    };
  }, []);

  return (
    <section className={`page-home min-h-screen relative flex flex-col items-center justify-center bg-transparent text-white ${movingIndex !== null ? 'moving' : ''} ${activeItem ? 'modal-open' : ''} ${revealLogo ? 'reveal-logo' : ''}`}>
      <p className={`page-title font-Teko text-4xl text-center uppercase tracking-[0.3em] text-MantisGreen ${titleMoved ? "moved" : ""}`}>
        Federico Grimaldi
      </p>

      <div className={`logo-menu relative ${isClicked ? "open" : ""}`}>
        <button
          type="button"
          onClick={handleClick}
          onTransitionEnd={handleLogoTransitionEnd}
          className={`glow-ring group flex items-center justify-center rounded-full border-4 p-2 transition duration-500 focus:outline-none focus:ring-2 ${isClicked ? "active" : "base"}`}
        >
          <MyImage
            src="/My-CV-Site/images/myLogo.png"
            alt="Federico Grimaldi logo"
            width={180}
            height={180}
            loading="eager"
            className="rounded-full"
          />
        </button>

        <div className="icon-grid" aria-hidden={!!activeItem || movingIndex !== null}>
          {menuItems.map((item, index) => (
            <div key={item.label} className={`icon-item item-${index} ${movingIndex === index ? 'moving' : ''}`}>
              <button
                type="button"
                className="icon-button"
                onClick={() => handleMenuItemClick(item.label, index)}
                tabIndex={isClicked && !activeItem && movingIndex === null ? 0 : -1}
                aria-pressed={activeItem === item.label}
              >
                {item.icon}
              </button>
              <span className="icon-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p
        className={`fade-text bottom-text mt-6 font-Teko text-2xl text-center uppercase tracking-[0.25em] ${isClicked ? "fade-out text-white/40 pointer-events-none" : "text-white/80"}`}
        aria-hidden={isClicked}
      >
        Press To Discover
      </p>

      {activeItem === "Me" && (
        <MePopup
          onClose={closeModal}
        />
      )}

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


