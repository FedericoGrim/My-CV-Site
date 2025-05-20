"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MyImage } from "@/components/Image/Image";
import { MyButton } from "@/components/Button/Button";
import { DropDownMenu } from "@/components/DropDownMenu/DropDownMenu";
import { Label } from "@/components/Label/Label";

export default function Header() {
  const [ScreenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const HandleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", HandleResize);
    HandleResize();

    return () => window.removeEventListener("resize", HandleResize);
  }, []);

  const IsMobile = ScreenWidth < 768;

  return (
    <header className="flex justify-between items-center bg-black border-b-2 border-MantisGreen p-1">
      <div className="flex items-center bg-black border-r-2 border-MantisGreen p-1 w-[226px]">
        <Link href="/" passHref>
          <MyImage
            src="@/../images/myLogo.png"
            alt="Federico Grimaldi's Logo"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/" passHref>
          <Label
            text="Federico Grimaldi"
            className="flex items-center ml-2 font-Teko text-lg text-MantisGreen h-[50px]"
          />
        </Link>
      </div>

      {IsMobile ? (
        <DropDownMenu
          iconSelection="menu"
          classnameDropDown="bg-gray-200"
          classnameMenu="my-2 bg-MantisGreen rounded-lg"
          classnameMenuIcon="bg-MantisGreen p-1 rounded-lg text-5xl text-black"
          classnameMyButton="text-black border-2 border-black w-24"
          classnameMyButtonDiv="m-1"
          variantMyButton="outlined"
          options={["Contacts", "Projects"]}
          buttonsLinks={["/pages/contacts", "/pages/projects"]}
        />
      ) : (
        <div className="flex space-x-2 mr-2 h-[50px]">
          <MyButton
            text="Contacts"
            className="text-MantisGreen border-2 border-MantisGreen w-[112px]"
            variant="outlined"
            href="/pages/contacts"
          />
          <MyButton
            text="Projects"
            className="text-MantisGreen border-2 border-MantisGreen w-[112px]"
            variant="outlined"
            href="/pages/projects"
          />
        </div>
      )}
    </header>
  );
}
