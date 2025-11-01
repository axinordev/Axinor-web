import React, { useRef, useEffect, useState } from "react";
import serviceImg from "../assets/service.jpg";
import web from "../assets/icons/web.svg";
import mob from "../assets/icons/mob.svg";
import ai from "../assets/icons/ai.svg";
import net from "../assets/icons/net.svg";
import ui from "../assets/icons/ui.svg";
import ml from "../assets/icons/ml.svg";
import block from "../assets/icons/block.svg";
import soft from "../assets/icons/soft.svg";
import bImg from "../assets/about-bottom.png";
import moonImage from "../assets/moon.png"; // 🌙 moon image

const services = [
  { image: web, title: "Website Design & Development", desc: "We create fast, secure, and scalable websites that combine design with seamless user experiences, helping your business stand out and succeed online." },
  { image: mob, title: "App Design & Development", desc: "We build high-performance mobile apps with sleek design, seamless usability, and strong security, helping your business grow on iOS, Android, and beyond." },
  { image: ai, title: "Gen AI Product Development", desc: "From AI chatbots to intelligent automation, we craft innovative Gen AI products that enhance efficiency, improve customer experience, and drive business growth." },
  { image: net, title: "Business Tech Consulting", desc: "We drive digital transformation with tailored solutions in IT, automation, and business intelligence to innovate, adapt, and achieve sustainable growth." },
  { image: ui, title: "UI/UX Research & Design", desc: "We craft intuitive UI/UX designs that combine research, creativity, and usability, delivering engaging digital experiences." },
  { image: ml, title: "AI & ML Solutions", desc: "We deliver AI and ML solutions that optimize processes, fuel innovation, and transform data into insights tailored to your business needs." },
  { image: block, title: "Blockchain Development", desc: "We build secure and scalable blockchain solutions—ensuring transparency, efficiency, and long-term value." },
  { image: soft, title: "Custom Software Development", desc: "We develop tailored software solutions designed to streamline operations, improve efficiency, and ensure long-term growth." },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 🌙 Scroll tracking for moon
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // smooth progress 0 → 1 across section
        const progress = Math.min(
          Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height)),
          1.2 // extend a bit for fade out
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌙 Moon movement (visible across sections)
  const moonStyle = {
    position: "fixed",
    top: "8%", // start higher
    right: "-45%", // start further right
    width: "40%",
    transform: `translate(-${scrollProgress * 135}vw, -${scrollProgress * 20}vh) rotate(${scrollProgress * 360}deg)`,
    opacity:
      scrollProgress < 0.1
        ? 0
        : scrollProgress < 1
        ? Math.min(0.5, scrollProgress + 0.1)
        : 0, // fade out gradually after leaving section
    pointerEvents: "none",
    zIndex: 1,
    transition: "transform 0.1s linear, opacity 0.3s ease-in-out",
    filter: "drop-shadow(0 0 30px rgba(255,255,255,0.15))",
  };

  return (
    <>
      {/* 🌙 Floating Moon - visible across sections */}
      <img src={moonImage} alt="Moon" style={moonStyle} />

      <section
        ref={sectionRef}
        className="relative w-full bg-transparent text-white py-24 px-6 md:px-6 overflow-visible"
        id="services"
      >
        {/* Bottom Decoration */}
        <img
          src={bImg}
          alt="Bottom Decoration"
          className="absolute md:bottom-20 bottom-0 left-0 w-[100%] md:w-[75%] object-contain pointer-events-none z-0"
          style={{
            transform: "translate(-40%, 60%) rotate(360deg)",
          }}
        />

        <div className="text-center mb-12 relative z-10">
          <p className="text-[#194EFF] uppercase tracking-wide text-xl font-medium">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug tracking-wide">
            We Are Digital Agency
          </h2>
        </div>

        {/* Service Cards */}
        <div className="relative z-10 grid gap-8 sm:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-[35px] h-96 md:h-[420px] md:w-[280px] overflow-hidden p-3 border-[1px] border-[#001FD8] backdrop-blur-md hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#194fffa1] to-[#00041f81]"></div>
              <img
                src={serviceImg}
                alt="Service Background"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10">
                <div className="flex flex-row">
                  <div className="w-1.5 h-[52px] rounded-full bg-[#3564ff] mt-4 -ml-3"></div>
                  <div className="bg-white rounded-[12px] flex items-center justify-center w-14 h-14 m-3 mb-4 shadow-lg">
                    <img
                      src={service.image}
                      alt="icon"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[24px] font-semibold mb-3 my-2 tracking-wider px-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed m-2 font-thin">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
