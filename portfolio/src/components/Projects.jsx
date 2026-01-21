import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiGithub, SiNpm, SiNextdotjs, SiPostgresql, SiTailwindcss, SiFramer, SiRedis, SiExpress, SiSupabase } from 'react-icons/si';
import { FiExternalLink, FiX } from 'react-icons/fi';

const ProjectModal = ({ image, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out"
    >
        <div className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center">
            <button
                onClick={onClose}
                className="absolute -top-12 right-0 md:top-0 md:-right-12 text-pure-white hover:text-light-gray transition-colors"
            >
                <FiX size={32} />
            </button>
            <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={image}
                alt="Project Preview"
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    </motion.div>
);

const ProjectCard = ({ title, tag, description, tech, links, images, onImageClick }) => {
    return (
        <div className="group border-b border-white/10 py-24 first:pt-12 last:border-0 relative">
            <div className="grid md:grid-cols-12 gap-12">

                {/* Left: Info */}
                <div className="md:col-span-4 flex flex-col justify-between space-y-8">
                    <div>
                        {/* Title & Tag */}
                        <div className="flex flex-col items-start gap-4 mb-8">
                            <h3 className="text-4xl md:text-5xl font-black text-pure-white tracking-tighter leading-none">
                                {title}
                            </h3>
                            <span className="text-xs font-mono text-light-gray uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        </div>

                        <p className="text-light-gray text-lg font-light leading-relaxed mb-8">
                            {description}
                        </p>

                        {/* Tech Stack - Minimal text list or icons? User listed them in text. I'll use text tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {tech.map((t, i) => (
                                <span key={i} className="text-sm font-mono text-light-gray">
                                    {t}{i < tech.length - 1 ? " • " : ""}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links Embedded in Icons */}
                    <div className="flex gap-6">
                        {links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-light-gray hover:text-pure-white transition-colors p-2 border border-white/10 hover:border-white/40 rounded-full"
                            >
                                <link.icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Images Grid */}
                <div className="md:col-span-7 grid grid-cols-2 gap-6">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="aspect-video relative overflow-hidden rounded-sm cursor-zoom-in group/image bg-near-black/50"
                            onClick={() => onImageClick(img)}
                        >
                            <div className="absolute inset-0 bg-near-black/0 group-hover/image:bg-transparent transition-colors z-10" />
                            <img
                                src={img}
                                alt={`${title} shot ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        {
            title: "COREsume",
            tag: "SAAS PLATFORM",
            description: "An automated resume engineering system built to bypass ATS filters using structural analysis and AI content optimization.",
            tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Framer Motion", "OpenAI"],
            links: [
                { icon: SiGithub, url: "https://github.com/ChakraVaishnav/COREsume" },
                { icon: FiExternalLink, url: "https://coresume.in" }
            ],
            images: [
                "/coresume/coresume1.png",
                "/coresume/coresume2.png",
                "/coresume/coresume3.png",
                "/coresume/coresume4.png"
            ]
        },
        {
            title: "bro-auth",
            tag: "NPM PACKAGE",
            description: "A secure, stateless authentication library for Next.js and Node.js runtimes. Binds tokens to device fingerprints for enhanced security.",
            tech: ["Next.js (JS/TS Support)", "Node.js Custom Runtime", "JWT", "Crypto"],
            links: [
                { icon: SiGithub, url: "https://github.com/ChakraVaishnav/bro-auth" },
                { icon: SiNpm, url: "https://www.npmjs.com/package/bro-auth" }
            ],
            images: [
                "/bro-auth/bro-auth1.png"
            ]
        },
        {
            title: "Whisp",
            tag: "REAL-TIME CHAT APP",
            description: "A fast, secure, minimal chat app designed for effortless real-time conversations with AES-encrypted messages. Privacy, simplicity, and speed in one place.",
            tech: ["Next.js", "PostgreSQL", "Supabase", "Redis", "Express.js (WebSockets)", "Framer Motion"],
            links: [
                { icon: SiGithub, url: "https://github.com/ChakraVaishnav/Whisp" },
                { icon: FiExternalLink, url: "https://whispchat.vercel.app" }
            ],
            images: [
                "/whisp/whisp1.png",
                "/whisp/whisp2.png",
                "/whisp/whisp3.png",
                "/whisp/whisp4.png"
            ]
        }
    ];

    return (
        <section id="projects" className="w-full bg-near-black py-12 px-6">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12">
                    <div className="w-full h-px bg-white/10 mb-12"></div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-pure-white inline-block border-b-2 border-pure-white pb-2 w-fit uppercase">
                            Engineered Reality
                        </h2>
                        <p className="text-light-gray font-light max-w-2xl text-lg leading-relaxed">
                            Transforming complex problems into elegant, scalable software solutions.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} onImageClick={setSelectedImage} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <ProjectModal image={selectedImage} onClose={() => setSelectedImage(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
