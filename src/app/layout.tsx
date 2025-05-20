import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

import Header from "@/components/Header/Header"; // componente client
import { AdaptiveFooter } from "@/components/LayoutComponents/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://federicogrim.github.io/My-CV-Site/"),
  title: "Federico Grimaldi CV Site",
  description: "Federico Grimaldi CV",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Federico Grimaldi CV Site",
    description: "The site that Federico made to use as a CV",
    images: [{ url: "images/MyLogo.png", alt: "Federico Grimaldi CV site" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        {/* <AdaptiveFooter /> */}
      </body>
    </html>
  );
}
