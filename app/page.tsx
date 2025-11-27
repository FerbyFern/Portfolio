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

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white cursor-none">
        <Cursor />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
