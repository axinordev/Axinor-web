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
          "linear-gradient(90deg, #001072, #001072, #00169B,#00169B, #001FD8, #001FD8)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-[#001FD8] pb-8">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="AXINOR Technologies"
            className="w-64 h-auto object-contain mb-4 -ml-4"
          />
          <p className="text-base text-white leading-relaxed px-2">
            AXINOR blends creativity, strategy, and technology to craft impactful
            solutions that help brands grow and connect with their audience.
          </p>
        </div>

        {/* Middle Section - Important Links */}
        <div className="grid grid-cols-2 gap-x-6">
          <div className="col-span-2">
            <h3 className="font-semibold  text-white text-xl tracking-wider mb-8 md:mb-4 ">
              Important Links
            </h3>
          </div>

          <div>
            <ul className="space-y-3 text-base -mt-5 text-gray-200">
              {["Home", "About Us", "Services", "Projects"].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <TbRectangleVerticalFilled className="w-3 h-3 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="space-y-3 text-base -mt-5 -ml-5 text-gray-200">
              {[
                "Design & Development",
                "Research & Innovation",
                "Consulting & Marketing",
                "Internships & Workshops",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition flex items-center gap-2"
                >
                  <TbRectangleVerticalFilled className="w-3 h-3 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 text-white text-lg ">Contact Us</h3>
          <ul className="space-y-4 text-base text-gray-200">
            <li className="flex items-start gap-3 border-b border-[#194EFF] py-3">
              <IoMdMail className="w-5 h-5 mt-1 text-white" />
              <span>aixinortechnologies@gmail.com</span>
            </li>
            <li className="flex items-start gap-3 border-b border-[#194EFF] py-3">
              <FaPhoneAlt className="w-5 h-5 mt-1 text-white" />
              <span>+91 97465 77647, +91 94461 86026</span>
            </li>
            <li className="flex items-start gap-3 py-3 pr-10">
              <FaLocationDot className="w-6 h-6 mt-1 text-white" />
              <span className="text-base">
                HiLITE Business Park - Tower 2, 7th floor (MPM-X205), Poovangal,
                Kozhikode, Pantheerankavu, Kerala 673014
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center mt-6 text-base text-gray-200">
        Copyright ©2025 All rights reserved |{" "}
        <span className="font-medium">AXINOR TECHNOLOGIES</span>
      </div>
    </footer>
  );
}
