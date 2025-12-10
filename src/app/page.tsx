"use client";

import { Link } from "@mui/material";
import Image from "next/image";
import { MyImage } from "@/components/Image/Image";
import Label from "@/components/Label/Label";
import { MyButton } from "@/components/Button/Button";

import { useState, useEffect, useRef } from "react";

function UseIntersectionObserver<T extends HTMLElement>(
  ref: React.RefObject<T>,
  options: IntersectionObserverInit = {}
) {
  const [IsVisible, SetIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        SetIsVisible(true);
        observer.unobserve(element); // Osserva una volta sola
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return IsVisible;
}

const HomePage = () => {
  const [ProjectSlideIndex, SetProjectSlideIndex] = useState(1);
  const [TechSlideIndex, SetTechSlideIndex] = useState(1);

  function HandleNext(SlideIndex: number, Min: number, Max: number, SetIndex: (value: number) => void): void {
    SetIndex(SlideIndex === Max ? Min : SlideIndex + 1);
  }

  function HandlePrev(SlideIndex: number, Min: number, Max: number, SetIndex: (value: number) => void): void {
    SetIndex(SlideIndex === Min ? Max : SlideIndex - 1);
  }

  function RenderProjectSlide() {
    switch (ProjectSlideIndex) {
      case 1:
        return (
          <div>
            <Label text="Best Projects:" className="text-4xl text-MantisGreen text-center" font="teko" />
            <Label
              text="Slide left and right to see my best projects in my opinion."
              className="text-2xl text-white text-center"
              font="teko"
            />
          </div>
        );
      case 2:
        return (
          <div className="text-center text-lg">
            <Label text="Progetto 1:" className="text-4xl text-MantisGreen text-center" font="teko" />
          </div>
        );
      case 3:
        return (
          <div className="text-center text-lg">
            <Label text="Progetto 2:" className="text-4xl text-MantisGreen text-center" font="teko" />
          </div>
        );
      case 4:
        return (
          <div className="text-center text-lg">
            <Label text="Progetto 3:" className="text-4xl text-MantisGreen text-center" font="teko" />
          </div>
        );
      default:
        return null;
    }
  }

  function RenderLanguagesAndTecnologiesSlide() {
    switch (TechSlideIndex) {
      case 1:
        return (
          <div>
            <Label text="Favourite technologies:" className="text-4xl text-MantisGreen text-center w-auto" font="teko" />
            <Label
              text="Slide left and right to see my favourite programming languages and technologies."
              className="text-2xl text-white text-center"
              font="teko"
            />
          </div>
        );
      case 2:
        return (
          <div className="text-center text-lg">
            <Label text="Python:" className="text-4xl text-MantisGreen text-center" font="teko" />
          </div>
        );
      case 3:
        return (
          <div className="text-center text-lg">
            <Label text="C#:" className="text-4xl text-MantisGreen text-center" font="teko" />
          </div>
        );
      case 4:
        return (
          <div className="text-center text-lg">
            <Label text="Keycloak:" className="text-4xl text-MantisGreen text-center" font="teko" />
          </div>
        );
      case 5:
        return (
          <div className="text-center text-lg">
            <Label text="Docker" className="text-4xl text-MantisGreen text-center" font="teko" />
          </div>
        );
      case 6:
        return (
          <div className="text-center text-lg">
            <Label text="Kubernetes" className="text-4xl text-MantisGreen text-center" font="teko" />
          </div>
        );
      default:
        return null;
    }
  }

  const [Opacity, SetOpacity] = useState(0);
  const [IsHovered, SetIsHovered] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      SetOpacity(1);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  // Ref per i div da animare nella sezione istruzione
  const CarloGrassiRef = useRef<HTMLDivElement>(null);
  const ItsAcademyRef = useRef<HTMLDivElement>(null);

  // Stato visibilità con intersection observer
  const CarloGrassiVisible = UseIntersectionObserver(CarloGrassiRef as React.RefObject<HTMLElement>);
  const ItsAcademyVisible = UseIntersectionObserver(ItsAcademyRef as React.RefObject<HTMLElement>);

  return (
    <>
      <section className="w-full bg-gradient-to-b from-CalPolyGreen to-Black">
        {/* Sezione di presentazione */}
        <section>
          <div
            className="w-full min-h-[350px] py-20 px-4 bg-no-repeat bg-center bg-[length:100%_100%]"
            style={{
              backgroundImage: "url('/My-CV-Site/images/CodeBackground.jpg')",
            }}
          >
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-center gap-10 bg-FernGreen p-6 rounded-2xl shadow-lg border-4 border-black/50">

              {/* Foto */}
              <div
                style={{
                  opacity: Opacity,
                  transition: "opacity 2s ease",
                }}
                className="flex-shrink-0 md:ml-10"
              >
                <MyImage
                  src="/My-CV-Site/images/MyPhoto.jpg"
                  alt="Profile Image"
                  width={250}
                  height={250}
                  className="rounded-2xl border-4 border-black/50"
                  priority
                />
              </div>

              {/* Testo */}
              <div
                style={{
                  transform: IsHovered ? "scale(1.03)" : "scale(1)",
                  transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                onMouseEnter={() => SetIsHovered(true)}
                onMouseLeave={() => SetIsHovered(false)}
                className="md:max-w-[60%]"
              >
                <Label
                  text={[
                    "Sono un ragazzo appassionato di informatica.",
                    "Cerco sempre nuove sfide e tecnologie da utilizzare.",
                    "Amo affrontare sfide che mi impongono di trovare soluzioni fuori dagli schemi.",
                    "Sono spinto dalla possibilità di contribuire all’avanzamento tecnologico.",
                    "Sono spinto ogni giorno dalla possibilità di contribuire all'avanzamento tecnologico e lasciare il mio segno.",
                    "Sono sempre pronto a scoprire nuove soluzioni e tecnologie per migliorare le mie competenze",
                    "Sono pronto ad affrontare nuove sfide e ad espandere le mie conoscenze per adattarmi all'evoluzione della tecnologia"
                  ].map((paragrafo, i) => (
                    <p key={i} className="mb-0.5">{paragrafo}</p>
                  ))}
                  className="leading-6 text-left text-black"
                  font="merriweather"
                />
              </div>

            </div>
          </div>


        </section>

        {/* Istruzione */}
        <section className="w-full bg-black/50 py-5 px-4">
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-MantisGreen font-teko p-4">
              ISTRUZIONE:
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              {/* ITTS Carlo Grassi */}
              <div
                ref={CarloGrassiRef}
                className="flex-1 bg-FernGreen rounded-lg shadow-lg p-6 mr-4 ml-4 mb-4"
                style={{
                  animationName: CarloGrassiVisible ? "SlideInFromLeft" : undefined,
                  animationDuration: CarloGrassiVisible ? "3s" : undefined,
                  animationFillMode: CarloGrassiVisible ? "forwards" : undefined,
                  animationTimingFunction: CarloGrassiVisible ? "ease-out" : undefined,
                  opacity: CarloGrassiVisible ? 1 : 0,
                }}
              >
                <Link href="https://www.itisgrassi.edu.it" className="no-underline text-black">
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
                        className="text-left text-black"
                        font="merriweather"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center gap-4 items-center mt-6 ">
                    <Label
                      text="Uscito: 0/100"
                      className="font-bold text-center text-black"
                      font="merriweather"
                    />
                    <Label text="Ore PCTO: 2000" className="text-center text-black" font="merriweather" />
                  </div>
                </Link>
              </div>

              {/* ITS Academy */}
              <div
                ref={ItsAcademyRef}
                className="flex-1 bg-FernGreen rounded-lg shadow-lg p-6 mr-4 ml-4 mb-4"
                style={{
                  animationName: ItsAcademyVisible ? "SlideInFromRight" : undefined,
                  animationDuration: ItsAcademyVisible ? "3s" : undefined,
                  animationFillMode: ItsAcademyVisible ? "forwards" : undefined,
                  animationTimingFunction: ItsAcademyVisible ? "ease-out" : undefined,
                  opacity: ItsAcademyVisible ? 1 : 0,
                }}
              >
                <Link href="https://www.itsacademy.it" className="no-underline text-black">
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
                        text="Freqentato il corso biennale di Software Develorep presso l'ITS Academy (Torino Piemonte) dall'anno 2025-2027."
                        className="text-left text-black"
                        font="merriweather"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 items-center mt-6">
                    <Label
                      text="Ore di lavoro in azienda: ... ore"
                      className="text-center font-bold text-black"
                      font="merriweather"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section Progetti */}
        <section className="relative w-full h-[400px] flex flex-col items-center justify-center">
          <div className="px-24 w-full">
            {RenderProjectSlide()}
          </div>
          <MyButton
            text="<"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-MantisGreen text-2xl"
            onClick={() => HandlePrev(ProjectSlideIndex, 1, 4, SetProjectSlideIndex)}
          />
          <MyButton
            text=">"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-MantisGreen text-2xl"
            onClick={() => HandleNext(ProjectSlideIndex, 1, 4, SetProjectSlideIndex)}
          />
        </section>

        {/* Work Principles */}
        <section className="bg-cover bg-center w-full" style={{ backgroundImage: "url('/My-CV-Site/images/CodeGreenBackground.jpg')" }}>
          <div className="relative z-10 text-center px-4 py-10 bg-black/50">
            <Label
              text="Lavoro con dei principi:"
              className="font-Teko text-5xl text-MantisGreen w-auto "
              font="teko"
            />
            <p className="text-white text-base mt-2 max-w-xl mx-auto">
              In informatica, credo che seguire dei principi sia fondamentale per creare software di qualità e duraturo, così nel tempo mentre affinavo le mie abilità, ho sviluppato i miei principi di lavoro che seguo sempre quando sviluppo software.
            </p>
            <ul className="text-white text-lg mt-6 max-w-2xl mx-auto text-left list-disc list-inside space-y-2">
              <li>🔧 Scrivo codice semplice e leggibile.</li>
              <li>🧱 Progetto sistemi manutenibili e scalabili.</li>
              <li>📐 Seguo principi solidi di design e architettura.</li>
              <li>🧠 Penso prima, codice dopo.</li>
              <li>🧠 Penso prima, codice dopo.</li>
              <li>🧠 Penso prima, codice dopo.</li>
            </ul>
          </div>
        </section>

        {/* Section Tecnologie */}
        <section className="relative w-full h-[400px] flex flex-col items-center justify-center">
          <div className="relative px-24">
            {RenderLanguagesAndTecnologiesSlide()}
          </div>

          <MyButton
            text="<"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-MantisGreen text-2xl"
            onClick={() => HandlePrev(TechSlideIndex, 1, 6, SetTechSlideIndex)}
          />
          <MyButton
            text=">"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-MantisGreen text-2xl"
            onClick={() => HandleNext(TechSlideIndex, 1, 6, SetTechSlideIndex)}
          />
        </section>
      </section>
    </>
  );
};

export default HomePage;
