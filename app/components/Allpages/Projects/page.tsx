
// // "use client";

// // import { useState } from "react";
// // import Image from "next/image";
// // import Navbar from "../../navbar";
// // import StarBackground from "../../starbackground";
// // import Footer from "../../footer";
// // import { FaGithub } from "react-icons/fa";

// // const projects = [
// //   {
// //     title: "Healthcare App",
// //     desc: "A modern Healthcare app with real-time appointment booking and chat.",
// //     fullDesc:
// //       "The Healthcare App is designed for doctors and patients to collaborate in real-time. Built with React, Next.js, Tailwind CSS, and MongoDB.",
// //     img: "/healthcare.jpg",
// //     github: "https://github.com/Ashir-Ijaz",
// //   },
// //   {
// //     title: "Appliance Repair",
// //     desc: "A website for online repairing of appliances.",
// //     fullDesc:
// //       "This platform allows customers to request appliance repair services and track repair status. Built with Node.js, MongoDB, and Next.js.",
// //     img: "/repairing.jpg",
// //     github: "https://github.com/Ashir-Ijaz",
// //   },
// //   {
// //     title: "Portfolio Builder",
// //     desc: "A drag-and-drop tool to create stunning portfolios.",
// //     fullDesc:
// //       "Portfolio Builder lets developers create professional portfolios without coding. Built with React, Tailwind CSS, and Next.js.",
// //     img: "/portfolio.jpg",
// //     github: "https://github.com/Ashir-Ijaz",
// //   },
// // ];

// // export default function ProjectsPage() {
// //   const [selectedProject, setSelectedProject] = useState<any>(null);

// //   return (
// //     <>
      
// //       <div className="relative z-10 text-white">
// //         <Navbar />

// //         <section className="max-w-6xl mx-auto mt-24 px-4">
// //           <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
// //             Featured Projects
// //           </h1>
// //           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //             {projects.map((proj, index) => (
// //               <div
// //                 key={index}
// //                 className="relative group bg-white/5 rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-[1.02] transition"
// //               >
// //                 <Image
// //                   src={proj.img}
// //                   alt={proj.title}
// //                   width={500}
// //                   height={300}
// //                   className="w-full h-40 object-cover"
// //                 />
// //                 <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition">
// //                   <p className="text-gray-200 px-4 text-center text-sm mb-4">
// //                     {proj.desc}
// //                   </p>
// //                   <div className="flex gap-3">
// //                     <a
// //                       href={proj.github}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                       className="p-2 bg-white/10 rounded hover:bg-white/20"
// //                     >
// //                       <FaGithub className="text-xl" />
// //                     </a>
// //                     <button
// //                       onClick={() => setSelectedProject(proj)}
// //                       className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 text-white text-sm"
// //                     >
// //                       View Details
// //                     </button>
// //                   </div>
// //                 </div>
// //                 <div className="p-4">
// //                   <h3 className="text-lg font-semibold">{proj.title}</h3>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {selectedProject && (
// //           <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
// //             <div className="bg-gradient-to-b from-purple-900/90 to-black/90 text-white rounded-lg max-w-lg w-full p-6 relative shadow-lg border border-purple-500/40">
// //               <button
// //                 onClick={() => setSelectedProject(null)}
// //                 className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
// //               >
// //                 ✕
// //               </button>
// //               <Image
// //                 src={selectedProject.img}
// //                 alt={selectedProject.title}
// //                 width={600}
// //                 height={400}
// //                 className="w-full h-48 object-cover rounded mb-4 border border-purple-500/40"
// //               />
// //               <h2 className="text-2xl font-bold mb-2">
// //                 {selectedProject.title}
// //               </h2>
// //               <p className="text-gray-300 mb-4">{selectedProject.fullDesc}</p>
// //               <a
// //                 href={selectedProject.github}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
// //               >
// //                 View on GitHub
// //               </a>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // }
// 'use client';
// import React, { useState } from 'react';
// import SectionTitle from './SectionTitle';
// import ProjectCard from './ProjectCard';
// import { projectsData, type Project } from '../../../../lib/data';

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   const openPopup = (project: Project) => {
//     setSelectedProject(project);
//   };

//   const closePopup = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section className="py-16">
//       <SectionTitle title="Projects" />

//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {projectsData.map((project: Project) => (
//           <div key={project.id}>
//             <ProjectCard project={project} onClick={() => openPopup(project)} />
//           </div>
//         ))}
//       </div>

//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
//           <div className="relative w-full max-w-2xl bg-white/5 border border-white/10 rounded-xl shadow-2xl p-6 text-white backdrop-blur-md">
//             <button
//               className="absolute top-3 right-4 text-2xl text-white hover:text-red-400"
//               onClick={closePopup}
//             >
//               &times;
//             </button>

//             <img
//               src={selectedProject.image}
//               alt={selectedProject.title}
//               className="w-full h-64 object-cover rounded-lg mb-5 border border-white/10"
//             />

//             <h2 className="text-3xl font-semibold mb-3">{selectedProject.title}</h2>
//             <p className="text-gray-300 mb-5">{selectedProject.description}</p>

//             <div className="flex flex-wrap gap-3">
//               {selectedProject.technologies.map((tech: string, index: number) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/10"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {selectedProject.github && (
//               <a
//                 href={selectedProject.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-6 px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
//               >
//                 View on GitHub
//               </a>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
// 'use client';
// import React, { useState } from 'react';
// import SectionTitle from './SectionTitle';
// import ProjectCard from './ProjectCard';
// import { projectsData, type Project } from '@/lib/data';

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
//   const [visibleCount, setVisibleCount] = useState(3);

//   const openPopup = (project: Project) => {
//     setSelectedProject(project);
//   };

//   const closePopup = () => {
//     setSelectedProject(null);
//   };

//   const toggleProjects = () => {
//     if (visibleCount === 3) {
//       setVisibleCount(projectsData.length);
//     } else {
//       setVisibleCount(3);
//     }
//   };

//   return (
//     <section id="projects" className="py-16">
//       <SectionTitle title="Projects" />

//       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {projectsData.slice(0, visibleCount).map((project: Project) => (
//           <div key={project.id}>
//             <ProjectCard project={project} onClick={() => openPopup(project)} />
//           </div>
//         ))}
//       </div>

//       {/* View More / View Less button */}
//       <div className="flex justify-center mt-8">
//         <button
//           onClick={toggleProjects}
//           className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
//         >
//           {visibleCount === 3 ? 'View More' : 'View Less'}
//         </button>
//       </div>

//       {/* Popup for project details */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
//           <div className="relative w-full max-w-2xl bg-white/5 border border-white/10 rounded-xl shadow-2xl p-6 text-white backdrop-blur-md">
//             <button
//               className="absolute top-3 right-4 text-2xl text-white hover:text-red-400"
//               onClick={closePopup}
//             >
//               &times;
//             </button>

//             <img
//               src={selectedProject.image}
//               alt={selectedProject.title}
//               className="w-full h-64 object-cover rounded-lg mb-5 border border-white/10"
//             />

//             <h2 className="text-3xl font-semibold mb-3">{selectedProject.title}</h2>
//             <p className="text-gray-300 mb-5">{selectedProject.description}</p>

//             <div className="flex flex-wrap gap-3">
//               {selectedProject.technologies.map((tech: string, index: number) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/10"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             {selectedProject.github && (
//               <a
//                 href={selectedProject.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-6 px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
//               >
//                 View on GitHub
//               </a>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
"use client";

import React, { useState, useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projectsData, type Project } from "@/lib/data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const projectsPerPage = 3;
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const openPopup = (project: Project) => setSelectedProject(project);
  const closePopup = () => setSelectedProject(null);

  const toggleProjects = () => {
    if (visibleCount === 3) {
      setVisibleCount(projectsData.length);
    } else {
      setVisibleCount(3);
    }
  };

  // Desktop Slider Logic
  const maxStartIndex = Math.max(0, projectsData.length - projectsPerPage);

  const handleNext = () => {
    const newIndex = Math.min(startIndex + projectsPerPage, maxStartIndex);
    setStartIndex(newIndex);
    setTranslateX(0);
  };

  const handlePrevious = () => {
    const newIndex = Math.max(startIndex - projectsPerPage, 0);
    setStartIndex(newIndex);
    setTranslateX(0);
  };

  // Drag logic
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setTranslateX(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    const direction = translateX < -threshold ? 1 : translateX > threshold ? -1 : 0;
    const newPage = startIndex / projectsPerPage + direction;
    let newIndex = Math.round(newPage * projectsPerPage);

    if (newIndex < 0) newIndex = 0;
    else if (newIndex > maxStartIndex) newIndex = maxStartIndex;

    setStartIndex(newIndex);
    setTranslateX(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
  const handleMouseMove = (e: React.MouseEvent) => handleDragMove(e.clientX);
  const handleMouseUp = () => handleDragEnd();

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleDragEnd();

  // Transform
  const currentPage = startIndex / projectsPerPage;
  const transformOffset = `translateX(calc(-${currentPage * 100}% + ${translateX}px))`;

  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex >= maxStartIndex;

  return (
    <section id="projects" className="py-16">
      <SectionTitle title="Projects" />

      {isDesktop ? (
        // Desktop: Horizontal Slider
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex flex-nowrap gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: transformOffset }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projectsData.map((project: Project) => (
              <div key={project.id} className="flex-shrink-0 w-[calc(100%/3 - 1rem)] min-w-[200px]">
                <ProjectCard project={project} onClick={() => openPopup(project)} />
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              disabled={isPrevDisabled}
              className={`min-w-[120px] px-5 py-2 rounded-lg transition font-semibold text-center ${
                isPrevDisabled
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
              aria-label="Previous projects"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`min-w-[120px] px-5 py-2 rounded-lg transition font-semibold text-center ${
                isNextDisabled
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
              aria-label="Next projects"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        // Mobile: View More/View Less
        <>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.slice(0, visibleCount).map((project: Project) => (
              <div key={project.id}>
                <ProjectCard project={project} onClick={() => openPopup(project)} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={toggleProjects}
              className="min-w-[120px] px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold text-center"
            >
              {visibleCount === 3 ? "View More" : "View Less"}
            </button>
          </div>
        </>
      )}

      {/* Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white/5 border border-white/10 rounded-xl shadow-2xl p-6 text-white backdrop-blur-md">
            <button
              className="absolute top-3 right-4 text-2xl text-white hover:text-red-400"
              onClick={closePopup}
            >
              &times;
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-5 border border-white/10"
            />

            <h2 className="text-3xl font-semibold mb-3">{selectedProject.title}</h2>
            <p className="text-gray-300 mb-5">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-3">
              {selectedProject.technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {selectedProject.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 min-w-[120px] px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition font-semibold text-center"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
