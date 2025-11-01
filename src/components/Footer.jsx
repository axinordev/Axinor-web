import React from "react";
import logo from "../assets/logo2.svg";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TbRectangleVerticalFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer
      className="text-white pt-12 pb-6 px-6 md:px-12"
      style={{
        background:
          "linear-gradient(90deg, #000B55 0%, #001072 40%, #00169B 70%, #001FD8 100%)",
      }}
    >
      <div className=" mx-auto grid grid-cols-1 md:grig-cols-2 lg:grid-cols-3 gap-8 border-b border-[#0036F0]/30 pb-10">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-start -pr-4 md:w-[100%] text-justify">
          <img
            src={logo}
            alt="AXINOR Technologies"
            className="w-72 h-auto object-contain mb-6 md:-ml-6"
          />
          <p className="text-sm md:text-lg font-extralight text-gray-200 leading-relaxed pl-2">
            AXINOR blends creativity, strategy, and technology to craft impactful
            solutions that help brands grow and connect with their audience.
          </p>
        </div>

        {/* Middle Section - Important Links */}
        <div className="grid grid-cols-2 md:grid-cols-2  gap-x-6 md:ml-6">
          <div>
            <h3 className="text-white md:text-[20px] md:tracking-wide font-medium mb-6">
              Important Links
            </h3>
            <ul className="space-y-6 md:text-lg text-gray-300">
              {[
                { name: "Home", link: "#" },
                { name: "About Us", link: "#About" },
                { name: "Services", link: "#services" },
                { name: "Projects", link: "#projects" },
              ].map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <TbRectangleVerticalFilled className="text-white w-4 h-5" />
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="opacity-0 mb-6 select-none mt-1">Placeholder</h3>
            <ul className="space-y-6 md:text-lg text-gray-300 -ml-16 md:-ml-8 md:-mr-10">
              {[
                "Design & Development",
                "Research & Innovation",
                "Consulting & Marketing",
                "Internships & Workshops",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 hover:text-white transition"
                >
                  <TbRectangleVerticalFilled className="text-white w-4 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Info */}
        <div className="md:ml-10 mr-12">
          <h3 className="text-white md:text-[20px] md:tracking-wide font-medium mb-6">Contact Us</h3>
          <ul className="space-y-5 text-gray-300 ">
            <li className="flex items-start gap-3 border-b border-t border-[#194EFF] pb-4 pt-3 md:text-lg">
              <IoMdMail className="text-white w-6 h-6" />
              <span>aixinortechnologies@gmail.com</span>
            </li>
            <li className="flex items-start gap-3 border-b border-[#194EFF] pb-4 md:text-lg">
              <FaPhoneAlt className="text-white mt-1 w-5 h-5" />
              <span className="tracking-tighter">+91 97465 77647, +91 94461 86026</span>
            </li>
            <li className="flex items-start gap-3 md:text-lg">
              <FaLocationDot className="text-white mt-1 w-10 h-10" />
              <span className="text-sm md:text-lg leading-relaxed ">
                HiLITE Business Park - Tower 2, 7th floor (MPM-X205), Poovangal,
                Kozhikode, Pantheerankavu, Kerala 673014
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-6 text-white text-sm md:text-lg">
        Copyright ©2025 All rights reserved |{" "}
        <span className=" text-white">AXINOR TECHNOLOGIES</span>
      </div>
    </footer>
  );
}
