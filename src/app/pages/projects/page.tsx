'use client';

import Link from "next/link";
import { MyImage } from "@/components/Image/Image";
import { Label } from "@/components/Label/Label";

export default function Projects() {

  const ProjectsList = [
    {
      Id: 1,
      Titolo: "My CV Site",
      Descrizione: "Il mio sito web personale e portfolio online.",
      Immagine: "/My-CV-Site/images/myLogo.png",
      Url: "/pages/projects/cv-site",
    },
    {
      Id: 2,
      Titolo: "Password Manager",
      Descrizione: "Gestore password personale con backend dedicato.",
      Immagine: "/My-CV-Site/images/PasswordManagerIcon.png",
      Url: "/pages/projects/password-manager",
    },
    {
      Id: 3,
      Titolo: "Task Manager",
      Descrizione: "Gestore task personale con backend dedicato.",
      Immagine: "/My-CV-Site/images/FotoPlaceHolder.png",
      Url: "/pages/projects/task-manager",
    },
    {
      Id: 4,
      Titolo: "A.J.A.I.",
      Descrizione: "Assistente AI personalizzato.",
      Immagine: "/My-CV-Site/images/FotoPlaceHolder.png",
      Url: "/pages/projects/ajai",
    }
  ];

  return (
    <main className="w-full bg-gradient-to-b from-CalPolyGreen to-BlackGreen p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 w-full max-w-6xl mx-auto mt-16">

        {ProjectsList.map((Project) => (
          <Link key={Project.Id} href={Project.Url} className="group">

            <div className="relative aspect-square rounded-2xl bg-NightGreen border border-white/10 shadow-md">

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2
                              w-36 h-36 rounded-full bg-NightGreen border-4 border-MantisGreen
                              flex items-center justify-center shadow-lg">
                <MyImage
                  src={Project.Immagine}
                  alt={Project.Titolo}
                  width={100}
                  height={100}
                  priority
                />
              </div>

              <div className="h-full flex rounded-2xl flex-col items-center 
                              justify-center px-4 border-4 border-MantisGreen text-center gap-2">
                <Label
                  text={[Project.Titolo]}
                  className="font-bold text-MantisGreen text-xl"
                />

                <Label
                  text={[Project.Descrizione]}
                  className="text-white text-sm"
                />
              </div>
            </div>
          </Link>
        ))}

      </div>
    </main>
  );
}
