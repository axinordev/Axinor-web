import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutUs";
import Services from "../components/Services";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Works from "../components/Works";

// Images
import bgImage from "../assets/hero.jpg";
import overlayImage from "../assets/overlay.jpg";
import serviceBg from "../assets/bg.webp";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  const img = new Image();
  img.src = serviceBg;
}, []);


  return (
    <div className="relative pt-20 overflow-x-hidden">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#010512D9] backdrop-blur-md shadow-md"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        <Navbar />
      </div>

      {/* 👇 Background + Overlay spanning Hero + About */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute top-0 left-0 w-full object-contain z-0 object-top"
        style={{ height: "170vh" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent md:h-1/5 h-1/6"></div>
      <img
        src={overlayImage}
        alt="Overlay"
        className="absolute top-0 left-0 w-full md:w-[500%] object-fill z-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{ height: "190vh" }}
      />

      {/* Page Sections */}
      <Hero />
      <AboutSection />

      {/* ✅ Combined Background for Services + Products */}
  <section className="relative w-full z-0 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-70 z-0 top-1/3"
      style={{ backgroundImage: `url(${serviceBg})` }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#00041F]/40 to-transparent z-0 top-1/3"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#00041F]/40 to-transparent z-0 bottom-0"></div>

    <div className="relative z-10">
      <Services />
      <Products />
    </div>
  </section>


      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
