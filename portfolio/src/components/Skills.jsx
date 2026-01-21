import React from 'react';
import { motion } from 'framer-motion';
import {
    SiJavascript, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss,
    SiSpringboot, SiExpress, SiJsonwebtokens, SiPostgresql, SiMysql,
    SiMongodb, SiGit, SiGithub, SiDocker, SiPostman,
    SiKubernetes, SiC
} from 'react-icons/si';
import { FaJava, FaLock } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';

const SkillCard = ({ name, icon: Icon, learning }) => (
    <motion.div
        whileHover={{ y: -2, backgroundColor: "rgb(var(--pure-white) / 0.05)" }}
        className="flex items-center gap-3 p-3 rounded-sm border border-transparent hover:border-pure-white/10 transition-all duration-75 group select-none"
    >
        <div className="text-light-gray group-hover:text-pure-white transition-colors duration-75 text-xl md:text-2xl">
            <Icon />
        </div>
        <span className="text-pure-white/80 group-hover:text-pure-white transition-colors duration-75 text-sm font-medium tracking-wide">
            {name}
        </span>
        {learning && (
            <span className="ml-auto text-[10px] font-mono text-light-gray border border-light-gray/30 px-1.5 py-0.5 rounded-[2px] uppercase opacity-80">
                Learning
            </span>
        )}
    </motion.div>
);

const SkillGroup = ({ title, skills, highlight }) => (
    <div className={`space-y-4 ${highlight ? 'p-6 border border-pure-white/20 rounded-sm bg-pure-white/[0.02]' : ''}`}>
        <h3 className="text-xs font-mono text-pure-white uppercase tracking-widest border-b border-pure-white/10 pb-2 mb-4 font-semibold">
            {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
            {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillGroups = [
        {
            title: "Primary Stack",
            skills: [
                { name: "JavaScript (ES6+)", icon: SiJavascript },
                { name: "React.js", icon: SiReact },
                { name: "Next.js", icon: SiNextdotjs },
                { name: "Spring Boot", icon: SiSpringboot },
                { name: "PostgreSQL", icon: SiPostgresql },
            ]
        },
        {
            title: "Frontend Engineering",
            skills: [
                { name: "HTML5", icon: SiHtml5 },
                { name: "CSS3", icon: SiCss3 },
                { name: "Tailwind CSS", icon: SiTailwindcss },
                { name: "JavaScript (ES6+)", icon: SiJavascript },
                { name: "React.js", icon: SiReact },
                { name: "Next.js", icon: SiNextdotjs },
            ]
        },
        {
            title: "Backend & Systems",
            skills: [
                { name: "Spring Boot", icon: SiSpringboot },
                { name: "RESTful APIs", icon: TbApi },
                { name: "Auth (JWT)", icon: FaLock },
                { name: "Express.js", icon: SiExpress, learning: true },
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "PostgreSQL", icon: SiPostgresql },
                { name: "MySQL", icon: SiMysql },
                { name: "MongoDB", icon: SiMongodb, learning: true },
            ]
        },
        {
            title: "DevOps & Tooling",
            skills: [
                { name: "Git", icon: SiGit },
                { name: "GitHub", icon: SiGithub },
                { name: "Docker", icon: SiDocker },
                { name: "Postman", icon: SiPostman },
                { name: "VS Code", icon: VscVscode },
                { name: "Kubernetes", icon: SiKubernetes, learning: true },
            ]
        },
        {
            title: "Languages",
            skills: [
                { name: "Java", icon: FaJava },
                { name: "C", icon: SiC },
            ]
        }
    ];

    return (
        <section id="skills" className="w-full bg-near-black py-12 md:py-20 px-6">
            <div className="max-w-[1400px] mx-auto">

                <div className="mb-10 md:mb-14">
                    <div className="w-full h-px bg-white/10 mb-12"></div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-pure-white inline-block border-b-2 border-pure-white pb-2 w-fit">
                            Technical Arsenal
                        </h2>
                        <p className="text-light-gray font-light max-w-2xl text-lg leading-relaxed">
                            A curated set of tools selected for performance, reliability, and developer experience.
                        </p>
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-16">
                    {skillGroups.map((group) => (
                        <SkillGroup key={group.title} {...group} highlight={group.title === "Primary Stack"} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
