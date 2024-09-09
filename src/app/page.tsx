""

import { MyImage } from "@/components/Image/Image";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="relative w-full" style={{ height: '400px' }}> {/* Definisci l'altezza desiderata */}
        <Image
          src="/images/CodeBackground.png"
          alt="Code Background"
          fill={true}  // Usa fill invece di layout="fill"
          style={{ objectFit: 'cover' }}  // Usa objectFit come stile inline
        />
      </div>
    </main>
  );
}
