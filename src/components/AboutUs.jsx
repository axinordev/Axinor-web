import React from "react";
import aboutImage from "../assets/about2.png";

export default function AboutSection() {
  return (
    <section className="relative bg-transparent text-white py-24 px-6 md:px-14 overflow-hidden" id="About">
      {/* Subtle background gradient for depth */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-[#020617] to-black opacity-90"></div> */}
        <h2 className="align-center text-center justify-center text-xl text-[#194EFF] mb-4">ABOUT US</h2>
        <h2 className="text-3xl md:text-4xl font-extrabold align-center text-center justify-center leading-snug mb-8 tracking-wide">
            We Are Digital Agency
          </h2>
      <div className="relative z-10 max-w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image with overlay text */}
        <div className="relative group flex justify-center items-center">
          <img
            src={aboutImage}
            alt="Years of Experience"
            className=" opacity-80 group-hover:opacity-100 transition duration-500 w-full max-w-md object-cover"
          />
          <div className="absolute inset-0 flex flex-col -ml-20 -mt-6 justify-center items-center text-6xl font-extrabold bg-trasparent rounded-2xl">
            <span className="md:text-[300px] text-[250px] font-extrabold bg-gradient-to-tr from-[#00041F] via-[#000730EC] to-[#001676bd] bg-clip-text text-transparent">
            7+
            </span>
            <span className="text-4xl font-bold bg-gradient-to-r from-[#00041F] via-[#000730EC] to-[#001676bd] bg-clip-text text-transparent">
            Years Experience
            </span>
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6 bg-transparent">
          <p className="text-gray-300 leading-[36px]">
            At Axinor, we bring together creativity, technology, and strategy to craft
            digital experiences that inspire and deliver measurable results. From
            designing engaging websites to developing impactful campaigns, our mission
            is to help your brand connect with the right audience and grow sustainably.
          </p>
          <p className="text-gray-300 leading-[36px]">
            Our passionate team of designers, developers, and strategists works
            hand-in-hand with you to understand your vision and bring it to life. We
            believe in building lasting partnerships rooted in trust, innovation, and
            measurable success.
          </p>
        </div>
      </div>
    </section>
  );
}
