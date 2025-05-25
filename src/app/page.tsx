"use client";

import { Link } from "@mui/material";
import Image from "next/image";
import { MyImage } from "@/components/Image/Image";
import Label from "@/components/Label/Label";
import { MyButton } from "@/components/Button/Button";
import { useState } from "react";

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
            <Label text="Favourite languages and technologies:" className="text-4xl text-MantisGreen text-center w-auto" font="teko" />
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

  return (
    <section className="w-full bg-gradient-to-b from-CalPolyGreen to-Black">
      {/* Sezione di presentazione */}
      <section>
        <div className="relative w-full h-[400px] mb-20">
          <MyImage
            src="/images/CodeBackground.jpg"
            alt="Code Background"
            fill
            objectFit="cover"
            priority
            divImageStyle={{ height: "400px" }}
          />
          <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full">
            <div className="text-center">
              <MyImage
                src="/images/FotoPlaceHolder.png"
                alt="Round Image"
                width={250}
                height={250}
                className="rounded-full border-4 border-LightGreen mx-auto"
                priority
              />
              <Label
                text="Federico Grimaldi"
                className="font-Teko text-5xl text-LightGreen text-center whitespace-nowrap mt-3 mb-12"
                font="teko"
              />
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-center h-auto my-10 px-4">
          <Label
            text="Sono Federico Grimaldi, uno studente di Quinta Superiore (2024-2025) appassionato di informatica, soprattutto programmazione. Con una solida conoscenza informatica e una ottima abilità nel problem solving, sono pronto ad affrontare nuove sfide e ad ampliare le mie conoscenze. Sono sempre desideroso di imparare e sono motivato a cogliere ogni opportunità per crescere nel campo dell'informatica."
            className="text-center leading-6 font-regular"
            font="merriweather"
          />
        </div>
      </section>

      {/* Istruzione */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-NightGreen rounded-t-xl rounded-b-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-white font-teko bg-Black p-4 rounded-t-xl">
            Istruzione
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* ITTS Carlo Grassi */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-6 mr-4 ml-4 mb-4">
              <Link href="https://www.itisgrassi.edu.it" className="no-underline">
              <div className="flex items-center gap-6">
                <Image
                  src="/images/FotoPlaceHolder.png"
                  alt="ITTS Carlo Grassi"
                  width={100}
                  height={100}
                  priority
                />
                <div>
                  <Label
                    text="ITTS Carlo Grassi"
                    className="text-2xl text-lightBlue"
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
                <Label
                  text="Ore PCTO: 2000"
                  className="text-center text-black"
                  font="inter"
                />
              </div>
              </Link>
            </div>

            {/* ITS Academy */}
            <div className="flex-1 bg-white rounded-lg shadow-lg p-6 mr-4 ml-4 mb-4">
              <Link href="https://www.its-ictpiemonte.it/corsi/backend-developer/" className="no-underline">
                <div className="flex items-center gap-6">
                  <Image
                    src="/images/ITS-Logo.jpg"
                    alt="ITS Academy"
                    width={100}
                    height={100}
                    priority
                  />
                  <div>
                    <Label
                      text="ITS Academy"
                      className="text-2xl text-lightBlue"
                      font="teko"
                    />
                    <Label
                      text="Frequentato il corso biennale di Software Develorep presso l'ITS Academy (Torino Piemonte) dall'anno 2025-2027."
                      className="text-left text-black"
                      font="merriweather"
                    />
                  </div>
                </div>

                <div className="flex justify-center gap-4 items-center mt-6">
                  <Label
                    text="Ore di lavoro in azienda: 2000 ore"
                    className="text-center font-bold text-black"
                    font="merriweather"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Projects */}
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
      <section className="bg-cover bg-center" style={{ backgroundImage: "url('/images/CodeGreenBackground.jpg')" }}>
        <div className="relative z-10 text-center px-4 py-10 bg-black/50">
          <Label
            text="Lavoro con dei principi:"
            className="font-Teko text-5xl text-LightGreen whitespace-nowrap"
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

      {/* Tecnologie preferite */}
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
  );
};

export default HomePage;
