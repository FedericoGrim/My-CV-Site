import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

import { DropDownMenu } from "@/components/DropDownMenu/DropDownMenu";
import { MyImage } from "@/components/Image/Image";
import { Label } from "@/components/Label/Label";

import Button from "@mui/material/Button";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Federico Grimaldi CV Site",
  description: "The site that Federico made to use as a CV",
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
            <div className="relative flex items-center">
              <Link href="/" passHref>
                <MyImage
                  src="images/myLogo.png"
                  alt="Logo di Federico Grimaldi"
                  width={50}
                  height={50}
                  className="z-0"
                />
              </Link>
            </div>

            <Label text="Federico Grimaldi" className="ml-2 font-Teko text-lg text-customGreen" font="teko" />
          </div>

          <DropDownMenu
            iconSelection="menu"
            classnameDropDown="justify-end"
            classnameMenu="my-2 bg-customGreen rounded-lg" 
            classnameMenuIcon="bg-customGreen p-1 rounded-lg text-5xl text-black"
            classnameMyButton="text-black border-2 border-black w-24"
            classnameMyButtonDiv="m-1"
            variantMyButton="outlined"
            options={["Contatti", "Progetti", "Esperienze di lavoro"]}
            optionsFunctionality={[]}
          />
        </div>

        {children}
        <footer></footer>
      </body>
    </html>
  );
}
