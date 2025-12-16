"use client";

import { LanguageProvider } from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Process from "@/components/Process";
import Playground from "@/components/Playground";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white cursor-none">
        <Cursor />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Process />
        <Work />
        <Skills />
        <Playground />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
