import React from 'react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-near-black pt-20 md:pt-40 pb-12 px-6 border-t border-subtle-gray/20">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">

                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-pure-white mb-12">
                    Let's build.
                </h2>

                <div className="flex gap-8 md:gap-16 mb-24">
                    <a href="mailto:guntakachakravaishnavreddy@gmail.com" className="text-light-gray hover:text-pure-white transition-colors uppercase tracking-widest text-sm md:text-base border-b border-transparent hover:border-pure-white pb-1">
                        Email
                    </a>
                    <a href="https://github.com/ChakraVaishnav" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-pure-white transition-colors uppercase tracking-widest text-sm md:text-base border-b border-transparent hover:border-pure-white pb-1">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/chakra-vaishnav-reddy/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-pure-white transition-colors uppercase tracking-widest text-sm md:text-base border-b border-transparent hover:border-pure-white pb-1">
                        LinkedIn
                    </a>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-subtle-gray/30 text-xs font-mono text-light-gray gap-4">
                    <span>&copy; 2026 Vaishnav.</span>
                    <span>Designed & Engineered in React.</span>
                    <span>Chakra Vaishnav Reddy Guntaka</span>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
