"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 md:py-32 bg-white dark:bg-[#1C191A]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl z-10">
                                <Image
                                    src="/images/profile.jpg"
                                    alt="Panalee Palasri"
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            {/* Frame Effect */}
                            <div className="absolute top-[15px] left-[15px] w-full h-full border border-foreground rounded-2xl -z-0 transition-transform duration-500 hover:translate-x-[5px] hover:translate-y-[5px]"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl mb-8 text-gray-900 dark:text-gray-100 font-semibold">
                            {t("about_title")}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                            {t("about_text")}
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            {["Resume", "CV", "Portfolio"].map((doc) => (
                                <a
                                    key={doc}
                                    href={`/documents/${doc}_Panalee_Palasri.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-sm uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300"
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
