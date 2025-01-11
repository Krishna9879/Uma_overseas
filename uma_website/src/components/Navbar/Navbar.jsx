import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import umalogo from "../../assets/umalogo.jpg";
import EasyLinkst from "../../pages/EasyList/EasyList";
import "./Navbar.css";

function Navbar({ showEasyList = true }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* Top Navigation Bar */}
        <nav className={`transition-all duration-300 backdrop-blur-md ${
          isScrolled 
            ? 'bg-blue-900/75' 
            : 'bg-blue-950'
        }`}>
          <div className="container flex items-center justify-between px-4 py-2 mx-auto">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <img src={umalogo} alt="Logo" className="h-8" />
              <span className={`text-lg font-bold ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                UMA OVERSEAS & EDUCATION
              </span>
            </div>

            {/* Contact and Social Icons Section */}
            <div className="flex items-center space-x-6">
              {/* Phone Number */}
              <a href="tel:+91758723456" className={`flex items-center ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                <FaPhoneAlt className="mr-2" /> +91 7587 23456
              </a>
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/91758723456" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={isScrolled ? 'text-white/90 hover:text-white' : ' hover:text-white/90 hover:text-white'}
                >
                  <FaWhatsapp size={20} />
                </a>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={isScrolled ? 'text-white/90 hover:text-white' :  'hover:text-white hover:text-white/90'}
                >
                  <FaInstagram size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={isScrolled ? 'text-white/90 hover:text-white' : ' hover:text-white hover:text-white/90'}
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={isScrolled ? 'text-white/90 hover:text-white' : ' hover:text-white hover:text-white/90'}
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Location Section */}
        <div className={`transition-all duration-300 backdrop-blur-md ${
          isScrolled 
            ? 'bg-blue-700/75' 
            : 'bg-white/20'
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
      <div className="h-[120px]"></div>
    </>
  );
}

export default Navbar;