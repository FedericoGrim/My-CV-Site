import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

import { DropDownMenu } from "@/components/DropDownMenu/DropDownMenu";
import { Label } from "@/components/Label/Label";
import Link from "next/link";
import Image from 'next/image';
import { MyButton } from "@/components/Button/Button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://federicogrim.github.io/My-CV-Site/"),

  title: "Federico Grimaldi CV Site",
  description: "Federico Grimaldi CV",
  icons: {
    icon: "/My-CV-Site/images/MyLogo.png",
  },
  openGraph: {
    title: "Federico Grimaldi CV Site",
    description: "The site that Federico made to use as a CV",
    images: [
      {
        url: "/My-CV-Site/images/MyLogo.png",
        alt: "Federico Grimaldi CV site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <div className="flex justify-between m-3 bg-black">
          <div className="flex items-center">
            <Link href="/" passHref>
              <Image
                src="/images/myLogo.png"
                alt="Logo di Federico Grimaldi"
                width={50}
                height={50}
                className="z-0"
              />
            </Link>
            <Label text="Federico Grimaldi" className="ml-2 font-Teko text-lg text-MantisGreen" font="teko" />
          </div>

          <DropDownMenu
            iconSelection="menu"
            classnameDropDown="justify-end"
            classnameMenu="my-2 bg-MantisGreen rounded-lg"
            classnameMenuIcon="bg-MantisGreen p-1 rounded-lg text-5xl text-black"
            classnameMyButton="text-black border-2 border-black w-24"
            classnameMyButtonDiv="m-1"
            variantMyButton="outlined"
            options={["Contatti", "Progetti", "Esperienze di lavoro"]}
            buttonsLinks={["/pages/contatti", "/pages/projects"]}
          />
        </div>

        {children}

        <footer>
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row space-x-6">
              <div className="flex-1 p-6 bg-gray-800 rounded-lg text-center">
                <Label text="Social" className="text-white text-2xl font-bold mb-4" font="teko" />
                <div className="space-y-4">
                  <div className="flex justify-center items-center space-x-2">
                    <Label text="LinkedIn:" className="text-white text-lg" font="teko" />
                    <Link href="https://www.linkedin.com/in/federico-grimaldi-3385b9289/" passHref>
                      <Label text="Federico Grimaldi" className="text-blue-500 text-lg" font="teko" />
                    </Link>
                  </div>

                  <div className="flex justify-center items-center space-x-2">
                    <Label text="GitHub:" className="text-white text-lg" font="teko" />
                    <Link href="https://github.com/FedericoGrim" passHref>
                      <Label text="FedericoGrim" className="text-blue-500 text-lg" font="teko" />
                    </Link>
                  </div>

                  <div className="flex justify-center items-center space-x-2">
                    <Label text="X/Twitter:" className="text-white text-lg" font="teko" />
                    <Link href="https://twitter.com/esempio" passHref>
                      <Label text="@esempio" className="text-blue-500 text-lg" font="teko" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6 bg-green-800 rounded-lg text-center space-y-4">
                <Label text="Contattami" className="text-white text-3xl font-bold" font="teko" />

                <address className="flex justify-center space-x-2">
                  <Label text="Email:" className="text-white text-lg" font="teko" />
                  <Link href="mailto:federico.grimaldi2006@gmail.com?subject=Richiesta%20informazioni&body=Ciao%20Federico,%0D%0A%0D%0AScrivo%20per%20richiedere%20informazioni%20su..." passHref>
                    <Label text="federico.grimaldi2006@gmail.com" className="text-blue-500 text-lg hover:underline" font="teko" />
                  </Link>
                </address>

                <div className="flex justify-center space-x-2">
                  <Label text="Cellulare:" className="text-white text-lg" font="teko" />
                  <Label text="+39 348 342 3417" className="text-gray-300 text-lg" font="teko" />
                </div>
              </div>
            </div>

            <div className="text-center bg-HunterGreen rounded-lg">
              <MyButton
                className="text-black border-2 border-black w-24 bg-DarkGreen"
                text="Download"
                variant="outlined"
                download="/CVs/CV_18-09-2024(ITA).pdf"
              />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
