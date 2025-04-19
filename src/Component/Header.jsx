import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/hire.png";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimeout = useRef(null);

  // Define the "About" related paths
  const aboutPaths = [
    "/ourstory",
    "/missionvission",
    "/hireginiepromise",
    "/industrieswebserve"
  ];

  // Check if current path matches any About route
  const isAboutActive = aboutPaths.includes(location.pathname);

  // Desktop hover handlers
  const handleMouseEnter = (menu) => {
    clearTimeout(closeTimeout.current); // Cancel close if re-enter
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay
  };

  const handleNavClick = () => {
    setActiveDropdown(null); // close dropdown on nav click
  };

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 md:h-10" />
          <span className="text-xl md:text-2xl font-bold text-gray-800">HIRGINIE</span>
        </div>

        {/* Desktop Navigation (Visible on md & larger) */}
        <nav className="hidden lg:flex items-center space-x-8 lg:space-x-8">
          <Link
            to="/"
            className={`transition ${isActive("/") ? "text-red-600" : "text-gray-800 hover:text-red-600"}`}
          >
            Home
          </Link>

          {/* Desktop About Dropdown using hover */}
          <div className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`${isAboutActive || activeDropdown === "about"
                ? "text-red-600"
                : "text-gray-800 hover:text-red-600"
                }`}
            >
              About
            </button>
            {activeDropdown === "about" && (
              <div className="absolute left-0 mt-2 w-64 bg-red-600 text-white shadow-lg rounded-md z-50">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-white hover:text-red-600">
                    <Link to="/ourstory" onClick={handleNavClick}>Our Story</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-white hover:text-red-600">
                    <Link to="/missionvission" onClick={handleNavClick}>Our Mission and Vision</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-white hover:text-red-600">
                    <Link to="/hireginiepromise" onClick={handleNavClick}>Hireginie Promise</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-white hover:text-red-600">
                    <Link to="/industrieswebserve" onClick={handleNavClick}>Industries We Serve</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            to="/D&Iimpact"
            className={`transition ${isActive("/D&Iimpact") ? "text-red-600" : "text-gray-800 hover:text-red-600"}`}
          >
            D & I Impact
          </Link>
          <Link
            to="/hireginieservices"
            className={`transition ${isActive("/hireginieservices") ? "text-red-600" : "text-gray-800 hover:text-red-600"}`}
          >
            Hireginie Services
          </Link>
          <Link
            to="/job"
            className={`transition ${isActive("/job") ? "text-red-600" : "text-gray-800 hover:text-red-600"}`}
          >
            Jobs
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden sm:flex md:w-auto">
          <Link
            to="/contact"
            className="flex items-center bg-red-400 text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-red-700 transition"
          >
            CONTACT US
            <span className="ml-2 bg-white text-black p-1 rounded-full text-xs md:text-sm">➔</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-800 hover:text-red-600 focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="px-6 pt-2 pb-4 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-red-600"
            >
              Home
            </Link>

            {/* Mobile About Dropdown as Clickable Toggle */}
            <div className="block text-gray-800">
              <button
                className="w-full text-left py-2 text-gray-800 hover:text-red-600 focus:outline-none"
                onClick={() =>
                  setActiveDropdown(activeDropdown === "about" ? null : "about")
                }
              >
                About
              </button>
              {activeDropdown === "about" && (
                <div className="pl-4 mt-1">
                  <Link
                    to="/ourstory"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveDropdown(null);
                    }}
                    className="block py-1 text-sm text-gray-700 hover:text-red-600"
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/missionvission"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveDropdown(null);
                    }}
                    className="block py-1 text-sm text-gray-700 hover:text-red-600"
                  >
                    Our Mission and Vision
                  </Link>
                  <Link
                    to="/hireginiepromise"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveDropdown(null);
                    }}
                    className="block py-1 text-sm text-gray-700 hover:text-red-600"
                  >
                    Hireginie Promise
                  </Link>
                  <Link
                    to="/industrieswebserve"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveDropdown(null);
                    }}
                    className="block py-1 text-sm text-gray-700 hover:text-red-600"
                  >
                    Industries We Serve
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/D&Iimpact"
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-red-600"
            >
              D & I Impact
            </Link>
            <Link
              to="/hireginieservices"
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-red-600"
            >
              Hireginie Services
            </Link>
            <Link
              to="/job"
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 hover:text-red-600"
            >
              Jobs
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 bg-red-400 text-white px-5 py-2 rounded-md text-center hover:bg-red-700 transition"
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
