'use client';

import React, { useEffect, useState } from 'react';
import "@/app/styles/globals.css";
import { Label } from "@/components/Label/Label";
import Link from "next/link";
import { MyButton } from "@/components/Button/Button";

export const AdaptiveFooter = () => {
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
            {screenHeight > screenWidth ? (
                <div className="flex flex-col space-y-6">
                    {/* Social Section */}
                    <div className="flex flex-col space-y-6 p-6 bg-DarkGreen rounded-lg text-center">
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
                    <div className="flex flex-col w-full p-6 bg-EerieBlackLighter rounded-lg text-center space-y-6">
                        <Label text="Download my CV" className="text-white text-2xl font-bold mb-4" font="teko" />
                        
                        {/* Download Buttons */}
                        <div className="flex flex-col space-y-4">
                            <MyButton 
                                className="text-MantisGreen border-2 border-MantisGreen py-2 rounded-lg" 
                                text="Download CV ITA" 
                                variant="outlined" 
                                href="https://drive.google.com/file/d/13JVq1By-XVz3h-OcJ_kq4ndh3_CRdB7U/view?usp=sharing"
                            />
                            <MyButton 
                                className="text-MantisGreen border-2 border-MantisGreen py-2 rounded-lg" 
                                text="Download CV ENG" 
                                variant="outlined" 
                                href="https://drive.google.com/file/d/12I7PibYYqV-Of_TJviZxVc2P1WG8mK1m/view?usp=sharing"
                            />
                        </div>
                    </div>
                
                    {/* Contact Section */}
                    <div className="flex flex-col space-y-4 p-6 bg-DarkGreen rounded-lg text-center">
                        <Label text="Contact Me" className="text-white text-3xl font-bold" font="teko" />
                
                        <div className="flex justify-center space-x-2">
                            <Label text="Email:" className="text-white text-lg" font="teko" />
                            <Link href="mailto:federico.grimaldi2006@gmail.com?subject=Request%20for%20information&body=Hello%20Federico,%0D%0A%0D%0AI%20am%20writing%20to%20request%20information%20about..." passHref>
                                <Label text="federico.grimaldi2006@gmail.com" className="text-blue-500 text-lg hover:underline" font="teko" />
                            </Link>
                        </div>
                
                        <div className="flex justify-center space-x-2">
                            <Label text="Phone:" className="text-white text-lg" font="teko" />
                            <Label text="+39 348 342 3417" className="text-gray-300 text-lg" font="teko" />
                        </div>
                
                        <div className="flex justify-center space-x-2">
                            <Label text="Telegram:" className="text-white text-lg" font="teko" />
                            <Label text="@FedeGrim" className="text-gray-300 text-lg" font="teko" />
                        </div>
                    </div>
                </div>
            ) : (
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
                                    href="https://drive.google.com/file/d/13JVq1By-XVz3h-OcJ_kq4ndh3_CRdB7U/view?usp=sharing"
                                />
                                <MyButton 
                                    className="text-MantisGreen border-2 border-MantisGreen py-2 rounded-lg" 
                                    text="Download CV ENG" 
                                    variant="outlined" 
                                    href="https://drive.google.com/file/d/12I7PibYYqV-Of_TJviZxVc2P1WG8mK1m/view?usp=sharing"
                                />
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="flex-1 p-6 bg-DarkGreen rounded-lg text-center space-y-4">
                            <Label text="Contact Me" className="text-white text-3xl font-bold" font="teko" />

                            <div className="flex justify-center space-x-2">
                                <Label text="Email:" className="text-white text-lg" font="teko" />
                                <Link href="mailto:federico.grimaldi2006@gmail.com?subject=Request%20for%20information&body=Hello%20Federico,%0D%0A%0D%0AI%20am%20writing%20to%20request%20information%20about..." passHref>
                                    <Label text="federico.grimaldi2006@gmail.com" className="text-blue-500 text-lg hover:underline" font="teko" />
                                </Link>
                            </div>

                            <div className="flex justify-center space-x-2">
                                <Label text="Phone:" className="text-white text-lg" font="teko" />
                                <Label text="+39 348 342 3417" className="text-gray-300 text-lg" font="teko" />
                            </div>

                            <div className="flex justify-center space-x-2">
                                <Label text="Telegram:" className="text-white text-lg" font="teko" />
                                <Label text="@FedeGrim" className="text-gray-300 text-lg" font="teko" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
