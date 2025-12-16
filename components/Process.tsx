"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import {
    MagnifyingGlass,
    Target,
    Lightbulb,
    PencilCircle,
    CheckCircle,
    ArrowRight,
} from "@phosphor-icons/react";

export default function Process() {
    const { t } = useLanguage();

    const steps = [
        {
            icon: MagnifyingGlass,
            title: t("proc_step_1"),
            desc: t("proc_desc_1"),
        },
        {
            icon: Target,
            title: t("proc_step_2"),
            desc: t("proc_desc_2"),
        },
        {
            icon: Lightbulb,
            title: t("proc_step_3"),
            desc: t("proc_desc_3"),
        },
        {
            icon: PencilCircle,
            title: t("proc_step_4"),
            desc: t("proc_desc_4"),
        },
        {
            icon: CheckCircle,
            title: t("proc_step_5"),
            desc: t("proc_desc_5"),
        },
    ];

    return (
        <section id="process" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl mb-16 text-center font-semibold"
                >
                    {t("process_title")}
                </motion.h2>

                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="contents">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center max-w-[180px]"
                            >
                                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-text-color text-3xl mb-6 transition-transform duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:rotate-6 shadow-sm">
                                    <step.icon size={32} />
                                </div>
                                <h3 className="font-serif text-xl mb-2 font-semibold">{step.title}</h3>
                                <p className="text-sm text-accent">{step.desc}</p>
                            </motion.div>

                            {index < steps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.05 }}
                                    className="text-primary text-2xl md:pt-8 transform rotate-90 md:rotate-0 my-4 md:my-0"
                                >
                                    <ArrowRight weight="bold" />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
