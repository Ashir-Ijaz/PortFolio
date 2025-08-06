// import Layout from "../../components/Layout";
// import Image from "next/image";
// import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa6";
// import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

// export default function AboutPage() {
//   return (
//     <Layout>
//       <section
//         id="about"
//         className="max-w-4xl mx-auto mt-16 sm:mt-24 mb-12 sm:mb-16 px-4"
//       >
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
//           About Me
//         </h2>
//         <div className="flex justify-center mb-6">
//           <Image
//             src="/myself.jpg"
//             alt="Ashir Ijaz"
//             width={180}
//             height={180}
//             className="w-[180px] h-[180px] rounded-full border-4 border-purple-400 object-cover"
//           />
//         </div>
//         <p className="text-base sm:text-lg text-gray-300 mb-4">
//           I'm a passionate developer with 5+ years of experience building
//           web applications that delight users and solve real-world problems.
//           I love working with modern technologies like React, Next.js, and
//           Node.js, and I'm always eager to learn and grow.
//         </p>
//         <h3 className="text-lg font-semibold mb-4">Skills</h3>
//         <div className="flex flex-wrap justify-center gap-6 text-4xl mb-6">
//           <FaReact title="React" className="text-blue-400" />
//           <SiNextdotjs title="Next.js" className="text-white" />
//           <FaNodeJs title="Node.js" className="text-green-500" />
//           <SiTailwindcss title="Tailwind CSS" className="text-teal-400" />
//           <SiMongodb title="MongoDB" className="text-green-400" />
//           <FaCss3Alt title="CSS3" className="text-blue-500" />
//         </div>
//       </section>
//     </Layout>
//   );
// }
"use client";
import Image from "next/image";
import Navbar from "../../navbar";
import StarBackground from "../../starbackground";
import Footer from "../../footer";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

export default function AboutPage() {
  return (
    <>
     
      <div className="relative z-10 text-white">
        <Navbar />

        <section className="max-w-4xl mx-auto mt-24 px-4 text-center">
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

          <h3 className="text-lg font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap justify-center gap-6 text-4xl mb-6">
            <FaReact className="text-blue-400" title="React" />
            <SiNextdotjs className="text-white" title="Next.js" />
            <FaNodeJs className="text-green-500" title="Node.js" />
            <SiTailwindcss className="text-teal-400" title="Tailwind CSS" />
            <SiMongodb className="text-green-400" title="MongoDB" />
            <FaCss3Alt className="text-blue-500" title="CSS3" />
          </div>
        </section>
      </div>
    </>
  );
}
