import { Label } from "@/components/Label/Label";
import { MyButton } from "@/components/Button/Button";
import { useState } from "react";
import { MyImage } from "@/components/Image/Image";

function HandleNext(SlideIndex: number, Min: number, Max: number, SetIndex: (value: number) => void): void {
  SetIndex(SlideIndex === Max ? Min : SlideIndex + 1);
}

function HandlePrev(SlideIndex: number, Min: number, Max: number, SetIndex: (value: number) => void): void {
  SetIndex(SlideIndex === Min ? Max : SlideIndex - 1);
}

function RenderProjectSlide(ProjectSlideIndex: number) {
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
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Immagine */}
          <div className="flex-shrink-0">
            <MyImage
              src="/My-CV-Site/images/PasswordManagerIcon.png"
              alt="Profile Image"
              width={250}
              height={250}
              className="rounded-2xl object-cover"
              priority
            />
          </div>

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
                ].map((paragrafo, i) => (
                  <p key={i} className="mb-1">{paragrafo}</p>
                ))}
                className="leading-6 text-left text-white"
                font="merriweather"
              />
            </div>
          </div>
        </div>
      );


    case 3:
      return (
        <div className="text-center text-lg">
          <Label text="BOH" className="text-5xl text-MantisGreen text-center" font="teko" />
          <Label text="Expence Manager" className="text-3xl text-LightGreen text-center" font="teko" />

        </div>
      );

    case 4:
      return (
        <div className="text-center text-lg">
          <Label text="A.J.A.I" className="text-5xl text-MantisGreen text-center" font="teko" />
          <Label text="AI Assistant" className="text-3xl text-LightGreen text-center" font="teko" />


        </div>
      );

    default:
      return null;
  }
}

export default function ProjectSlider() {
  const [ProjectSlideIndex, SetProjectSlideIndex] = useState(1);

  return (
<section className="relative w-full min-h-[400px] overflow-hidden">
  <div className="absolute inset-0 flex items-center justify-center px-24">
    {RenderProjectSlide(ProjectSlideIndex)}
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
