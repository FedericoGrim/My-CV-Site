import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

import { DropDownMenu } from "@/components/DropDownMenu/DropDownMenu";
import { Label } from "@/components/Label/Label";
import Link from "next/link";
import { MyImage } from "@/components/Image/Image";
import { MyButton } from "@/components/Button/Button";
import { AdaptiveFooter } from "@/components/LayoutComponents/Footer/Footer";
import { AdaptiveBody } from "@/components/LayoutComponents/Body/Body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://federicogrim.github.io/My-CV-Site/"),

  title: "Federico Grimaldi CV Site",
  description: "Federico Grimaldi CV",
  icons: {
    icon: "/My-CV-Site/favicon.ico",
  },
  openGraph: {
    title: "Federico Grimaldi CV Site",
    description: "The site that Federico made to use as a CV",
    images: [
      {
        url: "/My-CV-Siteimages/MyLogo.png",
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
        <AdaptiveBody/>

        {children}

        <footer className="">
          <AdaptiveFooter/>
        </footer>
      </body>
    </html>
  );
}
