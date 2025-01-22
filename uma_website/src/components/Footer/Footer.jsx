import React, { useState } from "react";
import { FaChevronDown, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import applestore from '../../assets/applestore.png';
import playstore from '../../assets/image.png';
import './Footer.css';

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const sections = {
    countries: [
      "Canada", "Australia", "Russia","New Zealand", "USA", "UK", "Ireland",
      "Germany", "Switzerland", "Dubai", "Singapore", "Malaysia"
    ],
    immigration: [
      "Canada", "Australia", "Russia", "New Zealand", "USA",
      "European Countries", "Finland","Luxembourg"
    ],
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#003c4a] text-white py-6 md:py-10">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Mobile Accordion Menu */}
        <div className="md:hidden">
          {Object.entries(sections).map(([key, items]) => (
            <div key={key} className="border-b border-gray-600 last:border-b-0">
              <button
                onClick={() => toggleSection(key)}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <span className="text-lg font-semibold">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </span>
                <FaChevronDown
                  className={`transform transition-transform duration-200 ${
                    openSection === key ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection === key ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="block py-1 text-gray-300 hover:text-white">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden gap-8 md:grid md:grid-cols-4">
          {Object.entries(sections).map(([key, items]) => (
            <div key={key}>
              <h3 className="mb-4 text-lg font-semibold">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              {key === 'connect' && (
                <div className="mt-4">
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">
                      <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                      <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white">
                      <FaLinkedinIn size={20} />
                    </a>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="block text-gray-300 hover:text-white">Privacy Policy</a>
                    <a href="#" className="block text-gray-300 hover:text-white">Terms & Conditions</a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* App Download Section */}
        <div className="mt-8 text-center">
          <h2 className="text-lg font-semibold">
            GET THE NEW <span className="text-[#00a6e6]">UMA</span> APP TODAY!
          </h2>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="https://play.google.com/store">
              <img src={playstore} alt="Play Store" className="h-8 md:h-10" />
            </a>
            <a href="https://www.apple.com/app-store/">
              <img src={applestore} alt="App Store" className="h-8 md:h-10" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 mt-6 text-sm text-center text-gray-400 border-t border-gray-600">
          Copyright © {new Date().getFullYear()} UMA. All rights reserved. And Web Design and Development is reserved by CodeCraft Technical Institute
        </div>
      </div>
    </footer>
  );
}

export default Footer;