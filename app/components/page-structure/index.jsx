"use client";

import AboutSection from "../homepage/about";
import ContactSection from "../homepage/contact";
import Education from "../homepage/education";
import HeroSection from "../homepage/hero-section";
import Projects from "../homepage/projects";
import Skills from "../homepage/skills";
import GitCode from "../homepage/git-code";
import AnimateCursor from "../ui/animate-cursor";
import useMediaScreen from "@/app/hooks/useMediaScreen";

export default function Structure() {
  let { match: size } = useMediaScreen(
    "only screen and (min-width : 369px) and (max-width : 500px)"
  );
  return (
    <>
      {!size && <AnimateCursor />}
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <GitCode />
      <Education />
      <ContactSection />
           </>
  );
}
