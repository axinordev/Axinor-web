import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // close mobile menu when a link is clicked
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "Services" },
    { name: "About Us", id: "About" },
    { name: "Portfolio", id: "Portfolio" },
    { name: "Careers", id: "Careers" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 pt-3 w-full">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="md:h-20 h-16 w-auto md:ml-6 ml-0"
        />
      </div>

      {/* Center: Nav Links (desktop only) */}
      <div className="hidden md:flex bg-[#2D2D2D87] text-lg rounded-full px-2 py-2 space-x-10 shadow-sm">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => handleLinkClick(link.id)}
            className={`text-white font-medium transition px-4 py-2 rounded-full ${
              activeLink === link.id
                ? "bg-[#4B4B4E5E] border border-[#5D5D5D]"
                : "bg-transparent hover:bg-[#4B4B4E5E] hover:text-gray-300"
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right: Contact button (desktop) */}
      <div className="hidden md:block mr-10">
        <button
          data-ripple-light="true"
          className="bg-[#194EFF] text-white text-lg px-8 py-3 rounded-full hover:bg-[#0d2b8f] transition-all shadow-md hover:shadow-lg"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-white"
        onClick={toggleMenu}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4 md:hidden z-50 rounded-b-2xl">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`font-medium transition px-4 py-2 rounded-full bg-transparent ${
                activeLink === link.id
                  ? "text-[#194EFF] bg-transparent"
                  : "text-gray-700 hover:text-[#194EFF]"
              }`}
            >
              {link.name}
            </a>
          ))}

          <button className="bg-[#194EFF] text-white px-6 py-2 rounded-full hover:bg-[#0d2b8f] transition mt-4">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
