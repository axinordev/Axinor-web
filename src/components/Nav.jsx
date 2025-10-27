import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);

    // If we are not on the home page
    if (location.pathname !== "/") {
      // Navigate to home first
      navigate("/");

      // Wait for the page to load, then scroll
      setTimeout(() => {
        if (link !== "Home") scrollToSection(link);
      }, 500); // adjust delay if needed
    } else {
      // If already on home page, scroll directly
      if (link === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        scrollToSection(link);
      }
    }

    // Handle page routes
    if (link === "Portfolio") {
      navigate("/portfolio");
    } else if (link === "Careers") {
      navigate("/career");
    }
  };

  const links = [
    { name: "Home", id: "Home" },
    { name: "Services", id: "services" },
    { name: "About Us", id: "About" },
    { name: "Portfolio", id: "Portfolio" },
    { name: "Careers", id: "Careers" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 pt-3 w-full">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <img
          src={logo}
          alt="Logo"
          className="md:h-20 h-16 w-auto md:ml-6 ml-0"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex bg-[#2D2D2D87] text-lg rounded-full px-2 py-2 space-x-10 shadow-sm">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleLinkClick(link.id)}
            className={`text-white font-medium transition px-4 py-2 rounded-full ${
              activeLink === link.id
                ? "bg-[#4B4B4E5E] border border-[#5D5D5D]"
                : "bg-transparent hover:bg-[#4B4B4E5E] hover:text-gray-300"
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Contact Button */}
      <div className="hidden md:block mr-10">
        <button
          onClick={() => handleLinkClick("contact")}
          className="bg-[#194EFF] text-white text-lg px-8 py-3 rounded-full hover:bg-[#0d2b8f] transition-all shadow-md hover:shadow-lg"
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 text-white" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 space-y-4 md:hidden z-50 rounded-b-2xl">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`font-medium transition px-4 py-2 rounded-full bg-transparent ${
                activeLink === link.id
                  ? "text-[#194EFF] bg-transparent"
                  : "text-gray-700 hover:text-[#194EFF]"
              }`}
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => handleLinkClick("contact")}
            className="bg-[#194EFF] text-white px-6 py-2 rounded-full hover:bg-[#0d2b8f] transition mt-4"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
