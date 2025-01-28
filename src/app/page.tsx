"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Se stai usando Next.js
import { Grid, Container, Box } from '@mui/material'; // Se usi Material-UI

import { MyButton } from '@/components/Button/Button';
import { MyContainer } from '@/components/Container/Container';
import { MyImage } from '@/components/Image/Image';
import { DropDownMenu } from '@/components/DropDownMenu/DropDownMenu';

import Label from '@/components/Label/Label';
import Link from 'next/link';

const YourComponent = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial values

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="flex flex-col p-0">
      {screenHeight < screenWidth ? (
        <>
          <div className="flex justify-between items-center bg-black border-b-2 border-MantisGreen">
            <div className="flex items-center bg-black border-r-2 border-MantisGreen p-1 w-[226px]">
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
                    className="flex items-center ml-2 font-Teko text-lg text-MantisGreen h-[50px]"
                  />
              </Link>
            </div>

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
          </div>

          <div className="relative w-full h-[400px] mb-20">
            <Image src="/My-CV-Site/images/CodeBackground.png" alt="Code Background" fill priority />
            <div className="absolute bottom-[-90px] left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full">
              <div className="text-center">
                <MyImage
                  src="/My-CV-Site/images/FotoPlaceHolder.png"
                  alt="Round Image"
                  width={250}
                  height={250}
                  className="rounded-full border-4 border-customGreen mx-auto"
                  priority
                />
                <Label text="Federico&nbsp;Grimaldi" className="font-Teko text-5xl text-customGreen text-center whitespace-nowrap mt-5" font="teko" />
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto text-center h-auto mt-10 mb-10">
            <Label
              text="Sono Federico Grimaldi, uno studente di Quinta Superiore appassionato di informatica. Con una solida conoscenza informatica e una buona abilità nel problem solving, sono pronto ad affrontare nuove sfide e ad ampliare le mie conoscenze. Sono sempre desideroso di imparare e sono motivato a cogliere ogni opportunità per crescere nel campo dell'informatica."
              className="text-center leading-6 font-regular"
              font="merriweather"
            />
          </div>

          <div className="relative text-center w-full h-auto bg-HunterGreen mt-0 mb-10">
            <MyButton />
          </div>

          <div className="w-full h-auto">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Container maxWidth="sm">
                  <Box sx={{ bgcolor: "#cfe8fc", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
                    Primo Contenuto
                  </Box>
                </Container>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Container maxWidth="sm">
                  <Box sx={{ bgcolor: "#e8cfcf", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
                    Secondo Contenuto
                  </Box>
                </Container>
              </Grid>
            </Grid>
          </div>

          {/* Sezione Software e Progetti */}
          <div className="w-full h-auto mb-8">
            {/* Contenuto Software */}
          </div>

          <div className="w-full h-auto mb-8">
            {/* Progetti */}
          </div>

          <div className="w-full h-auto mb-8">
            {/* Recensioni */}
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mt-1 mx-1 bg-black border-b-2 border-MantisGreen">
            {/* Sinistra: Logo e Label */}
            <div className="flex items-center bg-black p-1 ">
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
                    className="flex items-center ml-2 font-Teko text-lg text-MantisGreen"
                  />
              </Link>
            </div>

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
          </div>

          <div className="relative w-full h-[400px] mb-20">
            <Image src="/My-CV-Site/images/CodeBackground.png" alt="Code Background" fill priority />
            <div className="absolute bottom-[-90px] left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full">
              <div className="text-center">
                <MyImage
                  src="/My-CV-Site/images/FotoPlaceHolder.png"
                  alt="Round Image"
                  width={250}
                  height={250}
                  className="rounded-full border-4 border-customGreen mx-auto"
                  priority
                />
                <Label text="Federico&nbsp;Grimaldi" className="font-Teko text-5xl text-customGreen text-center whitespace-nowrap mt-5" font="teko" />
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto text-center h-auto my-10 w-[85%]">
            <Label
              text="Sono Federico Grimaldi, uno studente di Quinta Superiore appassionato di informatica. Con una solida conoscenza informatica e una buona abilità nel problem solving, sono pronto ad affrontare nuove sfide e ad ampliare le mie conoscenze. Sono sempre desideroso di imparare e sono motivato a cogliere ogni opportunità per crescere nel campo dell'informatica."
              className="text-center leading-6 font-regular"
              font="merriweather"
            />
          </div>
        </>
      )}
    </main>
  )
}

export default YourComponent;
