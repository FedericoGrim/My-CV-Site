"use client";
import React from "react";
import Presentation from "./pageComponents/presentation";
import SchoolPath from "./pageComponents/scoolPath";
import ProjectSlider from "./pageComponents/bestProjects";
import WorkPrinciples from "./pageComponents/workPrinciples";
import TechnologiesSection from "./pageComponents/favoritesTecnologies";

export default function HomePage() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-CalPolyGreen to-BlackGreen">
        <Presentation />

        <SchoolPath />

        <ProjectSlider />

        <WorkPrinciples />

        <TechnologiesSection />
      </section>
    </>
  );
};


