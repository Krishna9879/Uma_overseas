import React, { useEffect, useState } from "react";
import { FaBars, FaBookOpen, FaCogs, FaHome, FaInfoCircle, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="nav-container">
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

          {/* Services Link */}
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
            <div className={`dropdown-menu desktop-only ${hoveredMenu === "services" ? 'show' : ''}`}>
             
            </div>
          </div>

          {/* Courses Link */}
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
            <div className={`dropdown-menu desktop-only ${hoveredMenu === "courses" ? 'show' : ''}`}>
             
            </div>
          </div>

          {/* About Link */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link 
              to="About_us" 
              className={`menu-item ${location.pathname.startsWith('/About_us') || hoveredMenu === "about" ? 'active' : ''}`}
            >
              <FaInfoCircle className="menu-icon" />
              <span>About</span>
            </Link>
            <div className={`dropdown-menu desktop-only ${hoveredMenu === "about" ? 'show' : ''}`}>
             
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
    </div>
  );
};

export default EasyList;