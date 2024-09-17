'use client';

import { MyImage } from "@/components/Image/Image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="relative w-full h-[400px]">
        <MyImage 
          src="images/CodeBackground.png" 
          alt="Code Background"
          fill 
          objectFit="cover"
        />
        <MyImage src="images/myLogo.png" alt="Logo di Federico Grimaldi" width={50} height={50} />
      </div>
    </main>
  );
}
