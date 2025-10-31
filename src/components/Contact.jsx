import React from "react";
import phoneIcon from "../assets/icons/contact.svg";
import emailIcon from "../assets/icons/email.svg";
import locationIcon from "../assets/icons/location.svg";
import bgImg from "../assets/contactBg.png"
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section 
    className="w-full bg-transparent text-white flex flex-col items-center py-16 px-6 "
    style={{
        backgroundImage:`url(${bgImg})`,

    }}
    id="contact"
    >
      
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-[#194EFF] text-lg font-medium mb-6 mt-10">CONTACT US</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-10">We’re Here to Help</h2>
      </div>

      {/* Form + Map */}
      <div className="w-full max-w-5xl bg-[#0B112A] rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        {/* Left: Contact Form */}
        <div className="p-8 md:p-10 flex flex-col justify-center px-8">
          <h3 className="text-2xl font-semibold mb-3 tracking-wide px-8">Let's connect with us</h3>
          <p className="text-base text-white mb-6 font-thin px-8">
            Let’s align our constellation! Reach out and let the magic of collaboration illuminate our skies.
          </p>

          <form className="space-y-4 px-8">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 bg-[#141C2F] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 bg-[#141C2F] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#141C2F] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[#141C2F] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-[#141C2F] border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            ></textarea>

            <button
            type="submit"
             className="flex items-center justify-center gap-3 bg-[#194EFF] hover:bg-gradient-to-r from-[#4D8FFF] to-[#3A63FF] px-4 py-3 hover:px-6 rounded-full text-white text-lg font-medium hover:scale-105 transition transform">
            Send Message
            <ArrowRight className="bg-white text-blue-600 rounded-full p-1 w-7 h-7" />
          </button>
          </form>
          </div>

          {/* Right: Map */}
          <div className="relative w-full h-96 md:h-auto px-6 py-7">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.1892559963344!2d75.83090097402366!3d11.247484050330423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b2adf0f23a7%3A0xeaa072a82e5d541e!2sHiLITE%20Business%20Park%20-%20Tower%202!5e0!3m2!1sen!2sin!4v1761559247154!5m2!1sen!2sin"
              width="100%"
              height="100%"
               style={{
                filter: "invert(90%) hue-rotate(180deg) contrast(1.05) brightness(0.9)",
                border: "none",
                borderRadius: "1rem",

              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl border-0"
            ></iframe>
          </div>

      </div>

      {/* Contact Info */}
      <div className="mt-10 w-full max-w-5xl flex flex-col md:flex-row justify-between items-center bg-[#0B112A] p-4 rounded-xl">
        <div className="flex items-center md:gap-3 gap-5 md:border md:border-r-[#001FD8] border-transparent px-8">
          <img src={phoneIcon} alt="Phone" className="" />
          <div className="mt-2 md:mt-0">
            <p className="font-medium text-[#194EFF] md:text-xl text-sm">Call</p>
            <p className="text-gray-400 md:text-sm text-xs">+91 97465 77647</p>
            <p className="text-gray-400 md:text-sm text-xs">+91 94461 86026</p>
          </div>
        </div>

        <div className="flex items-center gap-3 md:border md:border-r-[#001FD8] border-transparent px-8">
          <img src={emailIcon} alt="Email" className="" />
          <div>
            <p className="font-medium text-[#194EFF] md:text-xl text-sm md:mt-1 mt-3">Email</p>
            <p className="text-gray-400 md:text-sm text-xs">aixinortechnologies@gmail.com</p>
            <br />
          </div>
        </div>

        <div className="flex items-center gap-3 px-8">
          <img src={locationIcon} alt="Location" className="" />
          <div>
            <p className="font-medium text-[#194EFF] md:text-xl text-sm md:mt-1 mt-3">Location</p>
            <p className="text-gray-400 md:text-sm text-xs">HiLITE Business Park, Kozhikode, Kerala, India</p>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}
