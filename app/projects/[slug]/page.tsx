"use client";

import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Cursor from "@/components/Cursor";

export default function ProjectDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-serif">Project not found</h1>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white cursor-none">
            <Cursor />
            <Navbar />

            {/* Hero Section */}
            <header className="pt-40 pb-20 px-6 text-center">
                <div className="container mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-5xl md:text-6xl mb-4"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-accent"
                    >
                        {project.subtitle}
                    </motion.p>
                </div>
            </header>

            {/* Cover Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full max-h-[600px] overflow-hidden mb-16"
            >
                <div className="relative w-full h-[400px] md:h-[600px]">
                    {/* Use unoptimized for local images if needed, or standard Image */}
                    <Image
                        src={project.coverImage}
                        alt={`${project.title} Cover`}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>

            {/* Project Details */}
            <section className="container mx-auto px-6 pb-32">
                {/* Meta Info */}
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 mb-16 border-b border-gray-200 pb-8">
                    <div className="text-center">
                        <h3 className="text-sm uppercase text-accent mb-2">Role</h3>
                        <p className="text-lg font-medium">{project.meta.role}</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm uppercase text-accent mb-2">Timeline</h3>
                        <p className="text-lg font-medium">{project.meta.timeline}</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-sm uppercase text-accent mb-2">
                            {project.meta.extra.label}
                        </h3>
                        <p className="text-lg font-medium">{project.meta.extra.value}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <h2 className="font-serif text-3xl mb-6">Overview</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {project.overview}
                        </p>
                    </div>

                    <div className="mb-12">
                        <h2 className="font-serif text-3xl mb-6">
                            {project.keySectionTitle}
                        </h2>
                        <ul className="list-disc list-outside pl-5 space-y-3 text-lg text-gray-600 leading-relaxed">
                            {project.keyPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Gallery */}
                    {project.gallery && project.gallery.length > 0 && (
                        <div className="mb-12">
                            <h2 className="font-serif text-3xl mb-6">Project Gallery</h2>
                            <div className="space-y-8">
                                {project.gallery.map((img, index) => (
                                    <div
                                        key={index}
                                        className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md"
                                    >
                                        <Image
                                            src={img}
                                            alt={`${project.title} Gallery ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links */}
                    {project.links && project.links.length > 0 && (
                        <div className="text-center mt-16">
                            {project.links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-4 bg-transparent border border-foreground text-foreground rounded-full font-medium tracking-wide hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <footer className="py-8 text-center text-gray-500 text-sm">
                <p>&copy; 2025 Panalee Palasri. All rights reserved.</p>
            </footer>
        </main>
    );
}
