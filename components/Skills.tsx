"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import {
    FigmaLogo,
    BezierCurve,
    PenNib,
    Image as ImageIcon,
    FilmStrip,
    PresentationChart,
    MagnifyingGlass,
    TreeStructure,
    DeviceMobile,
    Layout,
    CursorClick,
    CheckSquareOffset,
    PersonArmsSpread,
    Code,
    BracketsCurly,
    Devices,
    GitBranch,
    Database,
    UsersThree,
    Lightbulb,
    ChatCircleDots,
    Heart,
    BookOpenText,
    Handshake,
    Kanban,
    Clock,
} from "@phosphor-icons/react";

export default function Skills() {
    const { t } = useLanguage();

    const skillCategories = [
        {
            title: t("skill_cat_design"),
            skills: [
                { name: "Figma", icon: FigmaLogo },
                { name: "Adobe XD", icon: BezierCurve },
                { name: "Illustrator", icon: PenNib },
                { name: "Photoshop", icon: ImageIcon },
                { name: "After Effects", icon: FilmStrip },
                { name: "Miro", icon: PresentationChart },
            ],
        },
        {
            title: t("skill_cat_uxui"),
            skills: [
                { name: t("skill_user_research"), icon: MagnifyingGlass },
                { name: t("skill_wireframing"), icon: TreeStructure },
                { name: t("skill_prototyping"), icon: DeviceMobile },
                { name: t("skill_design_systems"), icon: Layout },
                { name: t("skill_interaction"), icon: CursorClick },
                { name: t("skill_usability"), icon: CheckSquareOffset },
                { name: t("skill_accessibility"), icon: PersonArmsSpread },
            ],
        },
        {
            title: t("skill_cat_tech"),
            skills: [
                { name: "HTML/CSS", icon: Code },
                { name: "JavaScript", icon: BracketsCurly },
                { name: t("skill_responsive"), icon: Devices },
                { name: "Git/Version Control", icon: GitBranch },
                { name: "SQL", icon: Database },
            ],
        },
        {
            title: t("skill_cat_soft"),
            skills: [
                { name: t("skill_teamwork"), icon: UsersThree },
                { name: t("skill_problem_solving"), icon: Lightbulb },
                { name: t("skill_communication"), icon: ChatCircleDots },
                { name: t("skill_empathy"), icon: Heart },
                { name: t("skill_storytelling"), icon: BookOpenText },
                { name: t("skill_collaboration"), icon: Handshake },
                { name: t("skill_project_mgmt"), icon: Kanban },
                { name: t("skill_time_mgmt"), icon: Clock },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl mb-16 text-center font-semibold"
                >
                    {t("skills_title")}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex flex-col items-center mb-6">
                                <h3 className="font-serif text-2xl text-gray-800 dark:text-gray-200 font-semibold text-center mb-3">
                                    {category.title}
                                </h3>
                                <div className="w-12 h-1 bg-highlight rounded-full"></div>
                            </div>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1C191A] rounded-full border border-gray-200 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-300 shadow-sm transition-colors cursor-default"
                                    >
                                        <skill.icon size={18} />
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
