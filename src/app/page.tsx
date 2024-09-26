'use client';

import { MyImage } from "@/components/Image/Image";
import Label from "@/components/Label/Label";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="relative w-full">
        <MyImage 
          src="/images/CodeBackground.png" 
          alt="Code Background"
          fill 
          objectFit="cover"
          priority
          divImageStyle={{ height: '400px' }}
        />

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[40px]">
          <MyImage 
            src="/images/FotoPlaceHolder.png" 
            alt="Round Image"
            width={250} 
            height={250} 
            className="rounded-full border-4 border-customGreen"
            priority
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[60px] w-[300px]">
            <Label text="Federico&nbsp;Grimaldi" className="font-Teko text-5xl text-customGreen text-center whitespace-nowrap" font="teko" />
          </div>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[120px] w-[680px] text-center">
          <Label 
            text="Sono Federico Grimaldi, uno studente di Quinta Superiore appassionato di informatica.
                  Con una solida conoscenza informatica e una buona abilità nel problem solving,
                  sono pronto ad affrontare nuove sfide e ad ampliare le mie conoscenze.
                  Sono sempre desideroso di imparare e sono motivato a cogliere ogni opportunità
                  per crescere nel campo dell'informatica." 
            className="text-base text-customGreen leading-6 font-regular" 
            font="merriweather"
          />
        </div>
        <div>
          {/*obbiettivi personali*/}
        </div>
        <div>
          {/*competenze*/}
        </div>
        <div>
          {/*progetti più importanti*/}
        </div>
        <div>
          {/*recensioni su di me*/}
        </div>
      </div>
    </main>
  );
}
