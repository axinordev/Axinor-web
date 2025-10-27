import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import topBg from "../assets/portfolio.png";
import bottomBg from "../assets/overlay.jpg";
import Footer from "../components/Footer";

// 💡 Import your card images (replace these with actual image names in /assets)
import img1 from "../assets/card.jpg";
import img2 from "../assets/card.jpg";
import img3 from "../assets/card.jpg";
import img4 from "../assets/card.jpg";
import img5 from "../assets/card.jpg";
import img6 from "../assets/card.jpg";
import Nav from "../components/Nav";

const projects = [
  {
    title: "Insurva",
    desc: "A modern insurance management system with AI-based claim tracking and analytics.",
    img: img1,
  },
  {
    title: "MediLink",
    desc: "A cloud-based telemedicine platform connecting patients and doctors globally.",
    img: img2,
  },
  {
    title: "EduSmart",
    desc: "An intelligent learning management system powered by adaptive AI recommendations.",
    img: img3,
  },
  {
    title: "TaskSphere",
    desc: "Collaborative productivity dashboard with real-time progress visualization.",
    img: img4,
  },
  {
    title: "AxinoPay",
    desc: "A secure fintech solution offering instant payments and multi-currency wallets.",
    img: img5,
  },
  {
    title: "AgriTech AI",
    desc: "Smart agriculture platform for predictive yield analytics and IoT-based field monitoring.",
    img: img6,
  },
];

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden md:pt-20">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#010512D9] backdrop-blur-md shadow-md"
            : "bg-[#010512D9] backdrop-blur-0"
        }`}
      >
        <Nav />
      </div>

      {/* Backgrounds */}
      <div
        className="absolute top-4 md:top-0 left-0 w-full md:h-[687px] h-1/6 bg-cover bg-top bg-no-repeat object-top"
        style={{ backgroundImage: `url(${topBg})` }}
      ></div>

      <div
        className="absolute md:bottom-96 bottom-1/4 left-0 w-full md:h-1/4 h-1/3 bg-cover md:bg-contain bg-center opacity-30 my-14"
        style={{ backgroundImage: `url(${bottomBg})` }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-[50px] md:text-[100px] font-extrabold mb-20 md:pb-40 pb-10 md:mt-10 mt-20 tracking-wider">
          Our Portfolio
        </h1>

        {/* Portfolio Cards */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto my-20">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative rounded-[30px] overflow-hidden bg-[#55555547] border border-[#010e55ad] hover:border-[#194fff6c] transition-all duration-300 hover:shadow-[0_0_20px_rgba(25,78,255,0.4)] group"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-2/3 p-4 object-cover rounded-[35px] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010512] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Info Section */}
              <div className="backdrop-blur-xl bg-[#010512]/60 rounded-b-[30px] p-6 text-left">
                <h3 className="text-[22px] font-semibold text-white mb-2 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
