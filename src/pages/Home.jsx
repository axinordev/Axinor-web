import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutUs";
import Services from "../components/Services";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Works from "../components/Works";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative pt-20">
      {/* 👇 This wrapper controls the navbar background */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled
      ? "bg-[#010512D9] backdrop-blur-md shadow-md"
      : "bg-transparent backdrop-blur-0"
  }`}
      >
        <Navbar />
      </div>

      {/* Page sections */}
      <Hero />
      <AboutSection />
      <Services />
      <Products />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
