"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";

export default function Playground() {
    const { t } = useLanguage();

    const items = [
        { title: "Poster Design" },
        { title: "Character Illustration" },
        { title: "Social Media Assets" },
        { title: "Sticker Set" },
    ];

    return (
        <section id="playground" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl mb-4"
                    >
                        {t("playground_title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-accent"
                    >
                        {t("playground_subtitle")}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Placeholder Graphic */}
                            <div className="w-full h-full bg-secondary/60 transition-transform duration-500 group-hover:scale-110"></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-white font-serif text-xl font-medium tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
