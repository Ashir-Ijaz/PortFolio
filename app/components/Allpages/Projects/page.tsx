
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Navbar from "../../navbar";
// import StarBackground from "../../starbackground";
// import Footer from "../../footer";
// import { FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "Healthcare App",
//     desc: "A modern Healthcare app with real-time appointment booking and chat.",
//     fullDesc:
//       "The Healthcare App is designed for doctors and patients to collaborate in real-time. Built with React, Next.js, Tailwind CSS, and MongoDB.",
//     img: "/healthcare.jpg",
//     github: "https://github.com/Ashir-Ijaz",
//   },
//   {
//     title: "Appliance Repair",
//     desc: "A website for online repairing of appliances.",
//     fullDesc:
//       "This platform allows customers to request appliance repair services and track repair status. Built with Node.js, MongoDB, and Next.js.",
//     img: "/repairing.jpg",
//     github: "https://github.com/Ashir-Ijaz",
//   },
//   {
//     title: "Portfolio Builder",
//     desc: "A drag-and-drop tool to create stunning portfolios.",
//     fullDesc:
//       "Portfolio Builder lets developers create professional portfolios without coding. Built with React, Tailwind CSS, and Next.js.",
//     img: "/portfolio.jpg",
//     github: "https://github.com/Ashir-Ijaz",
//   },
// ];

// export default function ProjectsPage() {
//   const [selectedProject, setSelectedProject] = useState<any>(null);

//   return (
//     <>
      
//       <div className="relative z-10 text-white">
//         <Navbar />

//         <section className="max-w-6xl mx-auto mt-24 px-4">
//           <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
//             Featured Projects
//           </h1>
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {projects.map((proj, index) => (
//               <div
//                 key={index}
//                 className="relative group bg-white/5 rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-[1.02] transition"
//               >
//                 <Image
//                   src={proj.img}
//                   alt={proj.title}
//                   width={500}
//                   height={300}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition">
//                   <p className="text-gray-200 px-4 text-center text-sm mb-4">
//                     {proj.desc}
//                   </p>
//                   <div className="flex gap-3">
//                     <a
//                       href={proj.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-2 bg-white/10 rounded hover:bg-white/20"
//                     >
//                       <FaGithub className="text-xl" />
//                     </a>
//                     <button
//                       onClick={() => setSelectedProject(proj)}
//                       className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 text-white text-sm"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">{proj.title}</h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {selectedProject && (
//           <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
//             <div className="bg-gradient-to-b from-purple-900/90 to-black/90 text-white rounded-lg max-w-lg w-full p-6 relative shadow-lg border border-purple-500/40">
//               <button
//                 onClick={() => setSelectedProject(null)}
//                 className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
//               >
//                 ✕
//               </button>
//               <Image
//                 src={selectedProject.img}
//                 alt={selectedProject.title}
//                 width={600}
//                 height={400}
//                 className="w-full h-48 object-cover rounded mb-4 border border-purple-500/40"
//               />
//               <h2 className="text-2xl font-bold mb-2">
//                 {selectedProject.title}
//               </h2>
//               <p className="text-gray-300 mb-4">{selectedProject.fullDesc}</p>
//               <a
//                 href={selectedProject.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
//               >
//                 View on GitHub
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
'use client';
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { projectsData, type Project } from '../../../../lib/data';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openPopup = (project: Project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-16">
      <SectionTitle title="Projects" />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project: Project) => (
          <div key={project.id}>
            <ProjectCard project={project} onClick={() => openPopup(project)} />
          </div>
        ))}
      </div>

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
                className="inline-block mt-6 px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
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
