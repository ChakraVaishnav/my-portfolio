import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const navLinks = [
        { name: 'Home', mobileName: 'Home', href: '/' },
        { name: 'Work Experience', mobileName: 'Experience', href: isHome ? '#experience' : '/#experience' },
        { name: 'Projects', mobileName: 'Projects', href: isHome ? '#projects' : '/#projects' },
        { name: 'Skills', mobileName: 'Skills', href: isHome ? '#skills' : '/#skills' },
        { name: 'Contact', mobileName: 'Contact', href: isHome ? '#contact' : '/#contact' },
        { name: 'My journey', mobileName: null, href: '/journey' },
    ];

    const handleNavClick = (e, link) => {
        if (link.name === 'Home') {
            if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-6 flex justify-center bg-near-black/90 backdrop-blur-sm border-b border-pure-white/5">
            <ul className="flex items-center gap-6 md:gap-12 px-4 flex-wrap justify-center">
                {navLinks.map((link) => (
                    <li key={link.name} className={!link.mobileName ? 'hidden md:block' : ''}>
                        {link.href.startsWith('/') && !link.href.includes('#') ? (
                            <Link
                                to={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className="text-pure-white text-xs md:text-sm font-medium tracking-wide border-b-2 border-transparent hover:border-pure-white transition-all pb-1 opacity-90 hover:opacity-100"
                            >
                                <span className="hidden md:inline">{link.name}</span>
                                <span className="md:hidden">{link.mobileName}</span>
                            </Link>
                        ) : (
                            <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className="text-pure-white text-xs md:text-sm font-medium tracking-wide border-b-2 border-transparent hover:border-pure-white transition-all pb-1 opacity-90 hover:opacity-100"
                            >
                                <span className="hidden md:inline">{link.name}</span>
                                <span className="md:hidden">{link.mobileName}</span>
                            </a>
                        )}
                    </li>
                ))}
            </ul>


        </nav>
    );
};

export default Navbar;
