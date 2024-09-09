import { MyImage } from "@/components/Image/Image";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="relative w-full" style={{ height: '400px' }}>
        <MyImage
          src="/images/CodeBackground.png"
          width={50}
          height={50}
        />
      </div>
    </main>
  );
}
