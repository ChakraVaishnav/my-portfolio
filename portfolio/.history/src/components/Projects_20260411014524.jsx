import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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

const ProjectCard = ({ title, tag, description, image, projectId, onImageClick, navigate }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group flex flex-col h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
        >
            {/* Image Container */}
            <div
                className="relative overflow-hidden aspect-video bg-near-black/50 cursor-zoom-in"
                onClick={() => onImageClick(image)}
            >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col justify-between flex-grow">
                {/* Title & Tag */}
                <div>
                    <div className="mb-3">
                        <h3 className="text-xl font-bold text-pure-white mb-2 line-clamp-2">
                            {title}
                        </h3>
                        <span className="text-xs font-mono text-light-gray uppercase tracking-widest border border-white/20 px-2 py-1 inline-block">
                            {tag}
                        </span>
                    </div>

                    {/* Description - 2-3 lines max */}
                    <p className="text-light-gray text-sm font-light leading-relaxed line-clamp-3 mt-3">
                        {description}
                    </p>
                </div>

                {/* View More Link */}
                <button
                    onClick={() => {
                        window.scrollTo(0, 0);
                        navigate(`/project/${projectId}`);
                    }}
                    className="mt-6 text-light-gray text-sm font-light hover:text-pure-white border-b border-light-gray hover:border-pure-white transition-all w-fit"
                >
                    View More →
                </button>

                {/* Hover gradient bar at bottom */}
                <div className="mt-4 h-0.5 bg-gradient-to-r from-pure-white/20 to-transparent group-hover:from-pure-white/50 transition-colors" />
            </div>
        </motion.div>
    );

}

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate();

    const allProjects = [
        // TOP 3
        {
            title: "COREsume",
            tag: "SAAS PLATFORM",
            description: "Automated resume engineering system to bypass ATS filters using structural analysis and AI content optimization. Get your resume noticed.",
            image: "/coresume/coresume1.png",
            projectId: "coresume"
        },
        {
            title: "DeckIQ",
            tag: "AI PRESENTATION TOOL",
            description: "Create stunning presentations with a single prompt. AI generates content, searches for related images via Google, and applies 20+ themes automatically.",
            image: "/deckiq/deckiq1.png",
            projectId: "deckiq"
        },
        {
            title: "bro-auth",
            tag: "NPM PACKAGE",
            description: "Secure, stateless authentication library for Next.js and Node.js. Binds tokens to device fingerprints for enhanced security and protection.",
            image: "/bro-auth/bro-auth1.png",
            projectId: "bro-auth"
        },
        // REST
        {
            title: "Whisp",
            tag: "REAL-TIME CHAT APP",
            description: "Fast, secure, minimal chat app with AES-encrypted messages. Privacy, simplicity, and speed in one elegant real-time platform.",
            image: "/whisp/whisp1.png",
            projectId: "whisp"
        },
        {
            title: "RunFX",
            tag: "VS CODE EXTENSION",
            description: "Play custom sounds when running code in VS Code. Quick command execution from the status bar with auto-completion from your last 10 commands.",
            image: "/runfx/runfx1.png",
            projectId: "runfx"
        },
        {
            title: "TaskNexus",
            tag: "TASK MANAGEMENT",
            description: "Individual task management with smart reminders. Get email notifications 6 hours before deadline and when tasks are overdue. Full CRUD operations.",
            image: "/tasknexus/tasknexus1.png",
            projectId: "tasknexus"
        },
        {
            title: "BidBuy",
            tag: "E-AUCTION PLATFORM",
            description: "Competitive auction marketplace with real-time bidding. Secure transactions, Docker containerized, deployed on AWS for scalability.",
            image: "/bidbuy/bidbuy1.png",
            projectId: "bidbuy"
        }
    ];

    // Show 3 projects initially, all if "See All" is clicked
    const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

    return (
        <section id="projects" className="w-full bg-near-black py-12 md:py-20 px-6">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="mb-12 md:mb-20">
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

                {/* Projects Grid - 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {visibleProjects.map((project, i) => (
                        <ProjectCard
                            key={i}
                            {...project}
                            onImageClick={setSelectedImage}
                            navigate={navigate}
                        />
                    ))}
                </div>

                {/* See All Button */}
                {!showAll && (
                    <div className="flex justify-center mt-12">
                        <motion.button
                            onClick={() => setShowAll(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-white/30 text-pure-white font-semibold hover:border-white/60 hover:bg-white/5 transition-all duration-300 uppercase text-sm tracking-wider"
                        >
                            See All Projects
                        </motion.button>
                    </div>
                )}
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
