import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

import { DropDownMenu } from "@/components/DropDownMenu/DropDownMenu";
import { MyImage } from "@/components/Image/Image";
import { Label } from "@/components/Label/Label";

import Link from "next/link";
import { MyButton } from "@/components/Button/Button";

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
          <div className="flex flex-col space-y-6">
            <div className="flex flex-row space-x-6">
              {/* Social Section */}
              <div className="flex-1 p-6 bg-DarkGreen rounded-lg text-center">
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
                    <Label text="Instagram:" className="text-white text-lg" font="teko" />
                    <Link href="https://www.instagram.com/federico_grima/" passHref>
                      <Label text="federico_grima" className="text-blue-500 text-lg" font="teko" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Download Section */}
              <div className="w-1/4 p-6 bg-EerieBlackLighter rounded-lg text-center space-y-6">
                <Label text="Download my CV" className="text-white text-2xl font-bold mb-4" font="teko" />
                
                {/* Download Buttons */}
                <div className="flex flex-col space-y-4">
                  <MyButton 
                    className="text-MantisGreen border-2 border-MantisGreen py-2 rounded-lg" 
                    text="Download CV ITA" 
                    variant="outlined" 
                    download="/CVs/CV_18-09-2024(ITA).pdf"
                  />
                  <MyButton 
                    className="text-MantisGreen border-2 border-MantisGreen py-2 rounded-lg" 
                    text="Download CV ENG" 
                    variant="outlined" 
                    download="/CVs/CV_18-09-2024(ENG).pdf"
                  />
                </div>
              </div>

              {/* Contact Section */}
              <div className="flex-1 p-6 bg-DarkGreen rounded-lg text-center space-y-4">
                <Label text="Contact Me" className="text-white text-3xl font-bold" font="teko"/>

                <div className="flex justify-center space-x-2">
                  <Label text="Email:" className="text-white text-lg" font="teko"/>
                  <Link href="mailto:federico.grimaldi2006@gmail.com?subject=Request%20for%20information&body=Hello%20Federico,%0D%0A%0D%0AI%20am%20writing%20to%20request%20information%20about..." passHref>
                    <Label text="federico.grimaldi2006@gmail.com" className="text-blue-500 text-lg hover:underline" font="teko" />
                  </Link>
                </div>

                <div className="flex justify-center space-x-2">
                  <Label text="Phone:" className="text-white text-lg" font="teko"/>
                  <Label text="+39 348 342 3417" className="text-gray-300 text-lg" font="teko"/>
                </div>

                <div className="flex justify-center space-x-2">
                  <Label text="Telegram:" className="text-white text-lg" font="teko"/>
                  <Label text="@FedeGrim" className="text-gray-300 text-lg" font="teko"/>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
