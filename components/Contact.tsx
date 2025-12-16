"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { EnvelopeSimple, Phone, LinkedinLogo, BehanceLogo } from "@phosphor-icons/react";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 font-semibold">
                        {t("contact_title")}
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        {t("contact_desc")}
                    </p>

                    <div className="mb-12">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                            <a
                                href="mailto:panalee.wrk@gmail.com"
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                                    <EnvelopeSimple size={24} />
                                </div>
                                <div className="text-left">
                                    <span className="block text-xs text-gray-400 uppercase tracking-wider">Email</span>
                                    <span className="text-lg font-medium text-gray-900 group-hover:text-accent transition-colors">panalee.wrk@gmail.com</span>
                                </div>
                            </a>

                            <div className="hidden md:block w-px h-12 bg-gray-200"></div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div className="text-left">
                                    <span className="block text-xs text-gray-400 uppercase tracking-wider">Phone</span>
                                    <span className="text-lg font-medium text-gray-900">+66 9-9230-9111</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a
                            href="#"
                            className="flex items-center gap-2 px-8 py-3 border border-gray-200 rounded-full text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
                        >
                            <LinkedinLogo size={20} />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 px-8 py-3 border border-gray-200 rounded-full text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
                        >
                            <BehanceLogo size={20} />
                            <span>Behance</span>
                        </a>
                    </div>
                </motion.div>

                <footer className="mt-20 text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Panalee Palasri. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}
