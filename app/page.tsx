"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MicroTextureSection from "./components/MicroTextureSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import GitHubGraph from "./components/GitHubGraph";
// import ChampionSection from "./components/ChampionSection";
import FooterSection from "./components/FooterSection";
import FloatingBackground from "./components/FloatingBackground";
import ScrollProgressIndicator from "./components/ScrollProgressIndicator";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white noise-overlay grid-bg">
      <div className="orange-frame" />

      <FloatingBackground />

      <ScrollProgressIndicator />
      <Navbar />

      <main className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <MicroTextureSection />
        <GitHubGraph />
        {/* <ChampionSection /> */}
        <FooterSection />
      </main>
    </div>
  );
}
