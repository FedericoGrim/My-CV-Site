'use client';

import { useState, useEffect } from "react";
import { Label } from "@/components/Label/Label";
import { MyButton } from "@/components/Button/Button";
import { MyImage } from "@/components/Image/Image";

function HandleNext(SlideIndex: number, Min: number, Max: number, SetIndex: (value: number) => void) {
  SetIndex(SlideIndex === Max ? Min : SlideIndex + 1);
}

function HandlePrev(SlideIndex: number, Min: number, Max: number, SetIndex: (value: number) => void) {
  SetIndex(SlideIndex === Min ? Max : SlideIndex - 1);
}

function RenderProjectSlide(ProjectSlideIndex: number, IsMobile: boolean) {
  switch (ProjectSlideIndex) {
case 1:
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Label text="Best Projects:" className="text-4xl text-MantisGreen text-center w-auto" font="teko" />
      <Label
        text="Slide left and right to see my best projects in my opinion."
        className="text-2xl text-white text-center max-w-[350px]"
        font="teko"
      />
    </div>
  );

    case 2:
      return IsMobile ? (
        <div className="flex flex-col items-center gap-4 px-4">
          {/* Riga immagine + titolo/categoria */}
          <div className="flex items-center gap-4">
            <MyImage
              src="/My-CV-Site/images/PasswordManagerIcon.png"
              alt="Project Image"
              width={150}
              height={150}
              className="rounded-2xl object-cover"
              priority
            />

            {/* Titolo e categoria, centrati verticalmente */}
            <div className="flex flex-col justify-center">
              <Label text="KEYDEN" className="text-4xl text-MantisGreen" font="teko" />
              <Label text="Password Manager" className="text-xl text-LightGreen" font="teko" />
            </div>
          </div>

          {/* Testo descrittivo */}
          <div className="max-w-[350px]">
            <Label
              text={[
                 "Il mio password manager è un progetto formativo sviluppato in Python per imparare a gestire dati sensibili in modo sicuro.",
                  "Utilizza cifratura simmetrica e un backend semplice che permette di salvare, modificare e recuperare le credenziali.",
                  "È stato pensato per: studiare la CLEAN ARCHITECTURE, creazione di REST API, utilizzo di MIGRATIONS per la struttura del DB e per creare UNIT TESTS."
              ].map((p, i) => <p key={i} className="mb-1">{p}</p>)}
              className="leading-6 text-left text-white"
              font="merriweather"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-start gap-6">
          <MyImage
            src="/My-CV-Site/images/PasswordManagerIcon.png"
            alt="Profile Image"
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
            <div className="mt-2">
              <Label
                text={[
                  "Il mio password manager è un progetto formativo sviluppato in Python per imparare a gestire dati sensibili in modo sicuro.",
                  "Utilizza cifratura simmetrica e un backend semplice che permette di salvare, modificare e recuperare le credenziali.",
                  "È stato pensato per: studiare la CLEAN ARCHITECTURE, creazione di REST API, utilizzo di MIGRATIONS per la struttura del DB e per creare UNIT TESTS."
                ].map((p, i) => <p key={i} className="mb-1">{p}</p>)}
                className="leading-6 text-left text-white"
                font="merriweather"
              />
            </div>
          </div>
        </div>
      );

    case 3:
      return IsMobile ? (
        <div className="flex flex-col items-center gap-4 px-4">
          {/* Riga immagine + titolo/categoria */}
          <div className="flex items-center gap-4">
            <MyImage
              src="/My-CV-Site/images/FotoPlaceHolder.png"
              alt="Project Image"
              width={150}
              height={150}
              className="rounded-2xl object-cover"
              priority
            />

            {/* Titolo e categoria, centrati verticalmente */}
            <div className="flex flex-col justify-center">
              <Label text="BOH" className="text-4xl text-MantisGreen" font="teko" />
              <Label text="Expence Manager" className="text-xl text-LightGreen" font="teko" />
            </div>
          </div>

          {/* Testo descrittivo */}
          <div className="max-w-[350px]">
            <Label
              text={[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              ].map((p, i) => <p key={i} className="mb-1">{p}</p>)}
              className="leading-6 text-left text-white"
              font="merriweather"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-start gap-6">
          <MyImage
            src="/My-CV-Site/images/FotoPlaceHolder.png"
            alt="Profile Image"
            width={250}
            height={250}
            className="rounded-2xl object-cover"
            priority
          />
          <div className="flex flex-col">
            <div className="flex gap-4 items-baseline">
              <Label text="BOH" className="text-5xl text-MantisGreen" font="teko" />
              <Label text="Expence Manager" className="text-3xl text-LightGreen" font="teko" />
            </div>
            <div className="mt-2">
              <Label
                text={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ].map((p, i) => <p key={i} className="mb-1">{p}</p>)}
                className="leading-6 text-left text-white"
                font="merriweather"
              />
            </div>
          </div>
        </div>
      );

    case 4:
      return IsMobile ? (
        <div className="flex flex-col items-center gap-4 px-4">
          {/* Riga immagine + titolo/categoria */}
          <div className="flex items-center gap-4">
            <MyImage
              src="/My-CV-Site/images/FotoPlaceHolder.png"
              alt="Project Image"
              width={150}
              height={150}
              className="rounded-2xl object-cover"
              priority
            />

            {/* Titolo e categoria, centrati verticalmente */}
            <div className="flex flex-col justify-center">
              <Label text="A.J.A.I." className="text-4xl text-MantisGreen" font="teko" />
              <Label text="Personal Assistant" className="text-xl text-LightGreen" font="teko" />
            </div>
          </div>

          {/* Testo descrittivo */}
          <div className="max-w-[350px]">
            <Label
              text={[
                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              ].map((p, i) => <p key={i} className="mb-1">{p}</p>)}
              className="leading-6 text-left text-white"
              font="merriweather"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-start gap-6">
          <MyImage
            src="/My-CV-Site/images/FotoPlaceHolder.png"
            alt="Profile Image"
            width={250}
            height={250}
            className="rounded-2xl object-cover"
            priority
          />
          <div className="flex flex-col">
            <div className="flex gap-4 items-baseline">
              <Label text="A.J.A.I." className="text-5xl text-MantisGreen" font="teko" />
              <Label text="Personal Assistant" className="text-3xl text-LightGreen" font="teko" />
            </div>
            <div className="mt-2">
              <Label
                text={[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                ].map((p, i) => <p key={i} className="mb-1">{p}</p>)}
                className="leading-6 text-left text-white"
                font="merriweather"
              />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function ProjectSlider() {
  const [ProjectSlideIndex, SetProjectSlideIndex] = useState(1);
  const [ScreenWidth, SetScreenWidth] = useState(0);

  useEffect(() => {
    const HandleResize = () => SetScreenWidth(window.innerWidth);
    window.addEventListener("resize", HandleResize);
    HandleResize();
    return () => window.removeEventListener("resize", HandleResize);
  }, []);

  const IsMobile = ScreenWidth < 768;

  return (
    <section className="relative w-full min-h-[400px] px-4">
      {/* Contenuto slide */}
      <div className="flex flex-col items-center justify-center w-full max-w-[800px] mx-auto py-8 h-[500px]">
        {RenderProjectSlide(ProjectSlideIndex, IsMobile)}
      </div>

      {/* PREV */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
        <MyButton
          text="<"
          className="!text-MantisGreen !font-bold !min-w-0 !px-3 !text-3xl"
          onClick={() => HandlePrev(ProjectSlideIndex, 1, 4, SetProjectSlideIndex)}
        />
      </div>

      {/* NEXT */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
        <MyButton
          text=">"
          className="!text-MantisGreen !font-bold !min-w-0 !px-3 !text-3xl"
          onClick={() => HandleNext(ProjectSlideIndex, 1, 4, SetProjectSlideIndex)}
        />
      </div>
    </section>
  );
}
