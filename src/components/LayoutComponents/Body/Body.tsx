'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { MyButton } from "../../Button/Button";
import {MyImage} from "../../Image/Image"
import {DropDownMenu} from "../../DropDownMenu/DropDownMenu"
import {Label} from "../../Label/Label"

export const AdaptiveBody = () => {
    const [screenWidth, setScreenWidth] = useState<number>(0);
    const [screenHeight, setScreenHeight] = useState<number>(0);

    useEffect(() => {
        // Funzione per aggiornare le dimensioni dello schermo
        const updateDimensions = () => {
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth);
        };

        // Imposta le dimensioni iniziali
        updateDimensions();

        // Aggiungi un listener per l'evento resize
        window.addEventListener('resize', updateDimensions);

        // Rimuovi il listener quando il componente viene smontato
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <>
            {screenHeight < screenWidth ? (
                <div className="flex justify-between m-3 bg-black">
                    <div className="flex items-center">
                        <div className="relative flex items-center">
                            <Link href="/" passHref>
                                <MyImage
                                    src="/My-CV-Site/images/myLogo.png"
                                    alt="Federico Grimaldi's Logo"
                                    width={50}
                                    height={50}
                                    className="z-0"
                                />
                            </Link>
                        </div>
                
                        <Label text="Federico Grimaldi" className="ml-2 font-Teko text-lg text-MantisGreen" font="teko" />
                    </div>
                
                    <div className="flex space-x-2"> {/* Aggiunto per gestire lo spazio tra i bottoni */}
                        <MyButton 
                            text="Contacts" 
                            className='text-MantisGreen border-2 border-MantisGreen w-24' 
                            variant='outlined' 
                            href="/pages/contacts"
                        />
                        <MyButton 
                            text="Projects"
                            className='text-MantisGreen border-2 border-MantisGreen w-24' 
                            variant='outlined' 
                            href="/pages/projects" 
                        />
                    </div>
                </div>
            ) : (
                <div className="flex justify-between m-3 bg-black">
                    <div className="flex items-center">
                        <div className="relative flex items-center">
                        <Link href="/" passHref>
                            <MyImage
                            src="/My-CV-Site/images/myLogo.png"
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
            )}
        </>
    );
};
