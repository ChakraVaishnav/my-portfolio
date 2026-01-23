import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Chapter = ({ number, title, subtitle, content, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative pl-8 md:pl-12 py-8 group cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-subtle-gray group-hover:bg-pure-white/50 transition-colors duration-500"></div>

            {/* Timeline Dot */}
            <div className={`absolute left-[-4px] top-10 w-[9px] h-[9px] rounded-full transition-all duration-500 ${isOpen ? 'bg-pure-white scale-125' : 'bg-subtle-gray'}`}></div>

            <div className="space-y-3">
                <span className="text-sm font-mono text-pure-white uppercase tracking-widest border-b border-pure-white inline-block pb-1">
                    {number}
                </span>

                <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-pure-white' : 'text-light-gray'}`}>
                    <span className="border-b border-pure-white/20 pb-1">{title}</span>
                    <span className="block mt-2 md:mt-0 md:inline md:ml-4 text-lg md:text-xl font-medium text-pure-white px-2 py-1 opacity-100 rounded-sm">{subtitle}</span>
                </h3>

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                >
                    <div className="pt-4 space-y-6 text-light-gray font text-base md:text-lg leading-relaxed max-w-2xl [&_p]:transition-colors [&_p]:duration-300 [&_p:hover]:text-pure-white">
                        {content}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const Journey = () => {
    const chapters = [
        {
            number: "Chapter 01",
            title: "Curiosity",
            subtitle: "(2-1 B.Tech) — HTML, CSS, and the first spark",
            content: (
                <>
                    <p><strong className="text-pure-white font-medium">I started with HTML and CSS and built my first website — a static Spotify clone.</strong></p>
                    <p>I manually downloaded songs and wired them into the UI. It was messy, impractical, and absolutely exciting.</p>
                    <p>That site went live on Netlify. It was my first moment of seeing something I built exist on the internet.</p>
                    <p>Then curiosity hit harder.</p>
                </>
            )
        },
        {
            number: "Chapter 02",
            title: "Making It Real",
            subtitle: "JavaScript & APIs",
            content: (
                <>
                    <p><strong className="text-pure-white font-medium">I discovered the Spotify Developer API and rebuilt the same clone — this time dynamic.</strong></p>
                    <p>Real data. Real logic. Real learning.</p>
                    <p>I deleted the old deployment and redeployed both versions on Vercel. Not because I had to — but because I cared.</p>
                    <p>That’s when I understood something important: <span className="italic text-white/80">Static is nice. Dynamic feels alive.</span></p>
                </>
            )
        },
        {
            number: "Chapter 03",
            title: "The Long Pause",
            subtitle: "DSA over everything",
            content: (
                <>
                    <p><strong className="text-pure-white font-medium">For the next two months, I didn’t touch development.</strong></p>
                    <p>I focused purely on Data Structures and Algorithms. No UI. No deployment dopamine. Just thinking.</p>
                    <p>At the time, it felt like I was moving backward. In reality, I was building a foundation I’d rely on later.</p>
                </>
            )
        },
        {
            number: "Chapter 04",
            title: "First Full Stack App",
            subtitle: "(2-2) — React, Spring Boot, MySQL",
            content: (
                <>
                    <p><strong className="text-pure-white font-medium">My first real application was TaskNexus — built with React, Spring Boot, and MySQL.</strong></p>
                    <p>I kept adding features whenever ideas came to mind. I never deployed it.</p>
                    <p>Not because it didn’t work — but because I realized something crucial: <span className="italic text-white/80">If it’s not on the internet, it doesn’t grow.</span></p>
                    <p>That realization changed everything.</p>
                </>
            )
        },
        {
            number: "Chapter 05",
            title: "Shipping Mindset",
            subtitle: "Next.js & COREsume",
            content: (
                <>
                    <p><strong className="text-pure-white font-medium">I learned the basics of Next.js and started “vibe coding” with intention.</strong></p>
                    <p>During my 2-2 semester break, I built COREsume — an AI-powered resume builder.</p>
                    <p>I deployed it. Marketed it. Watched users sign up. Today, COREsume has 100+ real users.</p>
                    <p>Not viral. Not huge. But real people using something I built. That mattered more than numbers.</p>
                </>
            )
        },
        {
            number: "Chapter 06",
            title: "Depth Over Noise",
            subtitle: "(3-1) — DSA, systems, and confidence",
            content: (
                <>
                    <p><strong className="text-pure-white font-medium">I went back to DSA — seriously this time.</strong></p>
                    <p>By the end of 3-1: Easy problems → automatic. Medium problems → solvable, sometimes with hints.</p>
                    <p>I also explored: CI/CD, Docker, Kubernetes, Ansible. Not to flex — but to understand how systems live beyond localhost.</p>
                </>
            )
        },
        {
            number: "Chapter 07",
            title: "Security By Design",
            subtitle: "bro-auth",
            content: (
                <>
                    <p><strong className="text-pure-white font-medium">During the holidays after 3-1, I built bro-auth.</strong></p>
                    <p>A stateless JWT authentication system that binds tokens to device fingerprints and uses derived signing keys.</p>
                    <p>I published it as an npm package. This wasn’t a tutorial project. It was me thinking like an engineer responsible for users.</p>
                </>
            )
        },
        {
            number: "Chapter 08",
            title: "Real-Time & Scale",
            subtitle: "Whisp Chat",
            content: (
                <>
                    <p><strong className="text-pure-white font-medium">I built Whisp — a real-time chat application.</strong></p>
                    <p>Tech stack: Next.js, Express (for sockets), Supabase, Vercel + Render.</p>
                    <p>Deployed. Used. Improved. At this point, building felt natural — not forced.</p>
                </>
            )
        },
        {
            number: "Chapter 09",
            title: "Paid Work",
            subtitle: "Freelancing",
            content: (
                <>
                    <p><strong className="text-pure-white font-medium">Before serious freelancing, I did two small paid projects.</strong></p>
                    <p>College-level work. Real deadlines. Real responsibility.</p>
                    <p><strong className="text-pure-white font-medium">I’m currently working on GreenKrt as part of a small team.</strong></p>
                    <p>I handle frontend development and system-level decisions, while another developer focuses on the backend.</p>
                    <p>This phase marks the transition from learning independently to delivering work others depend on.</p>
                </>
            )
        },
        {
            number: "Chapter 10",
            title: "Beyond Code",
            subtitle: "Growth that doesn’t show on GitHub",
            content: (
                <>
                    <p><strong className="text-pure-white font-medium">From 2-1 to 3-2, my spiritual and emotional maturity grew as much as my technical skills.</strong></p>
                    <p>I learned: patience, consistency, when to pause, when to push.</p>
                    <p>This journey isn’t finished. It’s just getting disciplined.</p>
                </>
            )
        }
    ];

    return (
        <section className="bg-near-black pt-10 pb-40 px-6 min-h-screen">
            <div className="max-w-[1200px] mx-auto">

                {/* Back Button */}
                <div className="mb-12">
                    <Link to="/" className="text-light-gray hover:text-pure-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
                        ← Back to Home
                    </Link>
                </div>

                <div className="mb-24 pl-8 md:pl-12 border-l border-subtle-gray relative">
                    <div className="absolute top-0 left-[-1px] w-[3px] h-20 bg-pure-white"></div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-pure-white mb-4">
                        The Journey
                    </h2>
                    <p className="text-xl text-light-gray font-light">
                        Not a straight line. A real one.
                    </p>
                </div>

                <div className="space-y-2">
                    {chapters.map((chapter, index) => (
                        <Chapter key={index} {...chapter} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;
