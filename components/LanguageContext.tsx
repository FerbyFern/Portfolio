"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'th';

type Translations = {
    [key: string]: string;
};

const translations: Record<Language, Translations> = {
    en: {
        nav_about: "About",
        nav_experience: "Experience",
        nav_work: "Work",
        nav_skills: "Skills",
        nav_contact: "Contact",
        hero_title: "UX/UI Designer",
        hero_desc: "Designing intuitive, user-centered interfaces with a balance of business goals and user needs.",
        hero_cta: "View Selected Work",
        about_title: "About Me",
        about_text: "UX/UI Designer with a Bachelor’s degree in Information Technology (KMUTT) and 2+ years of paid professional experience — spanning freelance, in-house, and client-facing product development — backed by 3+ years of hands-on design practice. Skilled in the full design process from user research and wireframing through to high-fidelity prototyping and usability testing, delivering accessible and user-centred interfaces. Comfortable working cross-functionally and leading projects end-to-end.",
        exp_title: "Experience",
        exp_date_1: "Jan 2025 - Present",
        exp_role_1_company: "Vansales Application Co., Ltd.",
        exp_role_1_title: "UX/UI Designer",
        exp_role_1_desc: "Own end-to-end UX/UI process across web and mobile — from discovery and wireframing to high-fidelity prototypes, design systems, and developer handoff. Collaborate directly with developers and stakeholders to clarify requirements and ensure smooth delivery through UAT and release cycles.",
        exp_date_2: "Jun - Sep 2024",
        exp_role_2_company: "Xanterra Yellowstone National Park, USA",
        exp_role_2_title: "Office Assistant, Kitchen Crew & Housekeeping",
        exp_role_2_desc: "Managed employee scheduling, attendance, and payroll as Office Assistant, earning positive supervisor recognition. Thrived in a high-pressure Kitchen Crew environment during peak tourist season, serving large volumes of customers.",
        exp_date_3: "Jan - Jul 2023",
        exp_role_3_company: "Marvelous Studio Co., Ltd.",
        exp_role_3_title: "UX/UI Designer (Intern)",
        exp_role_3_desc: "Contributed to in-house digital products across the full UX/UI process — from research and wireframing to final delivery. Supported frontend development to ensure design fidelity using a modular Figma component library.",
        exp_date_4: "Sep - Dec 2022",
        exp_role_4_company: "Princess Maha Chakri Sirindhorn Foundation (PMSF)",
        exp_role_4_title: "UX/UI Designer (Freelance)",
        exp_role_4_desc: "Redesigned the foundation's public website with modern aesthetics, responsive design, and improved navigation, working collaboratively within a cross-functional team alongside developers.",
        process_title: "My Design Process",
        proc_step_1: "Empathize",
        proc_desc_1: "Understanding user needs through research.",
        proc_step_2: "Define",
        proc_desc_2: "Identifying the core problem.",
        proc_step_3: "Ideate",
        proc_desc_3: "Brainstorming creative solutions.",
        proc_step_4: "Prototype",
        proc_desc_4: "Building interactive mockups.",
        proc_step_5: "Test",
        proc_desc_5: "Validating with real users.",
        work_title: "Selected Work",
        proj_1_title: "Leafy - Senior Project",
        proj_1_role: "UX/UI Designer & Project Manager",
        proj_1_desc: "Led design and execution of a fully functional platform with a focus on accessibility.",
        proj_2_title: "Vansales Application Co., Ltd.",
        proj_2_role: "UX/UI Designer",
        proj_2_desc: "Designing interfaces for sales and distribution tools (App, Website, Backoffice).",
        proj_3_title: "Marvelous Studio",
        proj_3_role: "UX/UI Designer (Intern)",
        proj_3_desc: "Collaborated on game and digital product designs.",
        proj_4_title: "Hello World Dolphin",
        proj_4_role: "UX/UI & Graphic Designer",
        proj_4_desc: "Developed a website for the Easter festival, winning 1st place for Best Website.",
        skills_title: "Skills",
        skill_cat_design: "Design Tools",
        skill_cat_uxui: "UX & UI Methods",
        skill_user_research: "User Research",
        skill_wireframing: "Wireframing",
        skill_prototyping: "Prototyping",
        skill_design_systems: "Design Systems",
        skill_interaction: "Interaction Design",
        skill_usability: "Usability Testing",
        skill_accessibility: "Accessibility",
        skill_cat_tech: "Technical",
        skill_responsive: "Responsive Design",
        skill_cat_soft: "Soft Skills",
        skill_teamwork: "Teamwork",
        skill_problem_solving: "Problem Solving",
        skill_communication: "Communication",
        skill_empathy: "Empathy",
        skill_storytelling: "Storytelling",
        skill_collaboration: "Collaboration",
        skill_project_mgmt: "Project Management",
        skill_time_mgmt: "Time Management",
        playground_title: "Playground",
        playground_subtitle: "A collection of my graphic design experiments and illustrations.",
        contact_title: "Get in Touch",
        contact_desc: "Feel free to reach out for collaborations or just a friendly hello."
    },
    th: {
        nav_about: "เกี่ยวกับฉัน",
        nav_experience: "ประสบการณ์",
        nav_work: "ผลงาน",
        nav_skills: "ทักษะ",
        nav_contact: "ติดต่อ",
        hero_title: "UX/UI Designer",
        hero_desc: "ออกแบบอินเทอร์เฟซที่ใช้งานง่าย โดยคำนึงถึงผู้ใช้เป็นศูนย์กลาง พร้อมสร้างสมดุลระหว่างเป้าหมายทางธุรกิจและความต้องการของผู้ใช้",
        hero_cta: "ดูผลงานที่คัดสรร",
        about_title: "เกี่ยวกับฉัน",
        about_text: "UX/UI Designer ผู้จบการศึกษาปริญญาตรีสาขาเทคโนโลยีสารสนเทศ (KMUTT) พร้อมประสบการณ์ทำงานระดับมืออาชีพกว่า 2 ปี ทั้งงานฟรีแลนซ์, งานประจำ, และการพัฒนาผลิตภัณฑ์สำหรับลูกค้า เสริมด้วยประสบการณ์ลงมือออกแบบจริงกว่า 3 ปี เชี่ยวชาญกระบวนการออกแบบเต็มรูปแบบ ตั้งแต่การวิจัยผู้ใช้และการทำ Wireframe ไปจนถึง High-fidelity Prototyping และการทดสอบการใช้งาน (Usability Testing) เพื่อส่งมอบอินเทอร์เฟซที่เข้าถึงได้และมีผู้ใช้เป็นศูนย์กลาง สามารถทำงานร่วมกับทีมข้ามสายงานและบริหารจัดการโปรเจกต์ตั้งแต่ต้นจนจบ",
        exp_title: "ประสบการณ์การทำงาน",
        exp_date_1: "ม.ค. 2568 - ปัจจุบัน",
        exp_role_1_company: "บริษัท แวนเซลส์ แอพพลิเคชั่น จำกัด",
        exp_role_1_title: "UX/UI Designer",
        exp_role_1_desc: "ดูแลกระบวนการ UX/UI เต็มรูปแบบทั้งบนเว็บและแอปพลิเคชันมือถือ ตั้งแต่การค้นคว้าและทำ Wireframe ไปจนถึง High-fidelity Prototype, Design System และส่งมอบให้ทีมพัฒนา ทำงานร่วมกับนักพัฒนาและผู้มีส่วนได้ส่วนเสียโดยตรงเพื่อความชัดเจนและส่งมอบงานที่ราบรื่น",
        exp_date_2: "มิ.ย. - ก.ย. 2567",
        exp_role_2_company: "Xanterra Yellowstone National Park, USA",
        exp_role_2_title: "Office Assistant, Kitchen Crew & Housekeeping",
        exp_role_2_desc: "จัดการตารางเวลาพนักงาน การเข้างาน และเงินเดือนในตำแหน่ง Office Assistant จนได้รับคำชมจากหัวหน้างานในการปรับปรุงกระบวนการบริหารจัดการ ทำงานได้ดีภายใต้ความกดดันในตำแหน่ง Kitchen Crew ช่วงฤดูท่องเที่ยวที่หนาแน่น",
        exp_date_3: "ม.ค. - ก.ค. 2566",
        exp_role_3_company: "Marvelous Studio Co., Ltd.",
        exp_role_3_title: "UX/UI Designer (นักศึกษาฝึกงาน)",
        exp_role_3_desc: "มีส่วนร่วมในกระบวนการ UX/UI เต็มรูปแบบสำหรับผลิตภัณฑ์ดิจิทัลภายใน ตั้งแต่การวิจัยและทำ Wireframe ไปจนถึงการส่งมอบงาน สนับสนุนการพัฒนา Frontend เพื่อความถูกต้องของการออกแบบโดยใช้ Figma component library",
        exp_date_4: "ก.ย. - ธ.ค. 2565",
        exp_role_4_company: "มูลนิธิรางวัลสมเด็จเจ้าฟ้ามหาจักรี (PMSF)",
        exp_role_4_title: "UX/UI Designer (Freelance)",
        exp_role_4_desc: "ออกแบบเว็บไซต์สาธารณะของมูลนิธิใหม่ด้วยความสวยงามที่ทันสมัย รองรับทุกอุปกรณ์ และปรับปรุงการนำทาง ทำงานร่วมกับทีมข้ามสายงานร่วมกับนักพัฒนา",
        process_title: "กระบวนการออกแบบ",
        proc_step_1: "เข้าใจปัญหา (Empathize)",
        proc_desc_1: "เข้าใจความต้องการของผู้ใช้ผ่านการวิจัย",
        proc_step_2: "ระบุปัญหา (Define)",
        proc_desc_2: "ระบุปัญหาหลักที่ต้องการแก้ไข",
        proc_step_3: "ระดมไอเดีย (Ideate)",
        proc_desc_3: "ระดมความคิดเพื่อหาทางออกที่สร้างสรรค์",
        proc_step_4: "สร้างต้นแบบ (Prototype)",
        proc_desc_4: "สร้างแบบจำลองที่โต้ตอบได้",
        proc_step_5: "ทดสอบ (Test)",
        proc_desc_5: "ตรวจสอบความถูกต้องกับผู้ใช้จริง",
        work_title: "ผลงานที่คัดสรร",
        proj_1_title: "Leafy - โครงงานจบการศึกษา",
        proj_1_role: "UX/UI Designer & Project Manager",
        proj_1_desc: "นำทีมออกแบบและดำเนินการสร้างแพลตฟอร์มที่ใช้งานได้จริง โดยเน้นเรื่องการเข้าถึงได้ง่าย (Accessibility)",
        proj_2_title: "บริษัท แวนเซลส์ แอพพลิเคชั่น จำกัด",
        proj_2_role: "UX/UI Designer",
        proj_2_desc: "ออกแบบอินเทอร์เฟซสำหรับเครื่องมือการขายและการจัดจำหน่าย (แอปพลิเคชัน, เว็บไซต์, ระบบหลังบ้าน)",
        proj_3_title: "Marvelous Studio",
        proj_3_role: "UX/UI Designer (นักศึกษาฝึกงาน)",
        proj_3_desc: "ร่วมมือในการออกแบบเกมและผลิตภัณฑ์ดิจิทัล",
        proj_4_title: "Hello World Dolphin",
        proj_4_role: "UX/UI & Graphic Designer",
        proj_4_desc: "พัฒนาเว็บไซต์สำหรับเทศกาลอีสเตอร์ ได้รับรางวัลชนะเลิศอันดับ 1 สาขาเว็บไซต์ยอดเยี่ยม",
        skills_title: "ทักษะ",
        skill_cat_design: "เครื่องมือออกแบบ",
        skill_cat_uxui: "วิธีการ UX & UI",
        skill_user_research: "การวิจัยผู้ใช้",
        skill_wireframing: "การทำ Wireframe",
        skill_prototyping: "การทำ Prototype",
        skill_design_systems: "ระบบการออกแบบ",
        skill_interaction: "การออกแบบการโต้ตอบ",
        skill_usability: "การทดสอบการใช้งาน",
        skill_accessibility: "การเข้าถึงได้ง่าย (Accessibility)",
        skill_cat_tech: "ด้านเทคนิค",
        skill_responsive: "การออกแบบรองรับทุกอุปกรณ์",
        skill_cat_soft: "ทักษะทางสังคม (Soft Skills)",
        skill_teamwork: "การทำงานเป็นทีม",
        skill_problem_solving: "การแก้ปัญหา",
        skill_communication: "การสื่อสาร",
        skill_empathy: "ความเห็นอกเห็นใจ",
        skill_storytelling: "การเล่าเรื่อง",
        skill_collaboration: "การทำงานร่วมกัน",
        skill_project_mgmt: "การบริหารจัดการโครงการ",
        skill_time_mgmt: "การบริหารเวลา",
        playground_title: "พื้นที่ปล่อยของ",
        playground_subtitle: "รวบรวมผลงานการทดลองออกแบบกราฟิกและภาพประกอบของฉัน",
        contact_title: "ติดต่อฉัน",
        contact_desc: "สามารถติดต่อเพื่อร่วมงานหรือทักทายกันได้เลย"
    }
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('selectedLanguage') as Language;
        if (savedLang) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('selectedLanguage', lang);
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
