"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-white dark:bg-[#1C191A]/80 backdrop-blur-md py-8 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
                : "bg-transparent py-8"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="font-serif text-2xl font-semibold tracking-tight">
                    Panalee.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 ml-auto">
                    <ul className="flex gap-8">
                        {["about", "experience", "work", "skills", "contact"].map((item) => (
                            <li key={item}>
                                <Link
                                    href={`#${item}`}
                                    className="text-sm uppercase tracking-wider text-accent hover:text-primary transition-colors"
                                >
                                    {t(`nav_${item}`)}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Language Switcher */}
                    <div className="flex items-center gap-3 ml-8 border-l border-gray-300 dark:border-gray-700 pl-8">
                        <button
                            onClick={() => setLanguage("en")}
                            className={`transition-transform hover:scale-110 ${language === "en" ? "opacity-100 scale-110" : "opacity-50"
                                }`}
                        >
                            <img
                                src="https://flagcdn.com/w80/gb.png"
                                alt="English"
                                className={`w-7 h-7 rounded-full object-cover border-2 ${language === "en" ? "border-primary shadow-sm" : "border-transparent"
                                    }`}
                            />
                        </button>
                        <span className="w-px h-4 bg-gray-400 opacity-30"></span>
                        <button
                            onClick={() => setLanguage("th")}
                            className={`transition-transform hover:scale-110 ${language === "th" ? "opacity-100 scale-110" : "opacity-50"
                                }`}
                        >
                            <img
                                src="https://flagcdn.com/w80/th.png"
                                alt="Thai"
                                className={`w-7 h-7 rounded-full object-cover border-2 ${language === "th" ? "border-primary shadow-sm" : "border-transparent"
                                    }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-2xl" onClick={toggleMenu}>
                    {isMobileMenuOpen ? <X /> : <List />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white dark:bg-[#1C191A]/95 backdrop-blur-md shadow-lg md:hidden flex flex-col items-center py-8 gap-6"
                    >
                        {["about", "experience", "work", "skills", "contact"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg uppercase tracking-wider text-accent hover:text-primary"
                            >
                                {t(`nav_${item}`)}
                            </Link>
                        ))}

                        <div className="flex items-center gap-4 mt-4">
                            <button
                                onClick={() => setLanguage("en")}
                                className={`transition-transform ${language === "en" ? "opacity-100 scale-110" : "opacity-50"
                                    }`}
                            >
                                <img
                                    src="https://flagcdn.com/w80/gb.png"
                                    alt="English"
                                    className={`w-8 h-8 rounded-full object-cover border-2 ${language === "en" ? "border-primary" : "border-transparent"
                                        }`}
                                />
                            </button>
                            <span className="w-px h-5 bg-gray-400 opacity-30"></span>
                            <button
                                onClick={() => setLanguage("th")}
                                className={`transition-transform ${language === "th" ? "opacity-100 scale-110" : "opacity-50"
                                    }`}
                            >
                                <img
                                    src="https://flagcdn.com/w80/th.png"
                                    alt="Thai"
                                    className={`w-8 h-8 rounded-full object-cover border-2 ${language === "th" ? "border-primary" : "border-transparent"
                                        }`}
                                />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
