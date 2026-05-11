"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";

export default function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            id: 1,
            date: t("exp_date_1"),
            company: t("exp_role_1_company"),
            title: t("exp_role_1_title"),
            desc: t("exp_role_1_desc"),
        },
        {
            id: 2,
            date: t("exp_date_2"),
            company: t("exp_role_2_company"),
            title: t("exp_role_2_title"),
            desc: t("exp_role_2_desc"),
        },
        {
            id: 3,
            date: t("exp_date_3"),
            company: t("exp_role_3_company"),
            title: t("exp_role_3_title"),
            desc: t("exp_role_3_desc"),
        },
        {
            id: 4,
            date: t("exp_date_4"),
            company: t("exp_role_4_company"),
            title: t("exp_role_4_title"),
            desc: t("exp_role_4_desc"),
        },
    ];

    return (
        <section id="experience" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl mb-16 text-center font-semibold"
                >
                    {t("exp_title")}
                </motion.h2>

                <div className="max-w-3xl mx-auto relative border-l border-gray-300 dark:border-gray-700 ml-4 md:ml-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="mb-12 relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-foreground rounded-full border-2 border-background ring-4 ring-background shadow-sm"></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                <h3 className="font-serif text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100">
                                    {exp.company}
                                </h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1 md:mt-0">
                                    {exp.date}
                                </span>
                            </div>
                            <h4 className="text-lg text-accent mb-3 font-medium !font-sans">{exp.title}</h4>
                            {exp.desc && (
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.desc}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
