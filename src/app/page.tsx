"use client";

import Image from "next/image";

import { MyImage } from "@/components/Image/Image";
import Label from "@/components/Label/Label";

const HomePage = () => {
  return (
    <section>
      <section>
        <div className="relative w-full h-[400px] mb-20">
            <MyImage
              src="/images/CodeBackground.png"
              alt="Background Image"
              fill
            />
          <div className="absolute bottom-[-90px] left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full">
            <div className="text-center">
              <MyImage
                src="/images/FotoPlaceHolder.png"
                alt="Round Image"
                width={250}
                height={250}
                className="rounded-full border-4 border-customGreen mx-auto"
                priority
              />
              <Label
                text="Federico&nbsp;Grimaldi"
                className="font-Teko text-5xl text-customGreen text-center whitespace-nowrap mt-5"
                font="teko"
              />
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto text-center h-auto my-10 px-4">
          <Label
            text="Sono Federico Grimaldi, uno studente di Quinta Superiore appassionato di informatica. Con una solida conoscenza informatica e una buona abilità nel problem solving, sono pronto ad affrontare nuove sfide e ad ampliare le mie conoscenze. Sono sempre desideroso di imparare e sono motivato a cogliere ogni opportunità per crescere nel campo dell'informatica."
            className="text-center leading-6 font-regular"
            font="merriweather"
          />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-HunterGreen  rounded-t-xl rounded-b-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-white font-teko bg-DarkGreen p-4 rounded-t-xl">Istruzione</h2>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* ITTS Carlo Grassi */}
            <div className="flex-1 bg-MantisGreen rounded-lg shadow-lg p-6 mr-4 ml-4 mb-4">
              <div className="flex items-center gap-6">
                <Image
                  src="/images/myLogo.png"
                  alt="ITTS Carlo Grassi"
                  width={100}
                  height={100}
                  priority
                />
                <div>
                  <Label
                    text="ITTS Carlo Grassi"
                    className="text-2xl text-black"
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
            </div>

            {/* ITS Academy */}
            <div className="flex-1 bg-MantisGreen rounded-lg shadow-lg p-6 mr-4 ml-4 mb-4">
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
                    className="text-2xl text-black"
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
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage;
