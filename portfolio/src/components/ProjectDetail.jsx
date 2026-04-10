import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiX, FiExternalLink } from 'react-icons/fi';
import { SiGithub, SiNpm } from 'react-icons/si';

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
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    </motion.div>
);

const ProjectDetail = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const projectsData = {
        'coresume': {
            title: "COREsume",
            tag: "SAAS PLATFORM",
            shortDescription: "Automated resume engineering system to bypass ATS filters using structural analysis and AI content optimization. Get your resume noticed.",
            detailedDescription: "COREsume is a revolutionary SaaS platform designed to transform how job seekers approach the application process. Using advanced structural analysis and AI-powered content optimization, it automatically engineers resumes to bypass Applicant Tracking System (ATS) filters. The platform analyzes job descriptions, identifies key requirements, and restructures your resume content to maximize matching scores without sacrificing authenticity. With real-time preview and instant feedback, users can optimize their resumes for specific job postings with unprecedented accuracy and confidence.",
            techStack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Framer Motion", "OpenAI", "TypeScript", "Vercel"],
            images: [
                "/coresume/coresume1.png",
                "/coresume/coresume2.png",
                "/coresume/coresume3.png",
                "/coresume/coresume4.png"
            ],
            links: [
                { icon: SiGithub, label: "GitHub", url: "https://github.com/ChakraVaishnav/COREsume" },
                { icon: FiExternalLink, label: "Live Demo", url: "https://coresume.in" }
            ]
        },
        'deckiq': {
            title: "DeckIQ",
            tag: "AI PRESENTATION TOOL",
            shortDescription: "Create stunning presentations with a single prompt. AI generates content, searches for related images via Google, and applies 20+ themes automatically.",
            detailedDescription: "DeckIQ is an AI-powered presentation generator that transforms your ideas into professionally designed slides with a single prompt and click. Simply describe your presentation topic, and DeckIQ's HuggingFace LLM generates compelling content while automatically sourcing relevant images using Serper API's Google Search integration. Choose from 20+ stunning themes that match your presentation style, and all your generations are securely stored in your cloud library. Perfect for busy professionals, students, and presenters who want polished results fast without manual design work.",
            techStack: ["Next.js", "HuggingFace LLM", "Serper Google Search API", "Supabase", "Tailwind CSS", "TypeScript"],
            images: [
                "/deckiq/deckiq1.png",
                "/deckiq/deckiq2.png",
                "/deckiq/deckiq3.png",
                "/deckiq/deckiq4.png"
            ],
            links: [
                { icon: SiGithub, label: "GitHub", url: "https://github.com/ChakraVaishnav/DeckIQ" },
                { icon: FiExternalLink, label: "Live Demo", url: "https://deckiq.coresume.in" }
            ]
        },
        'bro-auth': {
            title: "bro-auth",
            tag: "NPM PACKAGE",
            shortDescription: "Secure, stateless authentication library for Next.js and Node.js. Binds tokens to device fingerprints for enhanced security and protection.",
            detailedDescription: "bro-auth is a powerful, zero-dependency authentication library built for modern JavaScript runtimes. It provides secure, stateless authentication by binding JWT tokens to device fingerprints, making token theft significantly more difficult. The library supports both Next.js and Node.js environments, offering middleware integration and customizable claims. It implements industry-standard practices like token rotation, refresh mechanisms, and comprehensive security headers. Perfect for developers who want authentication that just works without complicated session management.",
            techStack: ["TypeScript", "JWT", "Crypto API", "Next.js", "Node.js", "npm Package", "Jest"],
            images: [
                "/bro-auth/bro-auth1.png"
            ],
            links: [
                { icon: SiGithub, label: "GitHub", url: "https://github.com/ChakraVaishnav/bro-auth" },
                { icon: SiNpm, label: "NPM", url: "https://www.npmjs.com/package/bro-auth" }
            ]
        },
        'whisp': {
            title: "Whisp",
            tag: "REAL-TIME CHAT APP",
            shortDescription: "Fast, secure, minimal chat app with AES-encrypted messages. Privacy, simplicity, and speed in one elegant real-time platform.",
            detailedDescription: "Whisp is a minimalist real-time chat application that prioritizes privacy, speed, and user experience. Every message is end-to-end encrypted using AES encryption, ensuring conversations remain private. The application leverages WebSockets for instant message delivery and uses Redis for session management and presence tracking. Built with a clean, distraction-free UI, Whisp focuses on what matters: seamless communication. Perfect for teams, friends, or anyone who values both security and simplicity in their messaging platform.",
            techStack: ["Next.js", "PostgreSQL", "Supabase", "Redis", "Express.js", "WebSockets", "AES Encryption", "Framer Motion"],
            images: [
                "/whisp/whisp1.png",
                "/whisp/whisp2.png",
                "/whisp/whisp3.png",
                "/whisp/whisp4.png"
            ],
            links: [
                { icon: SiGithub, label: "GitHub", url: "https://github.com/ChakraVaishnav/Whisp" },
                { icon: FiExternalLink, label: "Live Demo", url: "https://whispchat.vercel.app" }
            ]
        },
        'runfx': {
            title: "RunFX",
            tag: "VS CODE EXTENSION",
            shortDescription: "VS Code extension that plays custom sounds when you run code. Execute commands from the status bar with auto-completion from your last 10 commands.",
            detailedDescription: "RunFX is a lightweight VS Code extension that adds auditory feedback to your development workflow. Simply configure your preferred sound file and RunFX will play it whenever you run code in the terminal. Click the RunFX button on the status bar to quickly execute commands with intelligent auto-completion that remembers your last 10 commands, eliminating repetitive typing. Customize sound effects per project or globally, making your coding experience more interactive and satisfying. Perfect for developers who want instant audio confirmation of code execution.",
            techStack: ["JavaScript", "VS Code Extension API", "Node.js"],
            images: [
                "/runfx/runfx1.png",
                "/runfx/runfx2.png",
                "/runfx/runfx3.png",
                "/runfx/runfx4.png"
            ],
            links: [
                { icon: SiGithub, label: "GitHub", url: "https://github.com/ChakraVaishnav/run-fx" },
                { icon: FiExternalLink, label: "Marketplace", url: "https://marketplace.visualstudio.com/items?itemName=ChakraVaishnavReddy.runfx" }
            ]
        },
        'tasknexus': {
            title: "TaskNexus",
            tag: "TASK MANAGEMENT",
            shortDescription: "Individual task management with smart email reminders. Get notified 6 hours before deadline and when tasks become overdue. Full CRUD operations.",
            detailedDescription: "TaskNexus is a personal task management system designed for individuals who need intelligent deadline tracking and automated reminders. Create tasks, set deadlines, and TaskNexus automatically sends email notifications 6 hours before your deadline, giving you time to prepare. If a deadline passes, you'll be notified that the task is now overdue, ensuring nothing falls through the cracks. Perform full CRUD operations on your tasks with an intuitive interface. The Quartz Scheduler runs in the background to precisely trigger reminders at the right time, keeping you organized and on top of your commitments.",
            techStack: ["React", "Spring Boot", "MySQL", "Quartz Scheduler", "Email Service"],
            images: [
                "/tasknexus/tasknexus1.png",
                "/tasknexus/tasknexus2.png",
                "/tasknexus/tasknexus3.png",
                "/tasknexus/tasknexus4.png",
                "/tasknexus/tasknexus5.png"
            ],
            links: [
                { icon: SiGithub, label: "GitHub", url: "https://github.com/ChakraVaishnav/TaskNexus" }
            ]
        },
        'bidbuy': {
            title: "BidBuy",
            tag: "E-AUCTION PLATFORM",
            shortDescription: "Competitive auction marketplace with real-time bidding. Secure transactions, Docker containerized, deployed on AWS for scalability.",
            detailedDescription: "BidBuy is a premium e-auction platform that brings real-time competitive bidding to the digital marketplace. Users can list items for auction and place competitive bids with real-time updates on bid history and auction status. The platform features secure payment processing, automatic bid tracking, and an engaging marketplace experience with live updates. BidBuy is fully containerized with Docker for both frontend and backend, ensuring consistent deployment across environments. Hosted on AWS for high availability, scalability, and reliability, BidBuy can handle thousands of concurrent users and auctions. Advanced search and filtering algorithms help buyers discover items and sellers reach the right audience.",
            techStack: ["React", "Spring Boot", "PostgreSQL", "Docker", "AWS", "Stripe API", "WebSockets"],
            images: [
                "/bidbuy/bidbuy1.png",
                "/bidbuy/bidbuy2.png",
                "/bidbuy/bidbuy3.png",
                "/bidbuy/bidbuy4.png"
            ],
            links: [
                { icon: SiGithub, label: "GitHub", url: "https://github.com/ChakraVaishnav/Online-Auction-System" }
            ]
        }
    };

    const project = projectsData[projectId];

    if (!project) {
        return (
            <div className="w-full h-screen bg-near-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-pure-white mb-4">Project Not Found</h1>
                    <button
                        onClick={() => navigate('/#projects')}
                        className="text-light-gray hover:text-pure-white transition-colors flex items-center gap-2 justify-center"
                    >
                        <FiArrowLeft /> Go Back
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full bg-near-black min-h-screen">
            {/* Back Button */}
            <div className="sticky top-0 z-40 bg-near-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <button
                        onClick={() => navigate('/#projects')}
                        className="flex items-center gap-2 text-light-gray hover:text-pure-white transition-colors group"
                    >
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="mb-6">
                        <span className="text-xs font-mono text-light-gray uppercase tracking-widest border border-white/20 px-3 py-1">
                            {project.tag}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-pure-white mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-light-gray text-lg leading-relaxed max-w-3xl font-light">
                        {project.detailedDescription}
                    </p>
                </motion.div>

                {/* Links */}
                {project.links.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex gap-6 mb-16"
                    >
                        {project.links.map((link, i) => (
                            <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2 border border-white/20 text-pure-white hover:border-white/60 hover:bg-white/5 transition-all group"
                            >
                                <link.icon size={20} />
                                <span className="text-sm font-semibold">{link.label}</span>
                            </a>
                        ))}
                    </motion.div>
                )}

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-pure-white mb-6">Tech Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-pure-white text-sm font-medium hover:border-white/40 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Images Gallery */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-bold text-pure-white mb-8">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images.map((img, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden aspect-video bg-near-black/50 border border-white/10 hover:border-white/30 transition-all cursor-zoom-in"
                                onClick={() => setSelectedImage(img)}
                            >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <ProjectModal image={selectedImage} onClose={() => setSelectedImage(null)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetail;
