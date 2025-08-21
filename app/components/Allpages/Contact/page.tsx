// // import Layout from "../../components/Layout";

// // export default function ContactPage() {
// //   return (
// //     <Layout>
// //       <section id="contact" className="max-w-2xl mx-auto mb-16 sm:mb-24 px-4">
// //         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
// //           Contact Me
// //         </h2>
// //         <p className="text-base sm:text-lg text-gray-300 mb-6">
// //           Interested in working together or just want to say hi? Fill out the
// //           form below or email me at{" "}
// //           <a
// //             href="mailto:aashirsatti@gmail.com"
// //             className="text-purple-400 hover:underline"
// //           >
// //             aashirsatti@gmail.com
// //           </a>
// //           .
// //         </p>
// //         <form className="flex flex-col gap-4 items-center w-full">
// //           <input
// //             type="text"
// //             placeholder="Your Name"
// //             className="w-full max-w-md px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
// //           />
// //           <input
// //             type="email"
// //             placeholder="Your Email"
// //             className="w-full max-w-md px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
// //           />
// //           <textarea
// //             placeholder="Your Message"
// //             rows={4}
// //             className="w-full max-w-md px-4 py-2 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
// //           />
// //           <button
// //             type="submit"
// //             className="px-6 sm:px-8 py-2 sm:py-3 bg-purple-600/80 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold mt-2"
// //           >
// //             Send Message
// //           </button>
// //         </form>
// //       </section>
// //     </Layout>
// //   );
// // }
"use client";

import Navbar from "../../navbar";
import StarBackground from "../../starbackground";
import Footer from "../../footer";

export default function ContactPage() {
  return (
    <>
     
      <div className="relative z-10 text-white">
        <Navbar />

        <section id="contact" className="max-w-2xl mx-auto mt-24 px-4">
          <h1 className="text-4xl font-bold mb-8 text-center 
             bg-gradient-to-r from-purple-400 via-pink-200 via-red-300 to-blue-300
             bg-clip-text text-transparent leading-tight w-fit mx-auto">Contact Me</h1>
          <p className="text-gray-300 mb-6">
            Interested in working together or just want to say hi? Fill out the
            form below or email me at{" "}
            <a
              href="mailto:aashirsatti@gmail.com"
              className="text-purple-400 hover:underline"
            >
              aashirsatti@gmail.com
            </a>
            .
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
// "use client";

// import { useState, FormEvent } from "react";
// import Navbar from "../../navbar";
// import StarBackground from "../../starbackground";
// import Footer from "../../footer";

// export default function ContactPage() {
//   const [messageSent, setMessageSent] = useState(false);
//   const [error, setError] = useState("");

//   const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const target = e.target as HTMLFormElement;

//     const formData = {
//       name: (target.elements.namedItem("name") as HTMLInputElement).value,
//       email: (target.elements.namedItem("email") as HTMLInputElement).value,
//       message: (target.elements.namedItem("message") as HTMLTextAreaElement).value,
//     };

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const text = await res.text();
//       let data;
//       try {
//         data = JSON.parse(text);
//       } catch {
//         setError("Server returned non-JSON response");
//         return;
//       }

//       if (res.ok && data.success) {
//         setMessageSent(true);
//         setError("");
//         target.reset();
//       } else {
//         setError(data.error || "Something went wrong");
//       }
//     } catch (err) {
//       console.error("Frontend fetch error:", err);
//       setError("Failed to send message");
//     }
//   };

//   return (
//     <div className="relative z-10 text-white">
//       <Navbar />
//       <StarBackground className="pointer-events-none" /> {/* Allow clicks to pass */}
//       <section id="contact" className="max-w-2xl mx-auto mt-24 px-4">
//         <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h1>
//         <p className="text-gray-300 mb-6">
//           Interested in working together or just want to say hi? Fill out the
//           form below or email me at{" "}
//           <a
//             href="mailto:aashirsatti@gmail.com"
//             className="text-purple-400 hover:underline"
//           >
//             aashirsatti@gmail.com
//           </a>
//           .
//         </p>
//         <form onSubmit={sendEmail} className="flex flex-col gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows={4}
//             className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
//             required
//           />
//           <button
//             type="submit"
//             className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white"
//           >
//             Send Message
//           </button>
//         </form>
//         {messageSent && (
//           <p className="mt-4 text-green-400 font-semibold">
//             Your message has been sent!
//           </p>
//         )}
//         {error && <p className="mt-4 text-red-400 font-semibold">{error}</p>}
//       </section>
//     </div>
//   );
// }

