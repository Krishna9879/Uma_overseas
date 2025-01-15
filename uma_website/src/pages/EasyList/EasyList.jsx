import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCogs, FaHome, FaBookOpen, FaInfoCircle, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import "./EasyList.css";

const EasyList = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 768) {
      setHoveredMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setHoveredMenu(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="easy-nav">
      {/* Mobile Menu Button */}
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
        {/* Home Link */}
        <Link 
          to="/" 
          className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          <FaHome className="menu-icon" />
          <span>Home</span>
        </Link>

        {/* Services Dropdown */}
        <div
          className="nav-dropdown"
          onMouseEnter={() => handleMouseEnter("services")}
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/services" 
            className={`menu-item ${location.pathname.startsWith('/services') || hoveredMenu === "services" ? 'active' : ''}`}
          >
            <FaCogs className="menu-icon" />
            <span>Services</span>
          </Link>
          <div className={`dropdown-menu ${hoveredMenu === "services" || isMobileMenuOpen ? 'show' : ''}`}>
            <Link to="/services/web-development" className="dropdown-item">
              Web Development
            </Link>
            <Link to="/services/app-design" className="dropdown-item">
              App Design
            </Link>
            <Link to="/services/seo" className="dropdown-item">
              SEO Services
            </Link>
          </div>
        </div>

        {/* Courses Dropdown */}
        <div
          className="nav-dropdown"
          onMouseEnter={() => handleMouseEnter("courses")}
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/courses" 
            className={`menu-item ${location.pathname.startsWith('/courses') || hoveredMenu === "courses" ? 'active' : ''}`}
          >
            <FaBookOpen className="menu-icon" />
            <span>Courses</span>
          </Link>
          <div className={`dropdown-menu ${hoveredMenu === "courses" || isMobileMenuOpen ? 'show' : ''}`}>
            <Link to="/courses/web-development" className="dropdown-item">
              Web Development
            </Link>
            <Link to="/courses/graphic-design" className="dropdown-item">
              Graphic Design
            </Link>
            <Link to="/courses/digital-marketing" className="dropdown-item">
              Digital Marketing
            </Link>
          </div>
        </div>

        {/* About Dropdown */}
        <div
          className="nav-dropdown"
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
        >
          <Link 
            to="/About_us" 
            className={`menu-item ${location.pathname.startsWith('/about') || hoveredMenu === "about" ? 'active' : ''}`}
          >
            <FaInfoCircle className="menu-icon" />
            <span>About</span>
          </Link>
          <div className={`dropdown-menu ${hoveredMenu === "about" || isMobileMenuOpen ? 'show' : ''}`}>
            <Link to="/about/company" className="dropdown-item">
              About Company
            </Link>
            <Link to="/about/team" className="dropdown-item">
              Our Team
            </Link>
            <Link to="/about/mission" className="dropdown-item">
              Our Mission
            </Link>
          </div>
        </div>

        {/* Contact Link */}
        <Link 
          to="/contact" 
          className={`menu-item ${location.pathname === '/contact' ? 'active' : ''}`}
        >
          <FaPhoneAlt className="menu-icon" />
          <span>Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export default EasyList;