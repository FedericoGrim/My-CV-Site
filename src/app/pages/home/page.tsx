"use client";
import React, { useState } from "react";
import "./style.css";
import { MyImage } from "@/components/Image/Image";
import { Person } from "@mui/icons-material";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import StarIcon from '@mui/icons-material/Star';

const menuItems = [
  { label: "Me", icon: <Person fontSize="small" /> },
  { label: "Work", icon: <WorkIcon fontSize="small" /> },
  { label: "Study", icon: <SchoolIcon fontSize="small" /> },
  { label: "GitHub", icon: <GitHubIcon fontSize="small" /> },
  { label: "Contact", icon: <MailIcon fontSize="small" /> },
  { label: "Projects", icon: <StarIcon fontSize="small" /> },
];

export default function HomePage() {
  const [isClicked, setIsClicked] = useState(false);
  const [titleMoved, setTitleMoved] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setTitleMoved(true);
    }
  };

  const handleMenuItemClick = (label: string) => {
    console.log(`${label} clicked`);
  };

  return (
    <section className="page-home min-h-screen relative flex flex-col items-center justify-center bg-transparent text-white">
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
            width={180}
            height={180}
            loading="eager"
            className="rounded-full"
          />
        </button>

        <div className="icon-grid">
          {menuItems.map((item, index) => (
            <div key={item.label} className={`icon-item item-${index}`}>
              <button
                type="button"
                className="icon-button"
                onClick={() => handleMenuItemClick(item.label)}
                tabIndex={isClicked ? 0 : -1}
              >
                {item.icon}
              </button>
              <span className="icon-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <p className={`fade-text bottom-text mt-6 font-Teko text-2xl text-center uppercase tracking-[0.25em] ${isClicked ? "fade-out text-white/40" : "text-white/80"}`}>
        Press To Discover
      </p>
    </section>
  );
};


