'use client';

import { useState, useEffect } from "react";
import { Label } from "@/components/Label/Label";
import { MyButton } from "@/components/Button/Button";
import { MyImage } from "@/components/Image/Image";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* ---------------- NAVIGATION HELPERS ---------------- */

function HandleNext(
  slideIndex: number,
  min: number,
  max: number,
  setIndex: (value: number) => void
) {
  setIndex(slideIndex === max ? min : slideIndex + 1);
}

function HandlePrev(
  slideIndex: number,
  min: number,
  max: number,
  setIndex: (value: number) => void
) {
  setIndex(slideIndex === min ? max : slideIndex - 1);
}

/* ---------------- SLIDE RENDER ---------------- */

function RenderProjectSlide(projectSlideIndex: number, isMobile: boolean) {
  switch (projectSlideIndex) {
    case 1:
      return (
        <div className="flex flex-col justify-center items-center h-full">
          <Label
            text="Best Projects:"
            className="text-4xl text-MantisGreen text-center"
            font="teko"
          />
          <Label
            text="Slide left and right to see my best projects in my opinion."
            className="text-2xl text-white text-center max-w-[350px]"
            font="teko"
          />
        </div>
      );

    case 2:
      return isMobile ? (
        <div className="flex flex-col items-center gap-4 px-4">
          <div className="flex items-center gap-4">
            <MyImage
              src="/My-CV-Site/images/PasswordManagerIcon.png"
              alt="Project Image"
              width={150}
              height={150}
              className="rounded-2xl object-cover"
              priority
            />

            <div className="flex flex-col justify-center">
              <Label text="KEYDEN" className="text-4xl text-MantisGreen" font="teko" />
              <Label text="Password Manager" className="text-xl text-LightGreen" font="teko" />
            </div>
          </div>

          <div className="max-w-[350px]">
            <Label
              text={[
                "Il mio password manager è un progetto formativo sviluppato in Python per imparare a gestire dati sensibili in modo sicuro.",
                "Utilizza cifratura simmetrica e un backend semplice che permette di salvare, modificare e recuperare le credenziali.",
                "È stato pensato per studiare CLEAN ARCHITECTURE, REST API, MIGRATIONS e UNIT TESTS."
              ].map((p, i) => (
                <p key={i} className="mb-1">{p}</p>
              ))}
              className="leading-6 text-left text-white text-lg"
              font="roboto"
            />
          </div>
        </div>
      ) : (
        <div className="flex gap-6">
          <MyImage
            src="/My-CV-Site/images/PasswordManagerIcon.png"
            alt="Project Image"
            width={250}
            height={250}
            className="rounded-2xl object-cover"
            priority
          />

          <div className="flex flex-col">
            <div className="flex gap-4 items-baseline">
              <Label text="KEYDEN" className="text-5xl text-MantisGreen" font="teko" />
              <Label text="Password Manager" className="text-3xl text-LightGreen" font="teko" />
            </div>

            <Label
              text={[
                "Il mio password manager è un progetto formativo sviluppato in Python per imparare a gestire dati sensibili in modo sicuro.",
                "Utilizza cifratura simmetrica e un backend semplice che permette di salvare, modificare e recuperare le credenziali.",
                "È stato pensato per studiare CLEAN ARCHITECTURE, REST API, MIGRATIONS e UNIT TESTS."
              ].map((p, i) => (
                <p key={i} className="mb-1">{p}</p>
              ))}
              className="leading-6 text-left text-white text-lg mt-2"
              font="roboto"
            />
          </div>
        </div>
      );

    default:
      return null;
  }
}

/* ---------------- BUTTONS ---------------- */

function HandleNextPrev(
  isMobile: boolean,
  projectSlideIndex: number,
  setProjectSlideIndex: (value: number) => void
) {
  if (isMobile) {
    return (
      <div className="mt-8 flex justify-between w-full max-w-[350px] mx-auto gap-6">
        <MyButton
          variant="outlined"
          ariaLabel="Previous project"
          title="Previous"
          text=""
          className="
            !w-40 !h-14
            !border-2 !border-MantisGreen
            !rounded-xl
            !hover:bg-LightGreen
            !transition !duration-300
            flex items-center justify-center
          "
          onClick={() => HandlePrev(projectSlideIndex, 1, 4, setProjectSlideIndex)}
        >
          <ArrowBackIcon className="!text-MantisGreen !text-5xl" />
        </MyButton>

        <MyButton
          variant="outlined"
          ariaLabel="Next project"
          title="Next"
          text=""
          className="
            !w-40 !h-14
            !border-2 !border-MantisGreen
            !rounded-xl
            !hover:bg-LightGreen
            !transition !duration-300
            flex items-center justify-center
          "
          onClick={() => HandleNext(projectSlideIndex, 1, 4, setProjectSlideIndex)}
        >
          <ArrowForwardIcon className="!text-MantisGreen !text-5xl" />
        </MyButton>
      </div>
    );
  }

  return (
    <>
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <MyButton text="" ariaLabel="Previous project" title="Previous" className="" onClick={() => HandlePrev(projectSlideIndex, 1, 4, setProjectSlideIndex)}>
          <ArrowBackIcon className="!text-MantisGreen !text-4xl" />
        </MyButton>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <MyButton ariaLabel="Next project" title="Next" onClick={() => HandleNext(projectSlideIndex, 1, 4, setProjectSlideIndex)}>
          <ArrowForwardIcon className="!text-MantisGreen !text-4xl" />
        </MyButton>
      </div>
    </>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function ProjectSlider() {
  const [projectSlideIndex, setProjectSlideIndex] = useState(1);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth < 768;

  return (
    <section className="relative w-full min-h-[400px] px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-[800px] mx-auto py-8">
        <div className="w-full h-[500px] flex items-center justify-center">
          {RenderProjectSlide(projectSlideIndex, isMobile)}
        </div>

        {HandleNextPrev(isMobile, projectSlideIndex, setProjectSlideIndex)}
      </div>
    </section>
  );
}
