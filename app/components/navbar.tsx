
// "use client";

// import { useState, useRef, useEffect } from "react";
// import { FaBars } from "react-icons/fa";
// import { cn } from "../../lib/utils";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement | null>(null);

//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const navLinks = [
//     { label: "Home", href: "#home" },
//     { label: "Projects", href: "#projects" },
//     { label: "About", href: "#about" },
//     { label: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 left-0 w-full z-50",
//         "bg-black/60 backdrop-blur-md border-b border-white/10",
//         "flex items-center justify-between px-6 py-3 shadow-md"
//       )}
//     >
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <a href="#home" className="text-2xl font-bold tracking-tight select-none">
//           <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-white bg-clip-text text-transparent">
//             PortFolio
//           </span>
//         </a>
//       </div>

//       {/* Desktop + Mobile Navigation Links */}
//       <div className="hidden md:flex items-center gap-8">
//         {navLinks.map(({ label, href }) => (
//           <a
//             key={label}
//             href={href}
//             className="text-white/80 hover:text-white relative font-medium text-lg transition-colors duration-200 group"
//           >
//             {label}
//             {/* Underline animation */}
//             <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
//           </a>
//         ))}
//       </div>

//       {/* Resume Button - Desktop Only */}
//       <div className="hidden md:flex items-center gap-2">
//         <a
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:scale-105 hover:from-blue-600 hover:to-purple-500 transition-all duration-200 border border-white/10"
//         >
//           Resume
//         </a>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden relative" ref={dropdownRef}>
//         <button
//           onClick={toggleMenu}
//           className="text-white focus:outline-none"
//         >
//           <FaBars size={20} />
//         </button>

//         {/* Small Dropdown */}
//         {menuOpen && (
//           <div
//             className="absolute right-0 mt-3 w-40 bg-black/90 backdrop-blur-md rounded-lg shadow-lg p-3 flex flex-col gap-3 z-50 animate-fade-in"
//           >
//             {navLinks.map(({ label, href }) => (
//               <a
//                 key={label}
//                 href={href}
//                 onClick={() => setMenuOpen(false)}
//                 className="text-white/90 hover:text-purple-400 text-sm font-medium transition-colors duration-200 relative group"
//               >
//                 {label}
//                 <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
//               </a>
//             ))}
//             <a
//               href="/resume.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               onClick={() => setMenuOpen(false)}
//               className="mt-2 px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm text-center font-semibold hover:scale-105 transition-all duration-200"
//             >
//               Resume
//             </a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";

import { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { cn } from "../../lib/utils";

const NAV_HEIGHT = 72; // adjust if your navbar height changes

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "/contact" },
  ];

  // Smooth scroll with fixed-navbar offset + preserve hash in URL
 const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const y = rect.top + window.pageYOffset - NAV_HEIGHT; // offset for fixed navbar
  window.scrollTo({ top: y, behavior: "smooth" });

  // Update URL hash without jump
  history.replaceState(null, "", href);

  setMenuOpen(false);
};

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50",
        "bg-black/60 backdrop-blur-md border-b border-white/10",
        "flex items-center justify-between px-6 py-3 shadow-md"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-2xl font-bold tracking-tight select-none"
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-white bg-clip-text text-transparent">
            PortFolio
          </span>
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
            className="text-white/80 hover:text-white relative font-medium text-lg transition-colors duration-200 group"
          >
            {label}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Resume Button - Desktop Only */}
      <div className="hidden md:flex items-center gap-2">
        <a
          href="/MYResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:scale-105 hover:from-blue-600 hover:to-purple-500 transition-all duration-200 border border-white/10"
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative" ref={dropdownRef}>
        <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Open menu">
          <FaBars size={20} />
        </button>

        {/* Compact Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute right-0 mt-3 w-44 bg-black/90 backdrop-blur-md rounded-lg shadow-lg p-3 flex flex-col gap-3 z-50">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-white/90 hover:text-purple-400 text-sm font-medium transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="/MYresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-1 px-3 py-1 rounded-md bg-gradient-to-r from-purple-600 to-blue-500 text-white text-sm text-center font-semibold hover:scale-105 transition-all duration-200"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;