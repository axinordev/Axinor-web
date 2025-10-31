import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import topBg from "../assets/bg_career.png";
import bottomBg from "../assets/career.png";
import Footer from "../components/Footer";
import serviceImg from "../assets/service.jpg";
import Nav from "../components/Nav";
import { ArrowRight, ChevronDown } from "lucide-react";
 // ✅ for custom scrollbar

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
  {
    title: "React Developer",
    desc: "The application window for this role is closed. Keep an eye on new opportunities.",
    date: "10 - 09 - 2025",
  },
  {
    title: "Data Analyst Intern",
    desc: "The application window for this role is closed. Keep an eye on new opportunities.",
    date: "20 - 09 - 2025",
  },
  {
    title: "DevOps Engineer",
    desc: "The application window for this role is closed. Keep an eye on new opportunities.",
    date: "01 - 09 - 2025",
  },
  {
    title: "React Developer",
    desc: "The application window for this role is closed. Keep an eye on new opportunities.",
    date: "10 - 09 - 2025",
  },
  {
    title: "Data Analyst Intern",
    desc: "The application window for this role is closed. Keep an eye on new opportunities.",
    date: "20 - 09 - 2025",
  },
  {
    title: "DevOps Engineer",
    desc: "The application window for this role is closed. Keep an eye on new opportunities.",
    date: "01 - 09 - 2025",
  }
];

const Careers = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [filter, setFilter] = useState("active");
  const [expandedCard, setExpandedCard] = useState(null);

  // Navbar Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll only for form
  useEffect(() => {
    if (showForm) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showForm]);

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
    <div className="relative min-h-screen text-white overflow-hidden md:pt-20 custom-scroll">
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
        className="absolute md:bottom-[388px] bottom-1/4 left-0 w-full md:h-1/2 h-1/3 bg-cover object-top opacity-70 my-14"
        style={{ backgroundImage: `url(${bottomBg})` }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-[50px] md:text-[100px] font-extrabold mb-20 mt-6">
          Careers
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-6 mb-16 md:mt-24 -mt-10">
          {["active", "expired"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-8 py-2 rounded-full transition ${
                filter === type
                  ? "bg-[#194EFF] text-white"
                  : "text-[#194EFF] border border-[#194EFF] bg-transparent backdrop-blur-md hover:bg-blue-200"
              }`}
            >
              {type === "active" ? "Active" : "Expired"}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {displayedJobs.map((job, i) => (
            <div
              key={i}
              className="relative rounded-[35px] h-[360px] md:h-[380px] md:w-[380px] overflow-hidden p-3 border border-[#001FD8] backdrop-blur-md hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all duration-300"
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

                  {/* Arrow Button */}
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
                  <p className="text-gray-400 text-base md:text-lg ml-2 mt-3">
                    <span className="font-medium text-gray-300 text-base md:text-lg">
                      Posted Date:
                    </span>{" "}
                    {job.date}
                  </p>
                </div>

                {/* Apply Button */}
                {filter === "active" ? (
                  <div className="m-2 p-1">
                    <button
                      onClick={() => handleApplyClick(job.title)}
                      className="bg-blue-600 text-white px-6 py-2 w-full rounded-full hover:bg-blue-700 transition"
                    >
                      Apply Now
                    </button>
                  </div>
                ) : (
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
                <div className="absolute inset-0 bg-black/90 backdrop-blur-md rounded-[35px] z-20 p-6 flex flex-col justify-center transition-all duration-300 overflow-y-auto custom-scroll">
                  <h3 className="text-2xl font-semibold mb-3">{job.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 italic">
                    Posted Date: {job.date}
                  </p>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
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
          <div className="relative bg-[#0000003D] backdrop-blur-2xl my-8 border border-blue-700 rounded-[35px] py-4 w-full sm:w-[90%] max-w-4xl h-[95%] shadow-[0_0_25px_rgba(56,189,248,0.3)] transition-all duration-300 ease-out overflow-y-auto scrollbar-hide p-6 md:p-10">
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-6 right-8 text-white font-semibold text-xl hover:text-red-500 z-50"
            >
              ✕
            </button>

            <h2 className="text-2xl md:text-[46px] font-bold text-center mb-2 leading-snug mt-10">
              Fill the Details
            </h2>
            <p className="text-center text-white mb-8 text-sm md:text-xl">
              Fill the details below
            </p>

            {/* Form */}
            <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left pb-10 relative">
              {/* Inputs */}
              {[
                { label: "Full Name", type: "text", placeholder: "Enter Your Full Name" },
                { label: "Mobile Number", type: "text", placeholder: "Enter Your Mobile Number" },
                { label: "Email Address", type: "email", placeholder: "Enter Your Email" },
                { label: "Qualification", type: "text", placeholder: "Enter Your Qualification" },
              ].map((input, idx) => (
                <div key={idx}>
                  <label className="block mb-2 text-sm">{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    className="w-full px-4 py-2 rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none text-sm"
                  />
                </div>
              ))}

              {/* Location */}
              <div className="relative">
                <label className="block mb-2 text-sm">Location</label>
                <select className="w-full appearance-none px-4 py-2 text-sm rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none pr-10">
                  <option value="" className="bg-[#010512] ">
                    Select Location
                  </option>
                  <option value="Trivandrum" className="bg-[#010512]">
                    Trivandrum
                  </option>
                  <option value="Kochi" className="bg-[#010512]">
                    Kochi
                  </option>
                  <option value="Bangalore" className="bg-[#010512]">
                    Bangalore
                  </option>
                  <option value="Chennai" className="bg-[#010512]">
                    Chennai
                  </option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-9 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>

              {/* Experience */}
              <div className="relative">
                <label className="block mb-2 text-sm">Experience</label>
                <select className="w-full appearance-none px-4 py-2 text-sm rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none pr-10">
                  <option value="" className="bg-[#010512]">
                    Select Experience
                  </option>
                  <option value="Fresher" className="bg-[#010512]">
                    Fresher
                  </option>
                  <option value="0-1 years" className="bg-[#010512]">
                    0-1 years
                  </option>
                  <option value="1-3 years" className="bg-[#010512]">
                    1-3 years
                  </option>
                  <option value="3+ years" className="bg-[#010512]">
                    3+ years
                  </option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-9 text-gray-400 pointer-events-none"
                  size={18}
                />
              </div>

              {/* Resume */}
              <div>
                <label className="block mb-2 text-sm text-white">Resume</label>
                <div className="relative flex items-center w-full rounded-md overflow-hidden border border-[#FFFFFF73] ">
                  <input
                    type="text"
                    readOnly
                    placeholder="Upload Resume"
                    className="flex-1 pl-3 py-2 text-sm text-gray-300 bg-transparent outline-none"
                  />
                  <label className="bg-[#787F98] text-white text-xs px-2.5 py-2.5 cursor-pointer rounded-r-md hover:bg-[#535869] transition">
                    Browse Files
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const fileInput = e.target;
                        const textInput = fileInput.parentElement.previousSibling;
                        if (fileInput.files.length > 0) {
                          textInput.value = fileInput.files[0].name;
                        } else {
                          textInput.value = "";
                        }
                      }}
                    />
                  </label>
                </div>
                <p className="text-[11px] text-[#FFFFFF6E] mt-1">
                  File must be PDF or image
                </p>
              </div>


              {/* LinkedIn + Portfolio */}
              {[
                { label: "LinkedIn", placeholder: "Enter LinkedIn Profile Link" },
                { label: "Portfolio", placeholder: "Enter Portfolio Link" },
              ].map((input, idx) => (
                <div key={idx}>
                  <label className="block mb-2 text-sm">{input.label}</label>
                  <input
                    type="text"
                    placeholder={input.placeholder}
                    className="w-full px-4 py-2 text-sm rounded-md bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none"
                  />
                </div>
              ))}

              {/* Open Space */}
              <div className="sm:col-span-2 md:col-span-3">
                <label className="block mb-2 text-sm">Open Space For You</label>
                <textarea
                  placeholder="Whether it’s a personal note, career goals, or something we didn’t ask—this is your space to share."
                  rows={3}
                  className="w-full px-4 py-2 rounded-md text-sm text-[#FFFFFF6E] bg-transparent border border-[#FFFFFF73] focus:border-blue-500 outline-none"
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
