"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
    const { t } = useLanguage();

    const projects = [
        {
            id: 1,
            title: t("proj_1_title"),
            role: t("proj_1_role"),
            desc: t("proj_1_desc"),
            image: "/images/leafy-cover.png",
            link: "/projects/leafy",
        },
        {
            id: 2,
            title: t("proj_2_title"),
            role: t("proj_2_role"),
            desc: t("proj_2_desc"),
            image: "/images/vansales-details.png",
            link: "/projects/vansales",
        },
        {
            id: 3,
            title: t("proj_3_title"),
            role: t("proj_3_role"),
            desc: t("proj_3_desc"),
            image: "/images/marvelous-details.png",
            link: "/projects/marvelous",
        },
        {
            id: 4,
            title: t("proj_4_title"),
            role: t("proj_4_role"),
            desc: t("proj_4_desc"),
            image: null,
            link: "#",
        },
    ];

    return (
        <section id="work" className="py-20 md:py-32 bg-white dark:bg-[#1C191A]">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl mb-16 text-center font-semibold"
                >
                    {t("work_title")}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link
                                href={project.link}
                                className="group block bg-white dark:bg-[#1C191A] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-secondary"
                            >
                                <div className="relative aspect-[4/3] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-secondary/40 text-white">
                                            <span className="text-4xl">●</span>
                                        </div>
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                </div>

                                <div className="p-8">
                                    <h3 className="!font-sans text-2xl mb-2 group-hover:text-accent transition-colors font-semibold">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                                        {project.role}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
