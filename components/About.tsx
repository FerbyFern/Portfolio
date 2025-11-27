"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                                src="/images/profile.jpg"
                                alt="Panalee Palasri"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl mb-8 text-gray-900">
                            {t("about_title")}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {t("about_text")}
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            {["Resume", "CV", "Portfolio"].map((doc) => (
                                <a
                                    key={doc}
                                    href={`/documents/${doc}_Panalee_Palasri.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border border-gray-300 rounded-full text-sm uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300"
                                >
                                    {doc === "Portfolio" ? "PDF Portfolio" : doc}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
