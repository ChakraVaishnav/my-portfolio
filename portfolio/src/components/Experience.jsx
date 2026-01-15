import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="bg-near-black py-20 px-6">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-20">
                    <div className="w-full h-px bg-white/10 mb-12"></div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-pure-white inline-block border-b-2 border-pure-white pb-2 w-fit uppercase">
                            Experience
                        </h2>
                        <p className="text-light-gray font-light max-w-2xl text-lg leading-relaxed">
                            Proven history of delivering value through code.
                        </p>
                    </div>
                </div>

                <div className="border-l border-subtle-gray pl-8 md:pl-16 py-4 space-y-16">
                    <div className="relative">
                        <div className="absolute -left-[33px] md:-left-[65px] top-2 w-3 h-3 bg-pure-white rounded-full ring-4 ring-near-black" />

                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-6">
                            <h3 className="text-3xl font-bold tracking-tight text-pure-white">Green Krt</h3>
                            <span className="text-light-gray font-mono text-sm">Dec 2025 — Present</span>
                        </div>

                        <h4 className="text-xl text-lighter-gray mb-6">Freelance Frontend Developer</h4>

                        <ul className="space-y-4 max-w-2xl text-light-gray font-light list-disc list-outside ml-4 marker:text-subtle-gray">
                            <li>Architected reusable UI component library using Next.js, reducing development time for future features.</li>
                            <li>Engineered seamless state management across complex e-commerce flows interacting with multiple REST endpoints.</li>
                            <li>Optimized frontend performance and accessibility standards for production deployment.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
