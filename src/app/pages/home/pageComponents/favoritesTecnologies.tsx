import { Label } from "@/components/Label/Label";
import { MyButton } from "@/components/Button/Button";
import { useState } from "react";

function HandleNext(SlideIndex: number, Min: number, Max: number, SetIndex: (value: number) => void): void {
  SetIndex(SlideIndex === Max ? Min : SlideIndex + 1);
}

function HandlePrev(SlideIndex: number, Min: number, Max: number, SetIndex: (value: number) => void): void {
  SetIndex(SlideIndex === Min ? Max : SlideIndex - 1);
}

function RenderLanguagesAndTecnologiesSlide(TechSlideIndex: number) {
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

export default function TechnologiesSection() {
  const [TechSlideIndex, SetTechSlideIndex] = useState(1);

  return (
    <section className="relative w-full h-[400px] flex flex-col items-center justify-center">
      <div className="relative px-24">
        {RenderLanguagesAndTecnologiesSlide(TechSlideIndex)}
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
  );
}
