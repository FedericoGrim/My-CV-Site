import { Label } from "@/components/Label/Label";
import { MyImage } from "@/components/Image/Image";

export default function ProjectExplanation() {
  return (
    <div className="mt-8 flex gap-6 text-lg leading-7 text-justify text-DarkCharcoal">
      
      {/* Immagine a sinistra */}
      <MyImage
        src="/My-CV-Site/images/myLogo.png"
        alt="Profile Image"
        width={400}
        height={400}
        className="rounded-2xl"
        priority
      />

      {/* Titolo + testo a destra */}
      <div className="flex flex-col bg-DarkGreen p-6 rounded-2xl shadow-lg border-4 border-black/50">
        <Label
            text={["My CV Site"].map((Paragrafo, i) => (
            <p key={i} className="mb-0.5">{Paragrafo}</p>
          ))}
          className="mb-3 text-2xl font-semibold text-MantisGreen"
        />

        <Label
          text={[
            "Il progetto 'My CV Site' è il mio sito web personale.",
            "L'ho creato per vari motivi.",
            "In primo luogo, volevo avere un portfolio online dove poter mostrare i miei progetti e le mie competenze in modo professionale.",
            "In secondo luogo, desideravo migliorare le mie abilità di sviluppo web praticando con un progetto reale.",
          ].map((Paragrafo, i) => (
            <p key={i} className="mb-0.5">{Paragrafo}</p>
          ))}
          font="roboto"
        />
      </div>
    </div>
  );
}
