"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Canvas Particle Background */}
            <ParticleBackground />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-tight">
                        Panalee Palasri
                        <br />
                        <span className="block text-2xl md:text-3xl lg:text-4xl font-sans font-light italic text-secondary mt-4">
                            {t("hero_title")}
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    {t("hero_desc")}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        href="#work"
                        className="inline-block px-8 py-4 bg-accent text-white rounded-full font-medium tracking-wide hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        {t("hero_cta")}
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
