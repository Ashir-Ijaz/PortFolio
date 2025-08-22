
// "use client";

// import Navbar from "../../navbar";
// import StarBackground from "../../starbackground";
// import Footer from "../../footer";

// export default function ContactPage() {
//   return (
//     <>
     
//       <div className="relative z-10 text-white">
//         <Navbar />

//         <section id="contact" className="max-w-2xl mx-auto mt-24 px-4">
//           <h1 className="text-4xl font-bold mb-8 text-center 
//              bg-gradient-to-r from-purple-400 via-pink-200 via-red-300 to-blue-300
//              bg-clip-text text-transparent leading-tight w-fit mx-auto">Contact Me</h1>
//           <p className="text-gray-300 mb-6">
//             Interested in working together or just want to say hi? Fill out the
//             form below or email me at{" "}
//             <a
//               href="mailto:aashirsatti@gmail.com"
//               className="text-purple-400 hover:underline"
//             >
//               aashirsatti@gmail.com
//             </a>
//             .
//           </p>
//           <form className="flex flex-col gap-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows={4}
//               className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
//             />
//             <button
//               type="submit"
//               className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white"
//             >
//               Send Message
//             </button>
//           </form>
//         </section>
//       </div>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import Navbar from "../../navbar";
import StarBackground from "../../starbackground";
import Footer from "../../footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [showThankYou, setShowThankYou] = useState(false); // <-- New state

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Server error:", text);
        setStatus("Failed to send message. Try again.");
        return;
      }

      const data = await res.json();
      if (data.success) {
        setStatus("");
        setName("");
        setEmail("");
        setMessage("");
        setShowThankYou(true); // <-- Show the thank you card
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message. Try again.");
    }
  };

  return (
    <div className="relative z-10 text-white">
      <Navbar />
      <section id="contact" className="max-w-2xl mx-auto mt-24 px-4">
        <h1
          className="text-4xl font-bold mb-8 text-center 
             bg-gradient-to-r from-purple-400 via-pink-200 via-red-300 to-blue-300
             bg-clip-text text-transparent leading-tight w-fit mx-auto"
        >
          Contact Me
        </h1>
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

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="px-4 py-2 rounded bg-white/10 border border-white/20 text-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white"
          >
            Send Message
          </button>
          {status && <p className="text-center text-gray-300 mt-2">{status}</p>}
        </form>
      </section>

      {showThankYou && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="relative bg-white/20 border border-white/30 rounded-lg shadow-lg max-w-md w-full p-6 text-center text-white backdrop-blur-lg">
      <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
      <p className="mb-6">
        Your message has been sent successfully. We’ll get back to you shortly!
      </p>
      <button
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold"
        onClick={() => setShowThankYou(false)}
      >
        Close
      </button>
    </div>
  </div>
)}
{showThankYou && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-transparent rounded-lg max-w-md w-full p-6 text-center text-white">
      <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
      <p className="mb-6">
        Your message has been sent successfully. We’ll get back to you shortly!
      </p>
      <button
        className="px-6 py-3 bg-purple-600 rounded text-white font-semibold"
        onClick={() => setShowThankYou(false)}
      >
        Close
      </button>
    </div>
  </div>
)}


    </div>
  );
}
