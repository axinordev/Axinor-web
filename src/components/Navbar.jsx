import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("Home");
    } else if (location.pathname === "/portfolio") {
      setActiveLink("Portfolio");
    } else if (location.pathname === "/career") {
      setActiveLink("Careers");
    }
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);

    if (link === "Portfolio") {
      navigate("/portfolio");
      // ✅ Scroll to top before reloading
      window.scrollTo(0, 0);
      setTimeout(() => window.location.reload(), 100); 
    } else if (link === "Careers") {
      navigate("/career");
      // ✅ Scroll to top before reloading
      window.scrollTo(0, 0);
      setTimeout(() => window.location.reload(), 100);
    } else if (link === "Home") {
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      const section = document.getElementById(link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
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
      {/* Left: Logo */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => handleLinkClick("Home")}
      >
        <img
          src={logo}
          alt="Logo"
          className="md:h-20 h-16 w-auto md:ml-6 ml-0"
        />
      </div>

      {/* Center: Nav Links (desktop only) */}
      <div className="hidden md:flex bg-[#2D2D2D87] text-lg rounded-full px-2 py-2 space-x-10 shadow-sm">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleLinkClick(link.id)}
            className={`text-white font-medium transition px-4 py-2 rounded-full ${
              activeLink === link.id
                ? "bg-[#4B4B4E5E] border border-[#5D5D5D]"
                : "bg-transparent hover:bg-[#4B4B4E5E] hover:border hover:border-[#5D5D5D]"
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Right: Contact button (desktop) */}
      <div className="hidden md:block mr-10">
        <button
          data-ripple-light="true"
          className="bg-[#194EFF] text-white text-lg px-8 py-3 rounded-full hover:bg-[#0d2b8f] transition-all shadow-md hover:shadow-lg"
        >
          <a href="#contact">Contact Us</a>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 text-white" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
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

          <button className="bg-[#194EFF] text-white px-6 py-2 rounded-full hover:bg-[#0d2b8f] transition mt-4">
            <a href="#contact">Contact Us</a>
          </button>
        </div>
      )}
    </nav>
  );
}
