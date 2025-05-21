"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/Label/Label";

export default function Footer() {
  const [ScreenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const HandleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", HandleResize);
    HandleResize();

    return () => window.removeEventListener("resize", HandleResize);
  }, []);

  const IsMobile = ScreenWidth < 768;

  return (
    <footer className="flex justify-between items-center bg-black border-b-2 border-MantisGreen p-1">
      {IsMobile ? (
        <Label text="boh"/>
      ) : (
        <Label text="BOH"/>
      )}
    </footer>
  );
}
