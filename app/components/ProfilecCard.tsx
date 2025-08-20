"use client";

import Tilt from "react-parallax-tilt";

export default function ProfileCard() {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareBorderRadius="1.5rem"
      scale={1.02}
      transitionSpeed={1500}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      className="relative w-72 h-96 rounded-3xl overflow-hidden"
    >
      {/* Subtle Gradient Border */}
      <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
        {/* Dark overlay inside to keep border clean */}
        <div className="w-full h-full rounded-3xl bg-black/60"></div>
      </div>

      {/* Profile Image */}
      <img
        src="/myself.jpg"
        alt="My Profile"
        className="relative w-full h-full object-cover rounded-3xl border border-white/20"
      />
    </Tilt>
  );
}
