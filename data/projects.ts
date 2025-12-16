export interface Project {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    coverImage: string;
    meta: {
        role: string;
        timeline: string;
        extra: { label: string; value: string };
    };
    overview: string;
    keySectionTitle: string;
    keyPoints: string[];
    gallery?: string[];
    links?: { label: string; url: string }[];
}

export const projects: Project[] = [
    {
        id: "leafy",
        slug: "leafy",
        title: "Leafy",
        subtitle: "Your Online Garden E-commerce Destination",
        coverImage: "/images/leafy-cover.png",
        meta: {
            role: "UX/UI Designer & Project Manager",
            timeline: "Aug 2023 - May 2024",
            extra: { label: "Tools", value: "Figma, VS Code" },
        },
        overview:
            "Leafy is an e-commerce platform designed to be your online garden. The project aimed to create a seamless shopping experience for plant lovers, offering a wide variety of plants and gardening supplies.",
        keySectionTitle: "Key Responsibilities",
        keyPoints: [
            "Led the project, overseeing design, execution, and supporting frontend development.",
            "Designed the user interface for both desktop and mobile platforms, ensuring a responsive and accessible experience.",
            "Managed the product roadmap and coordinated with the development team.",
        ],
        gallery: ["/images/leafy-details.png"],
        links: [
            {
                label: "View Live Site",
                url: "https://capstone23.sit.kmutt.ac.th/pl4/",
            },
        ],
    },
    {
        id: "vansales",
        slug: "vansales",
        title: "Vansales Application",
        subtitle: "Sales & Distribution Tools",
        coverImage: "/images/vansales-details.png",
        meta: {
            role: "UX/UI Designer",
            timeline: "Jan 2025 - Present",
            extra: { label: "Focus", value: "App, Website, Backoffice" },
        },
        overview:
            "Vansales Application Co., Ltd. provides sales and distribution tools. My role involves designing interfaces for various internal and external products, ensuring usability and efficiency for sales operations.",
        keySectionTitle: "Key Projects",
        keyPoints: [
            "Vansales Order: Internal project for order management.",
            "SusHi Tech Tokyo 2025: Design for the upcoming tech event.",
            "Facility Management Platform (FMP): Backoffice and Web App design.",
            "Housekeeping: Internal project for housekeeping management.",
        ],
    },
    {
        id: "marvelous",
        slug: "marvelous",
        title: "Marvelous Studio",
        subtitle: "UX/UI Designer (Intern)",
        coverImage: "/images/marvelous-details.png",
        meta: {
            role: "UX/UI Designer (Intern)",
            timeline: "Jan - Jul 2023",
            extra: { label: "Team", value: "Marvelous Studio" },
        },
        overview:
            "During my internship at Marvelous Studio, I collaborated with the team on various game and digital product designs. I gained hands-on experience in coordinating minigames and designing assets for educational platforms.",
        keySectionTitle: "Key Contributions",
        keyPoints: [
            "Minigame Co-ordinate: Unplugged game, Scratch, MYSALENG.",
            "Digital Insight & Citizenship: Designed assets for digital literacy projects.",
            "MYSALENG Bot Backoffice: UI design for the backoffice system.",
            "TD Game Card & LE Super App: Contributed to game card design and super app interface.",
        ],
    },
];
