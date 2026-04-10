import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiX } from 'react-icons/fi';
import { SiGithub, SiNpm, FiExternalLink } from 'react-icons/si';

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
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
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
            shortDescription: "Intelligent presentation builder powered by AI. Create stunning, professional decks in minutes with smart suggestions and design automation.",
            detailedDescription: "DeckIQ revolutionizes presentation creation by leveraging artificial intelligence to generate, suggest, and optimize slide content. Whether you're preparing for a board meeting, educational presentation, or product pitch, DeckIQ understands context and automatically creates visually coherent, professionally designed slides. The AI analyzes your input, suggests layouts, color schemes, and even generates speaker notes. The intuitive editor allows fine-tuning while maintaining design consistency throughout your presentation, making it perfect for professionals who need polished results fast.",
            techStack: ["React", "Next.js", "Tailwind CSS", "OpenAI API", "Canvas API", "TypeScript", "Firebase"],
            images: [
                "/deckiq/deckiq1.png",
                "/deckiq/deckiq2.png",
                "/deckiq/deckiq3.png",
                "/deckiq/deckiq4.png"
            ],
            links: []
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
            shortDescription: "VS Code extension for streamlined development workflows. Execute, debug, and manage your code with enhanced capabilities and automation.",
            detailedDescription: "RunFX is a powerful VS Code extension designed to accelerate development workflows. It provides seamless code execution, advanced debugging capabilities, and intelligent code management features directly within your editor. With support for multiple languages and integrated terminal management, RunFX eliminates context switching and keeps you focused on writing code. The extension includes snippets, automation shortcuts, and real-time diagnostics to enhance productivity and reduce development time significantly.",
            techStack: ["TypeScript", "VS Code API", "Node.js", "Webpack", "ESLint", "Jest"],
            images: [
                "/runfx/runfx1.png",
                "/runfx/runfx2.png",
                "/runfx/runfx3.png",
                "/runfx/runfx4.png"
            ],
            links: []
        },
        'tasknexus': {
            title: "TaskNexus",
            tag: "PROJECT MANAGEMENT",
            shortDescription: "Collaborative task management platform. Organize, track, and manage projects with team members in real-time with seamless integration.",
            detailedDescription: "TaskNexus is a comprehensive project management platform built for modern teams. It provides real-time collaboration, intuitive task management, and seamless team communication all in one place. Features include customizable workflows, progress tracking, deadline management, and activity feeds. The platform supports integration with popular tools and offers powerful filtering and search capabilities. Whether managing a small team or a large organization, TaskNexus scales with your needs and keeps everyone aligned on project goals and deliverables.",
            techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Redux", "Tailwind CSS", "AWS"],
            images: [
                "/tasknexus/tasknexus1.png",
                "/tasknexus/tasknexus2.png",
                "/tasknexus/tasknexus3.png",
                "/tasknexus/tasknexus4.png",
                "/tasknexus/tasknexus5.png"
            ],
            links: []
        },
        'bidbuy': {
            title: "BidBuy",
            tag: "E-AUCTION PLATFORM",
            shortDescription: "Dynamic bidding and auction platform. Buy and sell items through competitive bidding with real-time updates and secure transactions.",
            detailedDescription: "BidBuy is a dynamic e-auction platform that brings the traditional auction experience to the digital world. Users can list items for auction, place competitive bids in real-time, and manage their inventory effortlessly. The platform features automatic bidding, bid history tracking, secure payment processing, and escrow services. With real-time notifications and live auction feeds, BidBuy creates an engaging marketplace experience for both buyers and sellers. Advanced search, filtering, and recommendation algorithms help users discover items they want and reach interested buyers.",
            techStack: ["React", "Express.js", "PostgreSQL", "Stripe API", "Socket.io", "Redux", "Docker"],
            images: [
                "/bidbuy/bidbuy1.png",
                "/bidbuy/bidbuy2.png",
                "/bidbuy/bidbuy3.png",
                "/bidbuy/bidbuy4.png"
            ],
            links: []
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
                        <span>Back to Projects</span>
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
                        <span className="text-xs font-mono text-light-gray uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full">
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
                                className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-pure-white hover:border-white/60 hover:bg-white/5 transition-all group"
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
                                className="px-4 py-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-lg text-pure-white text-sm font-medium hover:border-white/40 transition-colors"
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
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-lg aspect-video bg-near-black/50 border border-white/10 hover:border-white/30 transition-all cursor-zoom-in"
                                onClick={() => setSelectedImage(img)}
                            >
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </motion.div>
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
