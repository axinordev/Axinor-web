import React, { useRef, useEffect, useState } from "react";
import aboutImage from "../assets/seven.png";
import decorativeImage from "../assets/about-bottom.png";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = Math.min(
          Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height)),
          1
        );

        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const moonStyle = {
  //   transform: `translate(${scrollProgress * 90}vw, ${scrollProgress * 40}vh) rotate(${scrollProgress * 360}deg)`,
  //   opacity: Math.min(scrollProgress * 0.9, 0.7),
  // };

  return (
    <section
      ref={sectionRef}
      className="relative bg-transparent text-white py-28 px-6 md:px-14 "
      id="About"
    >
      {/* Moon moving based on scroll */}
      {/* <img
        src={moonImage}
        alt="Moon"
        className="absolute md:w-[34%] w-[67%] pointer-events-none z-0 mt-10 -ml-5 overflow-hidden"
        style={moonStyle}
      /> */}

      {/* Decorative image at bottom-right */}
      <img
        src={decorativeImage}
        alt="Decorative"
        className="absolute -bottom-56 right-0 w-[75%] pointer-events-none z-0  rotate-1 overflow-hidden"
        style={{
          transform: "translate(55%, 0%)",
        }}
      />

      <h2 className="text-center text-xl md:text-[24px] text-[#194EFF] mb-5 -mt-6">ABOUT US</h2>
      <h2 className="text-3xl font-gilroy md:text-[44px] font-bold text-center leading-snug mb-16 tracking-wide">
        We Are Digital Agency
      </h2>

      <div className="relative z-10 max-w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image with overlay text */}
        <div className="relative group flex justify-center items-center">
          <img
            src={aboutImage}
            alt="Years of Experience"
            className="opacity-80 group-hover:opacity-100 transition duration-500 w-full max-w-lg object-cover"
          />
          <div className="absolute inset-0 flex flex-col -ml-20 -mt-6 justify-center items-center text-6xl font-extrabold bg-transparent rounded-2xl">
            <span className="md:text-[350px] font-gilroy text-[230px] pt-1 ml-2 font-extrabold bg-gradient-to-tr from-[#00041F] via-[#000730f3] to-[#001676bd] bg-clip-text text-transparent seven">
              7+
            </span>
            <span className="md:text-5xl font-gilroy text-3xl ml-3 md:ml-9 mb-1 font-bold bg-gradient-to-r from-[#00041F] via-[#000730EC] to-[#001676bd] bg-clip-text text-transparent">
              Years Experience
            </span>
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6 bg-transparent font-light md:text-lg pr-2">
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
