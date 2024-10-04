import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

import { DropDownMenu } from "@/components/DropDownMenu/DropDownMenu";
import { Label } from "@/components/Label/Label";
import Link from "next/link";
import { MyImage } from "@/components/Image/Image";
import { MyButton } from "@/components/Button/Button";
import { AdaptiveFooter } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://federicogrim.github.io/My-CV-Site/"),

  title: "Federico Grimaldi CV Site",
  description: "Federico Grimaldi CV",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Federico Grimaldi CV Site",
    description: "The site that Federico made to use as a CV",
    images: [
      {
        url: "images/MyLogo.png",
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
            <div className="relative flex items-center">
              <Link href="/" passHref>
                <MyImage
                  src="images/myLogo.png"
                  alt="Federico Grimaldi's Logo"
                  width={50}
                  height={50}
                  className="z-0"
                />
              </Link>
            </div>

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
            options={["Contacts", "Projects"]}
            buttonsLinks={["/pages/contacts", "/pages/projects"]}
          />
        </div>

        {children}

        <footer>
          <AdaptiveFooter/>
        </footer>
      </body>
    </html>
  );
}
