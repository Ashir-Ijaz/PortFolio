// // import Layout from "../../components/Layout";
// // import Image from "next/image";
// // import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa6";
// // import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

// // export default function AboutPage() {
// //   return (
// //     <Layout>
// //       <section
// //         id="about"
// //         className="max-w-4xl mx-auto mt-16 sm:mt-24 mb-12 sm:mb-16 px-4"
// //       >
// //         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
// //           About Me
// //         </h2>
// //         <div className="flex justify-center mb-6">
// //           <Image
// //             src="/myself.jpg"
// //             alt="Ashir Ijaz"
// //             width={180}
// //             height={180}
// //             className="w-[180px] h-[180px] rounded-full border-4 border-purple-400 object-cover"
// //           />
// //         </div>
// //         <p className="text-base sm:text-lg text-gray-300 mb-4">
// //           I'm a passionate developer with 5+ years of experience building
// //           web applications that delight users and solve real-world problems.
// //           I love working with modern technologies like React, Next.js, and
// //           Node.js, and I'm always eager to learn and grow.
// //         </p>
// //         <h3 className="text-lg font-semibold mb-4">Skills</h3>
// //         <div className="flex flex-wrap justify-center gap-6 text-4xl mb-6">
// //           <FaReact title="React" className="text-blue-400" />
// //           <SiNextdotjs title="Next.js" className="text-white" />
// //           <FaNodeJs title="Node.js" className="text-green-500" />
// //           <SiTailwindcss title="Tailwind CSS" className="text-teal-400" />
// //           <SiMongodb title="MongoDB" className="text-green-400" />
// //           <FaCss3Alt title="CSS3" className="text-blue-500" />
// //         </div>
// //       </section>
// //     </Layout>
// //   );
// // }
// "use client";
// import Image from "next/image";
// import Navbar from "../../navbar";
// import StarBackground from "../../starbackground";
// import Footer from "../../footer";
// import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa6";
// import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

// export default function AboutPage() {
//   return (
//     <>
     
//       <div className="relative z-10 text-white">
//         <Navbar />

//         <section className="max-w-4xl mx-auto mt-24 px-4 text-center">
//           <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h1>
//           <div className="flex justify-center mb-6">
//             <Image
//               src="/myself.jpg"
//               alt="Ashir Ijaz"
//               width={180}
//               height={180}
//               className="w-[180px] h-[180px] rounded-full border-4 border-purple-400 object-cover"
//             />
//           </div>
//           <p className="text-lg text-gray-300 mb-6">
//             I'm a passionate developer with 5+ years of experience building web
//             applications that delight users and solve real-world problems. I
//             love working with modern technologies and constantly learning new
//             skills.
//           </p>

//           <h3 className="text-lg font-semibold mb-4">Skills</h3>
//           <div className="flex flex-wrap justify-center gap-6 text-4xl mb-6">
//             <FaReact className="text-blue-400" title="React" />
//             <SiNextdotjs className="text-white" title="Next.js" />
//             <FaNodeJs className="text-green-500" title="Node.js" />
//             <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />
//             <SiMongodb className="text-green-400" title="MongoDB" />
//             <FaCss3Alt className="text-blue-500" title="CSS3" />
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../navbar";
import Footer from "../../footer";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

export default function AboutPage() {
  const skills = [
    { icon: <FaReact className="text-blue-400" size={70} />, name: "React" },
    { icon: <SiNextdotjs className="text-white" size={70} />, name: "Next.js" },
    { icon: <FaNodeJs className="text-green-500" size={70} />, name: "Node.js" },
    { icon: <SiTailwindcss className="text-teal-400" size={70} />, name: "Tailwind CSS" },
    { icon: <SiMongodb className="text-green-400" size={70} />, name: "MongoDB" },
    { icon: <FaCss3Alt className="text-blue-500" size={70} />, name: "CSS3" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [skills.length]);

  // Show 3 skills at a time
  const visibleSkills = [
    skills[index],
    skills[(index + 1) % skills.length],
    skills[(index + 2) % skills.length],
  ];

  return (
    <div className="relative z-10 text-white">
      <Navbar />

      <section id="about" className="max-w-4xl mx-auto mt-24 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h1>
        <div className="flex justify-center mb-6">
          <Image
            src="/myself.jpg"
            alt="Ashir Ijaz"
            width={180}
            height={180}
            className="w-[180px] h-[180px] rounded-full border-4 border-purple-400 object-cover"
          />
        </div>
        <p className="text-lg text-gray-300 mb-6">
          I'm a passionate developer with 5+ years of experience building web
          applications that delight users and solve real-world problems. I
          love working with modern technologies and constantly learning new
          skills.
        </p>

        <h3 className="text-lg font-semibold mb-6">Skills</h3>

        {/* Three Skills at a Time */}
        <div className="flex justify-center gap-10 items-center h-[140px]">
          {visibleSkills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center transition-all duration-700 ease-in-out opacity-100 scale-100"
            >
              {skill.icon}
              <span className="mt-3 text-sm text-gray-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}