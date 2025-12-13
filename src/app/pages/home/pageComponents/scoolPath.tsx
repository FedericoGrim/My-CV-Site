"use client";

import React, { useRef } from "react";
import { Link } from "@mui/material";
import Image from "next/image";
import Label from "@/components/Label/Label";

// Assicurati che il custom hook sia importato o definito
import { UseIntersectionObserver } from "@/app/hooks/useIntersectionObserver";

export default function SchoolPath() {
  // Ref dei div
  const CarloGrassiRef = useRef<HTMLDivElement>(null);
  const ItsAcademyRef = useRef<HTMLDivElement>(null);

  // Stato visibilità con il custom hook
  const CarloGrassiVisible = UseIntersectionObserver(CarloGrassiRef);
  const ItsAcademyVisible = UseIntersectionObserver(ItsAcademyRef);

  return (
    <section className="w-full bg-black/50 py-5 px-4">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-MantisGreen font-teko p-4">
          ISTRUZIONE:
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* ITTS Carlo Grassi */}
          <div
            ref={CarloGrassiRef}
            className={`flex-1 bg-FernGreen rounded-lg shadow-lg p-6 mr-4 ml-4 mb-4 SlideIn ${CarloGrassiVisible ? 'SlideLeft' : 'SlideRight'}`}
          >
            <Link href="https://www.itisgrassi.edu.it" className="!no-underline !text-black">
              <div className="flex items-center gap-6">
                <Image
                  src="/My-CV-Site/images/GrassiLogo.png"
                  alt="ITTS Carlo Grassi"
                  width={100}
                  height={100}
                  priority
                />
                <div>
                  <Label
                    text="ITTS Carlo Grassi"
                    className="text-2xl font-bold"
                    font="teko"
                  />
                  <Label
                    text="Frequentato il corso di Informatica e Telecomunicazioni presso l'ITTS Carlo Grassi (Torino Piemonte) anno 2020-2025."
                    className="text-left !text-black"
                    font="merriweather"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* ITS Academy */}
          <div
            ref={ItsAcademyRef}
            className={`flex-1 bg-FernGreen rounded-lg shadow-lg p-6 mr-4 ml-4 mb-4 SlideIn ${ItsAcademyVisible ? 'SlideRight' : 'SlideLeft'}`}
          >
            <Link href="https://www.itsacademy.it" className="!no-underline !text-black">
              <div className="flex items-center gap-6">
                <Image
                  src="/My-CV-Site/images/ITS-Logo.jpg"
                  alt="ITS Academy"
                  width={100}
                  height={100}
                  priority
                />
                <div>
                  <Label
                    text="ITS Academy"
                    className="text-2xl font-bold"
                    font="teko"
                  />
                  <Label
                    text="Freqentato il corso biennale di Software Developer presso l'ITS Academy (Torino Piemonte) dall'anno 2025-2027."
                    className="text-left !text-black"
                    font="merriweather"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
