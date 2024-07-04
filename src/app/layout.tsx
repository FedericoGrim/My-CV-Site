import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

import { DropDownMenu } from "@/components/DropDownMenu/DropDownMenu";

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
      <head>

      </head>

      <body className={inter.className}>
        <div className='flex justify-end m-3'>
          <DropDownMenu
            iconSelection="menu"

            classnameDropDown=""
            classnameMenu='my-2 bg-green-800 rounded-lg'
            classnameMenuIcon='bg-green-800 p-1 rounded-lg text-5xl'
            classnameMyButton="text-black border-2 border-black w-24"
            classnameMyButtonDiv='m-1'

            variantMyButton='outlined'

            options={["Contatti", "Progetti", "Esperienze di lavoro"]}
            optionsFunctionality={[]}
          />
        </div>

        {children}
        <footer>

      </footer>
      </body>
    </html>
  );
}
