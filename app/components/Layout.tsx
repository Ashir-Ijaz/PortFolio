"use client";
import './globals.css'
import Navbar from "./navbar";
import StarBackground from "./starbackground";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 text-white">
      <StarBackground />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
