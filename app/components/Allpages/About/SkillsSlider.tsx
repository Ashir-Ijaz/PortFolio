// // app/components/SkillsSlider.tsx
// "use client";
// import Slider from "react-slick";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
// import { SiMongodb, SiTailwindcss } from "react-icons/si";

// export default function SkillsSlider() {
//   const skills = [
//     { icon: <FaHtml5 className="text-orange-500 text-6xl" />, name: "HTML" },
//     { icon: <FaCss3Alt className="text-blue-500 text-6xl" />, name: "CSS" },
//     { icon: <FaJs className="text-yellow-400 text-6xl" />, name: "JavaScript" },
//     { icon: <FaReact className="text-cyan-400 text-6xl" />, name: "React" },
//     { icon: <FaNodeJs className="text-green-500 text-6xl" />, name: "Node.js" },
//     { icon: <SiMongodb className="text-green-600 text-6xl" />, name: "MongoDB" },
//     { icon: <SiTailwindcss className="text-sky-400 text-6xl" />, name: "TailwindCSS" },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 1500,
//     cssEase: "linear",
//   };

//   return (
//     <Slider {...settings}>
//       {skills.map((skill, index) => (
//         <div key={index} className="flex flex-col items-center justify-center">
//           {skill.icon}
//           <p className="mt-2 text-lg">{skill.name}</p>
//         </div>
//       ))}
//     </Slider>
//   );
// }
"use client";

import Slider from "react-slick";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp 
} from "react-icons/fa";
import { 
  SiMongodb, SiTailwindcss, SiAngular, SiDotnet, SiMysql 
} from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SkillsSlider() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-6xl" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500 text-6xl" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-400 text-6xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400 text-6xl" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500 text-6xl" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-600 text-6xl" />, name: "MongoDB" },
    { icon: <SiTailwindcss className="text-sky-400 text-6xl" />, name: "TailwindCSS" },

    // ✅ New additions
    { icon: <SiAngular className="text-red-600 text-6xl" />, name: "Angular" },
    { icon: <FaPhp className="text-indigo-500 text-6xl" />, name: "PHP" },
    { icon: <SiDotnet className="text-purple-600 text-6xl" />, name: ".NET" },
    { icon: <SiMysql className="text-blue-700 text-6xl" />, name: "MySQL" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="w-full py-6">
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-center">
            <div className="flex flex-col items-center justify-center text-center">
              {skill.icon}
              <p className="mt-2 text-lg font-semibold">{skill.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
