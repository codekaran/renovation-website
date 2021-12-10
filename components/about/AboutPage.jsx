import React from "react";
import ContactSection from "./ContactSection";
import SkillsSection from "./SkillsSection";
import HireMeSection from "../global/HireMeSection";
import HeroSection from "./HeroSection";

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <ContactSection />
      <SkillsSection />
      <HireMeSection marginBottom={true} />
    </div>
  );
};

export default AboutPage;
