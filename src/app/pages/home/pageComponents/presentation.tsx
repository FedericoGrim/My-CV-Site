import React, { useEffect, useState } from "react";
import { MyImage } from "@/components/Image/Image";
import Label from "@/components/Label/Label";

export default function Presentation() {
  const [Opacity, SetOpacity] = useState(0);
  const [IsHovered, SetIsHovered] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      SetOpacity(1);
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section>
      <div
        className="w-full min-h-[350px] py-20 px-4 bg-no-repeat bg-center bg-[length:100%_100%]"
        style={{
          backgroundImage: "url('/My-CV-Site/images/CodeBackground.jpg')",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-center gap-10 bg-FernGreen p-6 rounded-2xl shadow-lg border-4 border-black/50">

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
                "Sono pronto ad affrontare nuove sfide e ad espandere le mie conoscenze per adattarmi all'evoluzione della tecnologia."
              ].map((paragrafo, i) => (
                <p key={i} className="mb-0.5">{paragrafo}</p>
              ))}
              className="leading-6 text-left text-black text-lg"
              font="roboto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
