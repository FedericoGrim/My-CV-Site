'use client';

import { MyImage } from "@/components/Image/Image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="relative w-full" style={{ height: '400px' }}>
        {/* Prima immagine di sfondo */}
        <MyImage 
          src="/My-CV-Site/images/CodeBackground.png" 
          alt="Code Background"
          fill 
          objectFit="cover"
          priority
          divImageStyle={{ height: '400px' }}
        />

        {/* Immagine rotonda in basso */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[40px]">
          <MyImage 
            src="/My-CV-Site/images/FotoPlaceHolder.png" 
            alt="Round Image"
            width={250} 
            height={250} 
            className="rounded-full border-4 border-white"
            priority
          />
        </div>
      </div>
    </main>
  );
}
