import { useState } from "react";
import { Link } from "react-router-dom";

function LandingPageHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/#home" },
    { label: "About", to: "#about" },
    { label: "Skills", to: "#skills" },
    { label: "Experience", to: "#experience" },
    { label: "Projects", to: "#projects" },
    { label: "Contact", to: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-50 drop-shadow-sm hover:drop-shadow-lg transition duration-300">
          <a
            href="/#home"
            className="hover:text-blue-100"
            style={{
              textShadow: "2px 2px 6px rgba(0,0,0,0.1)",
              textDecoration: "none",
            }}
          >
            Abdur Rehman
          </a>
        </h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              className="relative font-medium text-gray-800 hover:text-blue-700 transition duration-300 group px-2 py-1 rounded-md"
              style={{
                textDecoration: "none",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-blue-700 text-2xl focus:outline-none hover:scale-110 transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-2 pt-0 bg-white/40 backdrop-blur-sm shadow-lg border-t border-white/20 animate-slide-down rounded-b-xl">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-2 px-3 text-gray-800 hover:text-blue-700 hover:bg-blue-100/40 font-medium rounded-md transition-all duration-200"
              style={{ textDecoration: "none" }}
            >
              <i className="bi bi-chevron-right text-blue-500 text-base"></i>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default LandingPageHeader;
