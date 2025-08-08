// import Layout from "./components/Layout";

// export default function Home() {
//   return (
//     <Layout>
//       <section
//         id="home"
//         className="flex flex-col items-center justify-center min-h-[70vh] text-center pt-20 sm:pt-24 px-4"
//       >
//         <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-white bg-clip-text text-transparent">
//           Ashir Ijaz
//         </h1>
//         <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-xl sm:max-w-2xl">
//           I craft modern web experiences with clean code & engaging UI
//         </p>
//         <div className="flex flex-wrap gap-4 justify-center">
//           <a
//             href="/projects"
//             className="px-6 sm:px-8 py-2 sm:py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold text-sm sm:text-base"
//           >
//             View Projects
//           </a>
//           <a
//             href="/contact"
//             className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600/80 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold text-sm sm:text-base"
//           >
//             Contact Me
//           </a>
//         </div>
//       </section>
//     </Layout>
//   );
// }
import Navbar from "./components/navbar";
import StarBackground from "./components/starbackground";
import Footer from "./components/footer";
import About from "./components/Allpages/About/page";
import Projects from "./components/Allpages/Projects/page";
import Contact from "./components/Allpages/Contact/page";


export default function Home() {
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
        </section>

        {/* Sections */}
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
