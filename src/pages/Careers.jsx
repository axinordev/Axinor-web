import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import topBg from "../assets/bg_career.png";
import bottomBg from "../assets/overlay.jpg";
import Footer from "../components/Footer";
import serviceImg from "../assets/service.jpg";
import Nav from "../components/Nav";
import { ArrowRight } from "lucide-react";

// Active Jobs
const activeJobs = [
  {
    title: "UI/UX Designer",
    desc: "Learn how to create intuitive and visually appealing digital interfaces. This course covers user research, wireframing, prototyping, and usability testing using tools like Figma and Adobe XD.",
    date: "25 - 10 - 2025",
  },
  {
    title: "Flutter Developer",
    desc: "Build beautiful cross-platform mobile apps using Flutter and Dart. Master UI design, state management, Firebase integration, and deployment for both Android and iOS.",
    date: "22 - 10 - 2025",
  },
  {
    title: "Cyber Security",
    desc: "Gain practical knowledge in protecting networks, systems, and data from cyber threats. Learn ethical hacking, encryption, and incident response with hands-on labs and case studies.",
    date: "18 - 10 - 2025",
  },
  {
    title: "Back-end Developer",
    desc: "Develop robust server-side applications using Node.js, Express, and MongoDB. Understand RESTful APIs, authentication, and database management to power modern web applications.",
    date: "15 - 10 - 2025",
  },
  {
    title: "AI & Machine Learning",
    desc: "Master the foundations of Artificial Intelligence and Machine Learning using Python. Learn algorithms, neural networks, and real-world applications in image and text analysis.",
    date: "10 - 10 - 2025",
  },
  {
    title: "Front-End Developer",
    desc: "Learn to build responsive and interactive websites using HTML, CSS, JavaScript, and React. Get hands-on experience in UI design, animations, and API integration.",
    date: "05 - 10 - 2025",
  },
];

// Expired Jobs
const expiredJobs = [
  { title: "React Developer", desc: "The application window for this role is closed. Keep an eye on new opportunities.", date: "10 - 09 - 2025" },
  { title: "Data Analyst Intern", desc: "The application window for this role is closed. Keep an eye on new opportunities.", date: "20 - 09 - 2025" },
  { title: "DevOps Engineer", desc: "The application window for this role is closed. Keep an eye on new opportunities.", date: "01 - 09 - 2025" },
];

const Careers = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [filter, setFilter] = useState("active");
  const [expandedCard, setExpandedCard] = useState(null); // overlay above card

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  if (showForm || expandedCard !== null) {
    document.body.style.overflow = "hidden"; // stop background scroll
  } else {
    document.body.style.overflow = "auto"; // enable again
  }

  return () => {
    document.body.style.overflow = "auto"; // cleanup
  };
}, [showForm, expandedCard]);


  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedJob("");
  };

  const displayedJobs = filter === "active" ? activeJobs : expiredJobs;

  return (
    <div className="relative min-h-screen text-white overflow-hidden md:pt-20">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#010512D9] backdrop-blur-md shadow-md"
            : "bg-[#010512D9]"
        }`}
      >
        <Nav />
      </div>

      {/* Backgrounds */}
      <div
        className="absolute top-4 md:top-0 left-0 w-full md:h-2/5 h-1/5 bg-contain bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${topBg})` }}
      ></div>

      <div
        className="absolute md:bottom-96 bottom-1/4 left-0 w-full md:h-1/4 h-1/3 bg-cover opacity-30 my-14"
        style={{ backgroundImage: `url(${bottomBg})` }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-[50px] md:text-[100px] font-extrabold mb-20 mt-6">
          Careers
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-6 mb-16 md:mt-24 -mt-10">
          <button
            onClick={() => setFilter("active")}
            className={`px-8 py-2 rounded-full transition ${
              filter === "active"
                ? "bg-[#194EFF] text-white"
                : "text-[#194EFF] border border-[#194EFF] bg-transparent backdrop-blur-md hover:bg-blue-200"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("expired")}
            className={`px-8 py-2 rounded-full transition ${
              filter === "expired"
                ? "bg-[#194EFF] text-white"
                : "text-[#194EFF] border border-[#194EFF] bg-transparent backdrop-blur-md hover:bg-blue-200"
            }`}
          >
            Expired
          </button>
        </div>

        {/* Job Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {displayedJobs.map((job, i) => (
            <div
              key={i}
              className="relative rounded-[35px] h-[360px] md:h-[380px] md:w-[380px] overflow-hidden p-3 border-[1px] border-[#001FD8] backdrop-blur-md hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300"
            >
              {/* Background layers */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#194EFF] to-[#00041F]"></div>
              <img
                src={serviceImg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex flex-row">
                    <div className="w-1.5 h-[52px] rounded-full bg-[#3564ff] mt-4 -ml-3"></div>
                    <h3 className="text-[24px] font-semibold mb-4 m-2 pt-3 text-left tracking-wider px-2">
                      {job.title}
                    </h3>
                  </div>

                  {/* Description limit */}
                  <p className="text-gray-300 md:text-lg text-base leading-relaxed m-2 font-thin line-clamp-3">
                    {job.desc}
                  </p>

                  {/* Arrow Button instead of Read More */}
                  {job.desc.length > 130 && (
                    <button
                      onClick={() =>
                        setExpandedCard(expandedCard === i ? null : i)
                      }
                      className="text-blue-400 mt-1 ml-60 hover:scale-110 transition-transform"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  )}

                  {/* Posted Date */}
                  <p className="text-gray-400 text-sm ml-2 mt-3">
                    <span className="font-medium text-gray-300">Posted Date:</span>{" "}
                    {job.date}
                  </p>
                </div>

                {/* Apply Button */}
                {filter === "active" && (
                  <div className="m-2 p-1">
                    <button
                      onClick={() => handleApplyClick(job.title)}
                      className="bg-blue-600 text-white px-6 py-2 w-full rounded-full hover:bg-blue-700 transition"
                    >
                      Apply Now
                    </button>
                  </div>
                )}

                {filter === "expired" && (
                  <div className="m-2 p-1">
                    <button
                      disabled
                      className="bg-gray-700 text-gray-300 px-6 py-2 w-full rounded-full cursor-not-allowed"
                    >
                      Closed
                    </button>
                  </div>
                )}
              </div>

              {/* Overlay directly above card */}
              {expandedCard === i && (
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md rounded-[35px] z-20 p-6 flex flex-col justify-center transition-all duration-300">
                  <h3 className="text-2xl font-semibold mb-3">{job.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 italic">
                    Posted Date: {job.date}
                  </p>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed overflow-y-auto scrollbar-hide">
                    {job.desc}
                  </p>
                  <button
                    onClick={() => setExpandedCard(null)}
                    className="absolute top-4 right-4 text-white text-lg hover:text-red-400"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Apply Form */}
{showForm && (
  <div className="fixed inset-0 z-50 bg-[#00000099] flex justify-center items-center overflow-hidden">
    <div className="relative bg-[#0000003D] backdrop-blur-2xl my-8 border border-blue-700 rounded-[35px] py-4 w-full sm:w-[90%] max-w-4xl h-5/6 shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all duration-300 ease-out overflow-y-auto scrollbar-hide p-6 md:p-10">
      
      {/* Close Button */}
      <button
        onClick={closeForm}
        className="absolute top-6 right-8 text-white font-semibold text-xl hover:text-red-500 z-50"
      >
        ✕
      </button>

      {/* Heading */}
      <h2 className="text-2xl md:text-[46px] font-bold text-center mb-2 leading-snug mt-10">
        Fill the Details
      </h2>
      <p className="text-center text-white mb-8 text-sm md:text-xl">
        Fill the details below
      </p>

      {/* Form */}
      <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left pb-10">
        <div>
          <label className="block mb-2 text-sm">Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Mobile Number</label>
          <input
            type="text"
            placeholder="Enter Your Mobile Number"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Qualification</label>
          <input
            type="text"
            placeholder="Enter Your Qualification"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Location</label>
          <select className="w-full px-4 py-2 rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none">
            <option value="" className="bg-[#010512]">Select Location</option>
            <option value="Trivandrum" className="bg-[#010512]">Trivandrum</option>
            <option value="Kochi" className="bg-[#010512]">Kochi</option>
            <option value="Bangalore" className="bg-[#010512]">Bangalore</option>
            <option value="Chennai" className="bg-[#010512]">Chennai</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm">Experience</label>
          <select className="w-full px-4 py-2 rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none">
            <option value="" className="bg-[#010512]">Select Experience</option>
            <option value="Fresher" className="bg-[#010512]">Fresher</option>
            <option value="0-1 years" className="bg-[#010512]">0-1 years</option>
            <option value="1-3 years" className="bg-[#010512]">1-3 years</option>
            <option value="3+ years" className="bg-[#010512]">3+ years</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm">Resume</label>
          <input
            type="file"
            className="w-full text-sm text-gray-400 border border-[#FFFFFF73] rounded-md cursor-pointer file:bg-blue-700 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-md"
          />
          <p className="text-xs text-gray-500 mt-1">
            File must be PDF or image
          </p>
        </div>

        <div>
          <label className="block mb-2 text-sm">LinkedIn</label>
          <input
            type="text"
            placeholder="Enter LinkedIn Profile Link"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Portfolio</label>
          <input
            type="text"
            placeholder="Enter Portfolio Link"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none"
          />
        </div>

        <div className="sm:col-span-2 md:col-span-3">
          <label className="block mb-2 text-sm">Open Space For You</label>
          <textarea
            placeholder="Whether it’s a personal note, career goals, or something we didn’t ask—this is your space to share."
            rows={3}
            className="w-full px-4 py-2 rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none"
          ></textarea>
        </div>

        <div className="col-span-full text-center mt-6">
          <button
            type="submit"
            className="px-12 py-3 bg-[#194EFF] text-white rounded-full hover:bg-blue-700 transition"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      <Footer />
    </div>
  );
};

export default Careers;
