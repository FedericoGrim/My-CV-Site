import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/pages/globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
    description: "Federico Grimaldi CV",
    images: [
      {
        url: "/My-CV-Site/images/MyLogo.png",
        alt: "Federico Grimaldi CV site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/My-CV-Site/images/MyLogo.png"],  
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
