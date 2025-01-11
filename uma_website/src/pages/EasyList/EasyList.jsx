import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCogs, FaHome, FaBookOpen, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";

const EasyLinkst = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <nav className="py-3 bg-white shadow-lg">
     

      {/* Navbar Links */}
      <div className="container flex justify-center mx-auto mt-4 space-x-6">
        {/* Home Link */}
        <Link 
          to="/" 
          className="flex items-center px-3 py-2 text-gray-700 transition-colors duration-200 hover:text-blue-600"
        >
          <FaHome className="mr-2" />
          <span>Home</span>
        </Link>

        {/* Services Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/services" 
            className={`flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
              hoveredMenu === "services" ? "text-blue-600" : ""
            }`}
          >
            <FaCogs className="mr-2" />
            <span>Services</span>
          </Link>
          {hoveredMenu === "services" && (
            <div className="absolute left-0 z-50 w-48 py-1 mt-2 bg-white rounded-md shadow-lg">
              <Link to="/web-development" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Web Development</Link>
              <Link to="/app-design" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">App Design</Link>
              <Link to="/seo-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">SEO Services</Link>
            </div>
          )}
        </div>

        {/* Courses Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("courses")}
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/courses" 
            className={`flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
              hoveredMenu === "courses" ? "text-blue-600" : ""
            }`}
          >
            <FaBookOpen className="mr-2" />
            <span>Courses</span>
          </Link>
          {hoveredMenu === "courses" && (
            <div className="absolute left-0 z-50 w-48 py-1 mt-2 bg-white rounded-md shadow-lg">
              <Link to="/web-dev-course" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Web Development</Link>
              <Link to="/graphic-design" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Graphic Design</Link>
              <Link to="/digital-marketing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Digital Marketing</Link>
            </div>
          )}
        </div>

        {/* About Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/about" 
            className={`flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
              hoveredMenu === "about" ? "text-blue-600" : ""
            }`}
          >
            <FaInfoCircle className="mr-2" />
            <span>About</span>
          </Link>
          {hoveredMenu === "about" && (
            <div className="absolute left-0 z-50 w-48 py-1 mt-2 bg-white rounded-md shadow-lg">
              <Link to="/about-company" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">About Company</Link>
              <Link to="/team" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Our Team</Link>
              <Link to="/mission" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Our Mission</Link>
            </div>
          )}
        </div>

        {/* Contact Link */}
        <Link 
          to="/contact" 
          className="flex items-center px-3 py-2 text-gray-700 transition-colors duration-200 hover:text-blue-600"
        >
          <FaPhoneAlt className="mr-2" />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default EasyLinkst;