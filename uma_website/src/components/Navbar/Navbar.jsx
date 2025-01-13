import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa";
import umalogo from "../../assets/umalogo.jpg";
import EasyLinkst from "../../pages/EasyList/EasyList";
import "./Navbar.css";

function Navbar({ showEasyList = true }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* Top Navigation Bar */}
        <nav className={`transition-all duration-300 backdrop-blur-md ${
          isScrolled ? 'bg-blue-900/75' : 'bg-blue-950'
        }`}>
          <div className="container flex items-center justify-between px-4 py-2 mx-auto">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <img src={umalogo} alt="Logo" className="h-8" />
              <span className={`text-lg font-bold hidden md:block ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                UMA OVERSEAS & EDUCATION
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="p-2 text-white md:hidden"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Desktop Contact and Social Icons Section */}
            <div className="items-center hidden space-x-6 md:flex">
              <a href="tel:+91758723456" className={`flex items-center ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                <FaPhoneAlt className="mr-2" /> +91 7587 23456
              </a>
              <div className="flex space-x-4">
                <a href="https://wa.me/91758723456" target="_blank" rel="noopener noreferrer"
                   className={`hover:opacity-75 ${isScrolled ? 'text-white' : 'text-white'}`}>
                  <FaWhatsapp size={20} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                   className={`hover:opacity-75 ${isScrolled ? 'text-white' : 'text-white'}`}>
                  <FaInstagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className={`hover:opacity-75 ${isScrolled ? 'text-white' : 'text-white'}`}>
                  <FaTwitter size={20} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                   className={`hover:opacity-75 ${isScrolled ? 'text-white' : 'text-white'}`}>
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-blue-900/95 p-4`}>
            <a href="tel:+91758723456" className="flex items-center mb-4 text-white">
              <FaPhoneAlt className="mr-2" /> +91 7587 23456
            </a>
            <div className="flex mb-4 space-x-4">
              <a href="https://wa.me/91758723456" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </nav>

        {/* Location Section */}
        <div className={`transition-all duration-300 backdrop-blur-md ${
          isScrolled ? 'bg-blue-700/75' : 'bg-white/20'
        }`}>
          <div className="container flex items-center justify-between px-4 py-1 mx-auto">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className={isScrolled ? 'text-white' : 'text-blue-900'} />
              <span className={`text-xs ${
                isScrolled ? 'text-white' : 'text-blue-900'
              }`}>
                Saidham Shopping Center, Opp. Metro P.127, Vastral, Ahmedabad, Gujarat 382418
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Navigation Bar */}
        {showEasyList && <EasyLinkst />}
      </div>
      
      {/* Spacer div to prevent content overlap */}
      <div className="h-[120px] md:h-[140px]"></div>
    </>
  );
}

export default Navbar;