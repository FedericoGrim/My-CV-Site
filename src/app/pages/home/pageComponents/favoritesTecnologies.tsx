'use client';

import { useState, useEffect } from "react";
import { Label } from "@/components/Label/Label";
import { MyButton } from "@/components/Button/Button";

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

function RenderLanguagesAndTecnologiesSlide(techSlideIndex: number) {
  switch (techSlideIndex) {
    case 1:
      return (
        <div className="text-center">
          <Label
            text="Favourite technologies:"
            className="text-4xl text-MantisGreen"
            font="teko"
          />
          <Label
            text="Slide left and right to see my favourite programming languages and technologies."
            className="text-2xl text-white"
            font="teko"
          />
        </div>
      );

    case 2:
      return <Label text="Python" className="text-4xl text-MantisGreen text-center" font="teko" />;
    case 3:
      return <Label text="C#" className="text-4xl text-MantisGreen text-center" font="teko" />;
    case 4:
      return <Label text="Keycloak" className="text-4xl text-MantisGreen text-center" font="teko" />;
    case 5:
      return <Label text="Docker" className="text-4xl text-MantisGreen text-center" font="teko" />;
    case 6:
      return <Label text="Kubernetes" className="text-4xl text-MantisGreen text-center" font="teko" />;

    default:
      return null;
  }
}

/* ---------------- BUTTONS ---------------- */

function HandleNextPrev(
  isMobile: boolean,
  techSlideIndex: number,
  setTechSlideIndex: (value: number) => void
) {
  if (isMobile) {
    return (
      <div className="mt-8 flex justify-between w-full max-w-[350px] mx-auto gap-6">
        <MyButton
          variant="outlined"
          ariaLabel="Previous technology"
          title="Previous"
          className="
            !w-40 !h-14
            !border-2 !border-MantisGreen
            !rounded-xl
            !hover:bg-LightGreen
            !transition !duration-300
            flex items-center justify-center
          "
          onClick={() => HandlePrev(techSlideIndex, 1, 6, setTechSlideIndex)}
        >
          <ArrowBackIcon className="!text-MantisGreen !text-5xl" />
        </MyButton>

        <MyButton
          variant="outlined"
          ariaLabel="Next technology"
          title="Next"
          className="
            !w-40 !h-14
            !border-2 !border-MantisGreen
            !rounded-xl
            !hover:bg-LightGreen
            !transition !duration-300
            flex items-center justify-center
          "
          onClick={() => HandleNext(techSlideIndex, 1, 6, setTechSlideIndex)}
        >
          <ArrowForwardIcon className="!text-MantisGreen !text-5xl" />
        </MyButton>
      </div>
    );
  }

  /* ---------------- DESKTOP ---------------- */

  return (
    <>
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <MyButton
          ariaLabel="Previous technology"
          title="Previous"
          className="flex items-center justify-center"
          onClick={() => HandlePrev(techSlideIndex, 1, 6, setTechSlideIndex)}
        >
          <ArrowBackIcon className="!text-MantisGreen !text-4xl" />
        </MyButton>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <MyButton
          ariaLabel="Next technology"
          title="Next"
          className="flex items-center justify-center"
          onClick={() => HandleNext(techSlideIndex, 1, 6, setTechSlideIndex)}
        >
          <ArrowForwardIcon className="!text-MantisGreen !text-4xl" />
        </MyButton>
      </div>
    </>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function TechnologiesSection() {
  const [techSlideIndex, setTechSlideIndex] = useState(1);
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
        
        {/* Contenuto slide */}
        <div className="w-full h-[300px] flex items-center justify-center">
          {RenderLanguagesAndTecnologiesSlide(techSlideIndex)}
        </div>

        {/* Bottoni */}
        {HandleNextPrev(isMobile, techSlideIndex, setTechSlideIndex)}

      </div>
    </section>
  );
}
