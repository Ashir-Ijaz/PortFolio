import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/30 border-t border-white/10 py-6 mt-10 text-center text-gray-400">
      <div className="flex justify-center gap-6 mb-4">
        {/* GitHub */}
        <a
          href="https://github.com/Ashir-Ijaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub size={24} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ashirijaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin size={24} />
        </a>

        {/* Email */}
        <a
          href="mailto:aashirsatti@gmail.com"
          className="hover:text-white transition"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Ashir Ijaz. All rights reserved.
      </p>
    </footer>
  );
}
