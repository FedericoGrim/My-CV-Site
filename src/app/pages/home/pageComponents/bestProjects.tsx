'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Label } from "@/components/Label/Label";
import { MyButton } from "@/components/Button/Button";
import { MyImage } from "@/components/Image/Image";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* ---------------- SLIDE ANIMATION ---------------- */

const SlideVariants = {
  enter: (direction: "next" | "prev") => ({
    x: direction === "next" ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: "next" | "prev") => ({
    x: direction === "next" ? -300 : 300,
    opacity: 0
  })
};

/* ---------------- NAVIGATION HELPERS ---------------- */

function HandleNext(
  slideIndex: number,
  min: number,
  max: number,
  setIndex: (value: number) => void,
  setDirection: (value: "next" | "prev") => void
) {
  setDirection("next");
  setIndex(slideIndex === max ? min : slideIndex + 1);
}

function HandlePrev(
  slideIndex: number,
  min: number,
  max: number,
  setIndex: (value: number) => void,
  setDirection: (value: "next" | "prev") => void
) {
  setDirection("prev");
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
      return (
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-6 items-center`}>
          <MyImage
            src="/My-CV-Site/images/PasswordManagerIcon.png"
            alt="Project Image"
            width={isMobile ? 150 : 250}
            height={isMobile ? 150 : 250}
            className="rounded-2xl object-cover"
            priority
          />

          <div className="flex flex-col max-w-[350px]">
            <div className="flex gap-4 items-baseline">
              <Label text="KEYDEN" className="text-4xl text-MantisGreen" font="teko" />
              <Label text="Password Manager" className="text-xl text-LightGreen" font="teko" />
            </div>

            <Label
              text={[
                "Il mio password manager è un progetto formativo sviluppato in Python per imparare a gestire dati sensibili in modo sicuro.",
                "Utilizza cifratura simmetrica e un backend semplice.",
                "Pensato per studiare CLEAN ARCHITECTURE, REST API e UNIT TESTS."
              ].map((p, i) => <p key={i}>{p}</p>)}
              className="leading-6 text-white text-lg mt-2"
              font="roboto"
            />
          </div>
        </div>
      );

    case 3:
      return (
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-6 items-center`}>
          <MyImage
            src="/My-CV-Site/images/FotoPlaceHolder.png"
            alt="Project Image"
            width={isMobile ? 150 : 250}
            height={isMobile ? 150 : 250}
            className="rounded-2xl object-cover"
            priority
          />

          <div className="flex flex-col max-w-[350px]">
            <div className="flex gap-4 items-baseline">
              <Label text="BOH" className="text-4xl text-MantisGreen" font="teko" />
              <Label text="Expense Manager" className="text-xl text-LightGreen" font="teko" />
            </div>

            <Label
              text={[
                "Progetto per la gestione delle spese personali.",
                "Studio di CRUD, validazioni e architettura.",
                "Pensato per crescere come progetto completo."
              ].map((p, i) => <p key={i}>{p}</p>)}
              className="leading-6 text-white text-lg mt-2"
              font="roboto"
            />
          </div>
        </div>
      );

    case 4:
      return (
        <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-6 items-center`}>
          <MyImage
            src="/My-CV-Site/images/FotoPlaceHolder.png"
            alt="Project Image"
            width={isMobile ? 150 : 250}
            height={isMobile ? 150 : 250}
            className="rounded-2xl object-cover"
            priority
          />

          <div className="flex flex-col max-w-[350px]">
            <div className="flex gap-4 items-baseline">
              <Label text="A.J.A.I." className="text-4xl text-MantisGreen" font="teko" />
              <Label text="Personal Assistant" className="text-xl text-LightGreen" font="teko" />
            </div>

            <Label
              text={[
                "Assistente personale modulare.",
                "Basato su AI e architettura scalabile.",
                "Progetto sperimentale a lungo termine."
              ].map((p, i) => <p key={i}>{p}</p>)}
              className="leading-6 text-white text-lg mt-2"
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
  setProjectSlideIndex: (value: number) => void,
  setSlideDirection: (value: "next" | "prev") => void
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
          onClick={() =>
            HandlePrev(projectSlideIndex, 1, 4, setProjectSlideIndex, setSlideDirection)
          }
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
          onClick={() =>
            HandleNext(projectSlideIndex, 1, 4, setProjectSlideIndex, setSlideDirection)
          }
        >
          <ArrowForwardIcon className="!text-MantisGreen !text-5xl" />
        </MyButton>
      </div>
    );
  }

  return (
    <>
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <MyButton
          text=""
          ariaLabel="Previous project"
          title="Previous"
          className=""
          onClick={() =>
            HandlePrev(projectSlideIndex, 1, 4, setProjectSlideIndex, setSlideDirection)
          }
        >
          <ArrowBackIcon className="!text-MantisGreen !text-4xl" />
        </MyButton>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <MyButton
          ariaLabel="Next project"
          title="Next"
          onClick={() =>
            HandleNext(projectSlideIndex, 1, 4, setProjectSlideIndex, setSlideDirection)
          }
        >
          <ArrowForwardIcon className="!text-MantisGreen !text-4xl" />
        </MyButton>
      </div>
    </>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function ProjectSlider() {
  const [projectSlideIndex, setProjectSlideIndex] = useState(1);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const HandleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", HandleResize);
    HandleResize();
    return () => window.removeEventListener("resize", HandleResize);
  }, []);

  const isMobile = screenWidth < 768;

  return (
    <section className="relative w-full min-h-[400px] px-4">
      <div className="flex flex-col items-center justify-center w-full max-w-[800px] mx-auto py-8">

        {/* SLIDER */}
        <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait" custom={slideDirection}>
            <motion.div
              key={projectSlideIndex}
              custom={slideDirection}
              variants={SlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              {RenderProjectSlide(projectSlideIndex, isMobile)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BUTTONS */}
        {HandleNextPrev(isMobile, projectSlideIndex, setProjectSlideIndex, setSlideDirection)}
      </div>
    </section>
  );
}
