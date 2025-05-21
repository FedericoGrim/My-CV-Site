import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

import Header from "@/components/Header/Header"; // componente client
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://federicogrim.github.io/My-CV-Site/"),
  title: "Federico Grimaldi CV Site",
  description: "Federico Grimaldi CV",
  icons: {
    icon: "/images/favicon.png", 
  },
  openGraph: {
    title: "Federico Grimaldi CV Site",
    description: "Federico Grimaldi CV",
    images: [
      {
        url: "/images/MyLogo.png",
        alt: "Federico Grimaldi CV site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/MyLogo.png"],  
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header 
          options={["Projects", "Contacts"]}
          buttonsLinks={["/pages/projects", "/pages/contacts"]}
          classnameMyButtonDiv="flex justify-center items-center"
          classnameMyButton={{"DropDownMenuButtons":"text-DarkGreen font-Teko text-lg border-2 border-DarkGreen rounded-lg px-4 py-2 hover:bg-HunterGreen hover:border-DarkGreen hover:text-MantisGreen transition duration-300",
                              "SeparatedButtons":"text-MantisGreen font-Teko text-lg border-2 hover:text-MantisGreen border-MantisGreen rounded-lg px-4 py-2 hover:bg-HunterGreen hover:text-MantisGreen transition duration-300 hover:border-MantisGreen"}}
          variantMyButton="outlined"  
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
