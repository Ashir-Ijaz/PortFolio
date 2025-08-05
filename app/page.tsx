// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import Navbar from "./components/navbar";
// import StarBackground from "./components/starbackground";
// import Footer from "./components/footer";
// import { FaGithub } from "react-icons/fa";
// import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa6";
// import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

// const projects = [
//   {
//     title: "Healthcare App",
//     desc: "A modern Healthcare app with real-time collaboration and beautiful UI.",
//     img: "/healthcare.jpg",
//     github: "https://github.com/Ashir-Ijaz",
//   },
//   {
//     title: "Appliance Repair",
//     desc: "A website for online repairing of their appliances.",
//     img: "/repairing.jpg",
//     github: "https://github.com/Ashir-Ijaz",
//   },
//   {
//     title: "Portfolio Builder",
//     desc: "A drag-and-drop tool to create stunning developer portfolios in minutes.",
//     img: "/portfolio.jpg",
//     github: "https://github.com/Ashir-Ijaz",
//   },
// ];

// export default function Home() {
//   useEffect(() => {}, []);

//   return (
//     <>
//       <StarBackground />
//       <div className="relative z-10 text-white">
//         <Navbar />

//         {/* Hero Section */}
//         <section
//           id="home"
//           className="flex flex-col items-center justify-center min-h-[70vh] text-center pt-20 sm:pt-24 px-4"
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-white bg-clip-text text-transparent">
//             Ashir Ijaz
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-xl sm:max-w-2xl">
//             I craft modern web experiences with clean code & engaging UI
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <a
//               href="#projects"
//               className="px-6 sm:px-8 py-2 sm:py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-sm sm:text-base"
//             >
//               View Projects
//             </a>
//             <a
//               href="#contact"
//               className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600/80 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold text-sm sm:text-base"
//             >
//               Contact Me
//             </a>
//           </div>
//         </section>

//         <main className="flex flex-col items-center justify-center w-full text-center px-4">
//           {/* About Section */}
//           <section
//             id="about"
//             className="max-w-4xl mx-auto mt-16 sm:mt-24 mb-12 sm:mb-16 px-4"
//           >
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
//               About Me
//             </h2>

//             {/* Profile Picture */}
//             <div className="flex justify-center mb-6">
//               <Image
//                 src="/myself.jpg"
//                 alt="Ashir Ijaz"
//                 width={180}
//                 height={180}
//                 priority
//                 sizes="(max-width: 768px) 150px, 180px"
//                 className="w-[180px] h-[180px] rounded-full border-4 border-purple-400 object-cover"
//               />
//             </div>

//             <p className="text-base sm:text-lg text-gray-300 mb-4">
//               I'm a passionate developer with 5+ years of experience building
//               web applications that delight users and solve real-world problems.
//               I love working with modern technologies like React, Next.js, and
//               Node.js, and I'm always eager to learn and grow.
//             </p>

//             {/* Skills */}
//             <h3 className="text-lg font-semibold mb-4">Skills</h3>
//             <div className="flex flex-wrap justify-center gap-6 text-4xl mb-6">
//               <FaReact title="React" className="text-blue-400" />
//               <SiNextdotjs title="Next.js" className="text-white" />
//               <FaNodeJs title="Node.js" className="text-green-500" />
//               <SiTailwindcss title="Tailwind CSS" className="text-teal-400" />
//               <SiMongodb title="MongoDB" className="text-green-400" />
//               <FaCss3Alt title="CSS3" className="text-blue-500" />
//             </div>
//           </section>

//           {/* Projects Section */}
//           <section
//             id="projects"
//             className="max-w-6xl mx-auto mb-16 sm:mb-24 px-4"
//           >
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
//               Featured Projects
//             </h2>
//             <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
//               {projects.map((proj, index) => (
//                 <div
//                   key={index}
//                   className="relative group bg-white/5 rounded-xl overflow-hidden shadow-lg border border-white/10 transition-transform duration-300 hover:scale-[1.02] will-change-transform"
//                 >
//                   {/* Project Thumbnail */}
//                   <Image
//                     src={proj.img}
//                     alt={proj.title}
//                     width={500}
//                     height={300}
//                     loading="lazy"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     className="w-full h-40 object-cover"
//                   />

//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
//                     <p className="text-gray-200 px-4 text-center text-sm mb-4">
//                       {proj.desc}
//                     </p>
//                     <a
//                       href={proj.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-2 bg-white/10 rounded hover:bg-white/20"
//                     >
//                       <FaGithub className="text-xl" />
//                     </a>
//                   </div>

//                   {/* Title */}
//                   <div className="p-4">
//                     <h3 className="text-lg sm:text-xl font-semibold">
//                       {proj.title}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Contact Section */}
//           <section
//             id="contact"
//             className="max-w-2xl mx-auto mb-16 sm:mb-24 px-4"
//           >
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//               Contact Me
//             </h2>
//             <p className="text-base sm:text-lg text-gray-300 mb-6">
//               Interested in working together or just want to say hi? Fill out
//               the form below or email me at{" "}
//               <a
//                 href="mailto:aashirsatti@gmail.com"
//                 className="text-purple-400 hover:underline"
//               >
//                 aashirsatti@gmail.com
//               </a>
//               .
//             </p>
//             <form className="flex flex-col gap-4 items-center w-full">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full max-w-md px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full max-w-md px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 rows={4}
//                 className="w-full max-w-md px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
//               />
//               <button
//                 type="submit"
//                 className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600/80 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold mt-2 text-sm sm:text-base"
//               >
//                 Send Message
//               </button>
//             </form>
//           </section>
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import StarBackground from "./components/starbackground";
import Footer from "./components/footer";
import { FaGithub } from "react-icons/fa";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

type ProjectType = {
  title: string;
  desc: string;
  fullDesc: string;
  img: string;
  github: string;
};

const projects: ProjectType[] = [
  {
    title: "Healthcare App",
    desc: "A modern Healthcare app with real-time collaboration and beautiful UI.",
    fullDesc:
      "The Healthcare App is designed for doctors and patients to collaborate in real-time. It includes secure messaging, appointment scheduling, prescription tracking, and health record management. Built with React, Next.js, Tailwind CSS, and MongoDB.",
    img: "/healthcare.jpg",
    github: "https://github.com/Ashir-Ijaz",
  },
  {
    title: "Appliance Repair",
    desc: "A website for online repairing of their appliances.",
    fullDesc:
      "This Appliance Repair platform allows customers to request appliance repair services, track repair status, and connect with service providers. Built with Node.js backend, MongoDB database, and a Next.js frontend for fast performance.",
    img: "/repairing.jpg",
    github: "https://github.com/Ashir-Ijaz",
  },
  {
    title: "Portfolio Builder",
    desc: "A drag-and-drop tool to create stunning developer portfolios in minutes.",
    fullDesc:
      "Portfolio Builder is a web-based drag-and-drop tool that allows developers to create professional portfolios without coding. Includes custom themes, animations, and live previews. Built with React, Tailwind CSS, and Next.js.",
    img: "/portfolio.jpg",
    github: "https://github.com/Ashir-Ijaz",
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  useEffect(() => {}, []);

  return (
    <>
      <StarBackground />
      <div className="relative z-10 text-white">
        <Navbar />

        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-[70vh] text-center pt-20 sm:pt-24 px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-white bg-clip-text text-transparent">
            Ashir Ijaz
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-xl sm:max-w-2xl">
            I craft modern web experiences with clean code & engaging UI
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-2 sm:py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600/80 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </section>

        <main className="flex flex-col items-center justify-center w-full text-center px-4">
          {/* About Section */}
          <section
            id="about"
            className="max-w-4xl mx-auto mt-16 sm:mt-24 mb-12 sm:mb-16 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              About Me
            </h2>

            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <Image
                src="/myself.jpg"
                alt="Ashir Ijaz"
                width={180}
                height={180}
                priority
                sizes="(max-width: 768px) 150px, 180px"
                className="w-[180px] h-[180px] rounded-full border-4 border-purple-400 object-cover"
              />
            </div>

            <p className="text-base sm:text-lg text-gray-300 mb-4">
              I'm a passionate developer with 5+ years of experience building
              web applications that delight users and solve real-world problems.
              I love working with modern technologies like React, Next.js, and
              Node.js, and I'm always eager to learn and grow.
            </p>

            {/* Skills */}
            <h3 className="text-lg font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap justify-center gap-6 text-4xl mb-6">
              <FaReact title="React" className="text-blue-400" />
              <SiNextdotjs title="Next.js" className="text-white" />
              <FaNodeJs title="Node.js" className="text-green-500" />
              <SiTailwindcss title="Tailwind CSS" className="text-teal-400" />
              <SiMongodb title="MongoDB" className="text-green-400" />
              <FaCss3Alt title="CSS3" className="text-blue-500" />
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="max-w-6xl mx-auto mb-16 sm:mb-24 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
              Featured Projects
            </h2>
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((proj, index) => (
                <div
                  key={index}
                  className="relative group bg-white/5 rounded-xl overflow-hidden shadow-lg border border-white/10 transition-transform duration-300 hover:scale-[1.02] will-change-transform"
                >
                  {/* Project Thumbnail */}
                  <Image
                    src={proj.img}
                    alt={proj.title}
                    width={500}
                    height={300}
                    loading="lazy"
                    className="w-full h-40 object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                    <p className="text-gray-200 px-4 text-center text-sm mb-4">
                      {proj.desc}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded hover:bg-white/20"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 text-white text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="p-4">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {proj.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="max-w-2xl mx-auto mb-16 sm:mb-24 px-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Contact Me
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Interested in working together or just want to say hi? Fill out
              the form below or email me at{" "}
              <a
                href="mailto:aashirsatti@gmail.com"
                className="text-purple-400 hover:underline"
              >
                aashirsatti@gmail.com
              </a>
              .
            </p>
            <form className="flex flex-col gap-4 items-center w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full max-w-md px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full max-w-md px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full max-w-md px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600/80 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold mt-2 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </section>
        </main>

        {/* Popup Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
            <div className="bg-gradient-to-b from-purple-900/90 to-black/90 text-white rounded-lg max-w-lg w-full p-6 relative shadow-lg border border-purple-500/40">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
              <Image
                src={selectedProject.img}
                alt={selectedProject.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded mb-4 border border-purple-500/40"
              />
              <h2 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 mb-4">{selectedProject.fullDesc}</p>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
              >
                View on GitHub
              </a>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
