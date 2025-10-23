import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import topBg from "../assets/bg_career.png"; // top image
import bottomBg from "../assets/overlay.jpg"; // bottom image
import Footer from "../components/Footer";
import serviceImg from "../assets/service.jpg"

const jobs = [
  { title: "UI/UX Designer", desc: "Lorem ipsum dolor sit amet consectetur. At gravida urna purus massa in. Quam egestas justo cras egestas diam lobortis. Auctor dui suspendisse turpis integer. Orci commodo duis nisl integer vestibulum sit. Turpis leo volutpat mauris suspendisse risus." },
  { title: "Flutter Developer", desc: "Lorem ipsum dolor sit amet consectetur. At gravida urna purus massa in. Quam egestas justo cras egestas diam lobortis. Auctor dui suspendisse turpis integer. Orci commodo duis nisl integer vestibulum sit. Turpis leo volutpat mauris suspendisse risus." },
  { title: "Cyber Security", desc: "Lorem ipsum dolor sit amet consectetur. At gravida urna purus massa in. Quam egestas justo cras egestas diam lobortis. Auctor dui suspendisse turpis integer. Orci commodo duis nisl integer vestibulum sit. Turpis leo volutpat mauris suspendisse risus." },
  { title: "Back-end Developer", desc: "Lorem ipsum dolor sit amet consectetur. At gravida urna purus massa in. Quam egestas justo cras egestas diam lobortis. Auctor dui suspendisse turpis integer. Orci commodo duis nisl integer vestibulum sit. Turpis leo volutpat mauris suspendisse risus." },
  { title: "UI/UX Designer", desc: "Lorem ipsum dolor sit amet consectetur. At gravida urna purus massa in. Quam egestas justo cras egestas diam lobortis. Auctor dui suspendisse turpis integer. Orci commodo duis nisl integer vestibulum sit. Turpis leo volutpat mauris suspendisse risus." },
  { title: "Full Stack Developer", desc: "Lorem ipsum dolor sit amet consectetur. At gravida urna purus massa in. Quam egestas justo cras egestas diam lobortis. Auctor dui suspendisse turpis integer. Orci commodo duis nisl integer vestibulum sit. Turpis leo volutpat mauris suspendisse risus." },
  { title: "UI/UX Designer", desc: "Lorem ipsum dolor sit amet consectetur. At gravida urna purus massa in. Quam egestas justo cras egestas diam lobortis. Auctor dui suspendisse turpis integer. Orci commodo duis nisl integer vestibulum sit. Turpis leo volutpat mauris suspendisse risus." },
  { title: "UI/UX Engineer", desc: "Lorem ipsum dolor sit amet consectetur. At gravida urna purus massa in. Quam egestas justo cras egestas diam lobortis. Auctor dui suspendisse turpis integer. Orci commodo duis nisl integer vestibulum sit. Turpis leo volutpat mauris suspendisse risus." },
  { title: "BI/UX Designer", desc: "Lorem ipsum dolor sit amet consectetur. At gravida urna purus massa in. Quam egestas justo cras egestas diam lobortis. Auctor dui suspendisse turpis integer. Orci commodo duis nisl integer vestibulum sit. Turpis leo volutpat mauris suspendisse risus." },
];

const Careers = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden md:pt-20">
      {/* ✅ Fixed Navbar with dynamic background */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#010512D9] backdrop-blur-md shadow-md"
            : "bg-[#010512D9] backdrop-blur-0"
        }`}
      >
        <Navbar />
      </div>

      {/* 🔹 Background Images */}
      <div
        className="absolute top-4 md:top-0 left-0 w-full md:h-2/5 h-1/5 bg-contain bg-top bg-no-repeat object-top "
        style={{ backgroundImage: `url(${topBg})` }}
      ></div>

      <div
        className="absolute md:bottom-96 bottom-1/4 left-0 w-full md:h-1/4 h-1/3 bg-cover md:bg-contain bg-center opacity-30 my-14"
        style={{ backgroundImage: `url(${bottomBg})` }}
      ></div>

      {/* Overlay for blending */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* 🔹 Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-[50px] md:text-[100px] font-extrabold mb-20 mt-6">Careers</h1>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-16 md:mt-24 -mt-10">
          <button className="px-8 py-2 bg-[#194EFF] rounded-full hover:bg-blue-900 transition">
            Active
          </button>
          <button className="text-[#194EFF] px-8 py-2 bg-transparent border border-[#194EFF] rounded-full hover:bg-blue-200 transition">
            Expired
          </button>
        </div>

        {/* Job Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
  {jobs.map((job, i) => (
    <div
      key={i}
      className="relative rounded-[35px] h-96 md:h-[380px] md:w-[380px] overflow-hidden p-3 border-[1px] border-[#001FD8] backdrop-blur-md hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#194EFF] to-[#00041F]"></div>

      {/* Optional overlay image (like service cards) */}
      <img
        src={serviceImg} // fallback if no image
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Icon Placeholder */}
          {/* {job.icon && (
            <div className="bg-white rounded-[12px] flex items-center justify-center w-14 h-14 m-3 mb-4 shadow-lg">
              <img src={job.icon} alt="icon" className="w-10 h-10 object-contain" />
            </div>
          )} */}

          <h3 className="text-[24px] font-semibold mb-4 m-2 pt-3 text-left tracking-wider px-2">
            {job.title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed m-2 font-thin">
            {job.desc}
          </p>
        </div>

        <div className="m-2 p-1">
          <button className="bg-blue-600 text-white px-6 py-2 w-full rounded-full hover:bg-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>

      <Footer />
    </div>
  );
};

export default Careers;
