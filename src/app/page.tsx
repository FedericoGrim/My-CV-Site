'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { DropDownMenu } from "@/components/DropDownMenu/DropDownMenu";
import { MyButton } from "@/components/Button/Button";
import { MyImage } from "@/components/Image/Image";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import Label from "@/components/Label/Label";
import Image from 'next/image';

const Home = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    const updateDimensions = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  return (
    <main className="flex flex-col p-0">
      <div className="flex justify-between items-center m-2 bg-black">
        {/* Sinistra: Logo e Label */}
        <div className="flex items-center bg-black">
          <Link href="/" passHref>
            <MyImage
              src="@/../images/myLogo.png"
              alt="Federico Grimaldi's Logo"
              width={50}
              height={50}
            />
          </Link>
          <Label text="Federico Grimaldi" className="ml-2 font-Teko text-lg text-MantisGreen" />
        </div>

        {/* Destra: Bottoni o Dropdown */}
        {screenHeight < screenWidth ? (
          <div className="flex space-x-2">
            <MyButton
              text="Contacts"
              className="text-MantisGreen border-2 border-MantisGreen w-24"
              variant="outlined"
              href="/pages/contacts"
            />
            <MyButton
              text="Projects"
              className="text-MantisGreen border-2 border-MantisGreen w-24"
              variant="outlined"
              href="/pages/projects"
            />
          </div>
        ) : (
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
        )}
      </div>

      <div className="relative w-full h-[400px] mb-20">
        <Image
          src="/images/CodeBackground.png"
          alt="Code Background"
          fill
          priority
        />
        <div className="absolute bottom-[-90px] left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full">
          <div className="text-center">
            <MyImage
              src="/images/FotoPlaceHolder.png"
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

      {/* Introduzione */}
      <div className="max-w-lg mx-auto text-center h-auto mt-10 mb-10">
        <Label
          text="Sono Federico Grimaldi, uno studente di Quinta Superiore appassionato di informatica. Con una solida conoscenza informatica e una buona abilità nel problem solving, sono pronto ad affrontare nuove sfide e ad ampliare le mie conoscenze. Sono sempre desideroso di imparare e sono motivato a cogliere ogni opportunità per crescere nel campo dell'informatica."
          className="text-center leading-6 font-regular"
          font="merriweather"
        />
      </div>

      {/* Competenza Hardware */}
      <div className="relative text-center w-full h-auto bg-HunterGreen mt-0 mb-10">
        <MyButton />
      </div>

      {/* Hardware */}
      <div className="w-full h-auto">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Container maxWidth="sm">
              <Box
                sx={{
                  bgcolor: "#cfe8fc",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "200px",
                }}
              >
                Primo Contenuto
              </Box>
            </Container>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Container maxWidth="sm">
              <Box
                sx={{
                  bgcolor: "#e8cfcf",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "200px",
                }}
              >
                Secondo Contenuto
              </Box>
            </Container>
          </Grid>
        </Grid>
      </div>

      {/* Software */}
      <div className="w-full h-auto mb-8">
        {/* Contenuto Software */}
      </div>


      {/* Progetti più importanti */}
      <div className="w-full h-auto mb-8">
        {/* Progetti */}
      </div>

      {/* Recensioni su di me */}
      <div className="w-full h-auto mb-8">
        {/* Recensioni */}
      </div>
    </main>
  );
};

export default Home;
