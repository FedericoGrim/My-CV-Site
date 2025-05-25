"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MyImage } from "@/components/Image/Image";
import { MyButton } from "@/components/Button/Button";
import { DropDownMenu } from "@/components/DropDownMenu/DropDownMenu";
import { Label } from "@/components/Label/Label";

import { HeaderProps } from "./HeaderProps";

export default function Header({
  options = ["Placeholder", "Placeholder"],
  buttonsLinks = ["/", "/"],
  classnameMyButtonDiv,
  classnameMyButton,
  variantMyButton,
}: HeaderProps) {
  const [ScreenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const HandleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", HandleResize);
    HandleResize();
    return () => window.removeEventListener("resize", HandleResize);
  }, []);

  const IsMobile = ScreenWidth < 768;

  return (
    <header className="flex justify-between items-center bg-NightGreen border-b-2 border-MantisGreen p-1">
      <div className="flex items-center p-1">
        <Link href="/" passHref>
          <MyImage
            src="/My-CV-Site/images/myLogo.png"
            alt="Federico Grimaldi's Logo"
            width={50}
            height={50}
          />
        </Link>
        <Link href="/" passHref>
          <Label
            text="Federico Grimaldi"
            className="flex items-center ml-2 font-Teko text-2xl text-MantisGreen font-bold "
          />
        </Link>
      </div>

      {IsMobile ? (
        <DropDownMenu
          iconSelection="menu"
          classnameDropDown="bg-gray-200"
          classnameMenu="my-2 bg-MantisGreen rounded-lg"
          classnameMenuIcon="bg-MantisGreen p-1 rounded-lg text-5xl text-black"
          classnameMyButton={classnameMyButton["DropDownMenuButtons"]}
          classnameMyButtonDiv={classnameMyButtonDiv}
          variantMyButton={variantMyButton}
          options={options}
          buttonsLinks={buttonsLinks}
        />
      ) : (
        <div className="flex space-x-2 mr-2 h-[50px]">
          {options.map((option, index) => (
            <div key={option} className={classnameMyButtonDiv}>
              <MyButton
                className={classnameMyButton["SeparatedButtons"]}
                text={option}
                variant={variantMyButton}
                href={buttonsLinks[index]}             
              />
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
