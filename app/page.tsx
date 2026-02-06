"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MicroTextureSection from "./components/MicroTextureSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import GitHubGraph from "./components/GitHubGraph";
import ChampionSection from "./components/ChampionSection";
import FooterSection from "./components/FooterSection";
import FloatingBackground from "./components/FloatingBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white noise-overlay grid-bg">
      {/* Orange frame border */}
      <div className="orange-frame" />

      {/* Grid lines + Floating triangles across entire page */}
      <FloatingBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main content - centered container */}
      <main className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <br/> <br/> <br/>
        <ExperienceSection />
        <br/> <br/> <br/>
        <ProjectsSection />
        <br/> <br/>  <br/>
        <MicroTextureSection />
        <br/> <br/> <br/>
        <GitHubGraph />
        <br/>  <br/> <br/>
        {/* <ChampionSection /> */}
        <br/> <br/> <br/>
        <FooterSection />
        <br/> <br/>
      </main>
    </div>
  );
}
