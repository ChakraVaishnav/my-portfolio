import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
    const name = "VAISHNAV";

    const letterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const { theme, toggleTheme } = useTheme();

    return (
        <Box
            as="section"
            className="relative min-h-screen w-full flex items-center justify-center bg-near-black overflow-hidden px-6 md:px-12 pt-16 md:pt-24"
        >

            {/* Navbar moved to App.jsx */}

            <div className="max-w-[1800px] w-full mx-auto grid md:grid-cols-2 gap-8 items-center">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative order-2 md:order-1 flex justify-center md:justify-start ml-0 md:ml-12"
                >
                    <div className="relative w-full max-w-3xl lg:max-w-5xl overflow-hidden rounded-sm">
                        <div className="absolute inset-0 bg-gradient-to-r from-near-black via-transparent to-transparent z-10 opacity-25" />
                        <img
                            src="/profile-2.png"
                            alt="Vaishnav"
                            className="w-full h-auto object-contain grayscale transition-transform duration-700 ease-out hover:scale-105"
                        />
                    </div>
                </motion.div>

                {/* Content */}
                <div className="relative order-1 md:order-2 flex flex-col justify-center space-y-8 z-20 pt-2 md:pt-0 pl-8 md:pl-24 lg:pl-32">

                    <button
                        onClick={toggleTheme}
                        className="absolute top-0 right-0 text-pure-white opacity-80 hover:opacity-100 transition-opacity p-2 rounded-full hover:bg-pure-white/10"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
                    </button>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <h2 className="text-lg text-light-gray font-light tracking-wide">I'm</h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-pure-white tracking-tighter mt-3 flex">
                            {name.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={letterVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.9 + (index * 0.08) }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h1>

                    </motion.div>

                    {/* Hero Copy */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 1 }}
                        className="text-light-gray text-sm md:text-base leading-relaxed max-w-md space-y-3"
                    >
                        <p>
                            A Full Stack Developer building useful, scalable products.
                        </p>
                        <p>
                            Creator of <span className="text-pure-white font-medium">COREsume</span> (150+ users) and
                            <span className="text-pure-white font-medium"> bro-auth</span>, an npm authentication package.
                        </p>
                        <p>
                            Focused on system design, authentication, and clean engineering.
                        </p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4, duration: 0.8 }} className="flex flex-row gap-2">
                        <a
                            href="#projects"
                            className="inline-block text-xs text-pure-white border border-pure-white/40 px-4 py-2 tracking-wide hover:border-pure-white hover:bg-pure-white/5 transition-all text-center"


                        >
                            View Projects →
                        </a>
                        <Link
                            to="/journey"
                            className="inline-block text-sm text-pure-white border border-pure-white/40 px-6 py-3 tracking-wide hover:border-pure-white hover:bg-pure-white/5 transition-all text-center"
                        >
                            My journey →
                        </Link>
                    </motion.div>

                </div>
            </div>
        </Box>
    );
};

export default Hero;
