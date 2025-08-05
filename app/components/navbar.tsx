import React from 'react';
import { cn } from "../lib/utils";

const Navbar = () => {
  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50",
      "bg-black/60 backdrop-blur-md border-b border-white/10",
      "flex items-center justify-between px-6 py-3",
      "shadow-lg"
    )}>
      {/* Logo/Title */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-white tracking-tight select-none">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-white bg-clip-text text-transparent">PortFolio</span>
        </span>
      </div>
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-lg">Home</a>
        <a href="#projects" className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-lg">Projects</a>
        <a href="#about" className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-lg">About</a>
        <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-lg">Contact</a>
      </div>
      {/* Resume Button */}
      <div className="flex items-center gap-2">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:scale-105 hover:from-blue-600 hover:to-purple-500 transition-all duration-200 border border-white/10"
        >
          Resume
        </a>
        {/* Mobile menu button (optional) */}
        {/* <button className="md:hidden text-white focus:outline-none">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;