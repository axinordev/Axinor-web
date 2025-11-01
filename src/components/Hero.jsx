import React from "react";
import bgImage from "../assets/hero.jpg";
import { ArrowRight } from "lucide-react";
import overlayImage from "../assets/overlay.jpg";
// import overlayImage2 from "../assets/overlay.png";

export default function Hero() {
  return (
    <section className="relative w-full md:h-screen h-full flex flex-col items-center justify-center text-center bg-transparent text-white overflow-hidden pb-10">
      
      {/* Background Image */}
      {/* <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full md:w-[80%] h-full object-cover object-top md:ml-32"
      /> */}

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent"></div> */}

      {/* Overlay Images */}
      {/* <img
        src={overlayImage}
        alt="Overlay Texture"
        className="absolute inset-0 w-[300%] md:w-[500%] h-[170%] object-fill object-top -top-5 md:-left-28 opacity-30 mix-blend-overlay"
      /> */}
      {/* <img
        src={overlayImage}
        alt="Overlay Texture"
        className=" absolute inset-0 w-[300%] md:w-[500%] h-[170%] object-fill object-top -top-10  md:-left-52 rotate-360 opacity-20 mix-blend-overlay"
      /> */}
      {/* <img
        src={overlayImage2}
        alt="Overlay Texture"
        className="hidden md:block absolute inset-0 w-[300%] md:w-[500%] h-[170%] object-fill object-top -top-10 -left-36 md:-left-52 rotate-360 opacity-20 mix-blend-overlay"
      /> */}

      {/* Hero Content */}
      <div className="relative z-10 px-8 md:px-0 bg-transparent mt-36 md:mt-28">
        <h1 className="text-3xl  font-gilroy sm:text-4xl md:text-[64px] font-bold drop-shadow-lg tracking-wide ">
          <span className="block md:leading-[80px] leading-[40px] font-bold">Small Details Make</span>
          <span className="block md:leading-[80px] leading-[40px]">A Big Impression</span>
        </h1>

        <p className="mt-3 text-base font-gilro sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto tracking-wide leading-relaxed md:leading-loose">
          <span className="block md:leading-10">
            We focus on every detail to create designs that inspire, connect with people,
          </span>
          <span className="block md:leading-10">
            and deliver lasting brand impressions.
          </span>
        </p>

        <div className="mt-6 flex justify-center w-full">
          <button className="flex items-center justify-center gap-3 bg-[#194EFF] hover:bg-gradient-to-r from-[#4D8FFF] to-[#3A63FF] px-4 py-3 hover:px-6 rounded-full text-white text-lg font-medium hover:scale-105 transition transform">
            Get Started
            <ArrowRight className="bg-white text-blue-600 rounded-full p-1 w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}
