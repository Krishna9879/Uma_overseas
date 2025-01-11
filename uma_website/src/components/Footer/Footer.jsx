import React from "react";
import playstore from '../../assets/image.png'; 
import applestore from '../../assets/applestore.png';
function Footer() {
  return (
    <footer className="bg-[#003c4a] text-white py-10">
      {/* Footer Sections */}
      <div className="grid grid-cols-2 gap-8 px-4 mx-auto max-w-7xl sm:grid-cols-3 lg:grid-cols-5">
        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {[
              "Home",
              "Eduflair Story",
              "Language Institute",
              "Ph.D. Consultation",
              "Healthcare Studies",
              "Distance Education",
              "Online Education",
              "Counselling & Mentoring",
              "YouTube Channel",
              "Contact",
              "Book Your e-Counselling",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Countries */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Countries</h3>
          <ul className="space-y-2">
            {[
              "Canada",
              "Australia",
              "New Zealand",
              "USA",
              "UK",
              "Ireland",
              "Germany",
              "Switzerland",
              "Dubai",
              "Singapore",
              "Malaysia",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Immigration */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Immigration</h3>
          <ul className="space-y-2">
            {[
              "Canada",
              "Australia",
              "Quebec",
              "New Zealand",
              "USA",
              "European Countries",
              "Scandinavian Countries",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Address</h3>
          <div className="text-gray-300">
            <p className="mb-4">
              <strong>Eduflair Learning Solutions Pvt. Ltd.</strong>
              <br />
              3rd Floor, RP Mall
              <br />
              Mavoor Road, Calicut
              <br />
              Kerala - 673004
              <br />
              Phone: +91 83 52 010101
              <br />
              Email: info@eduflair.com
            </p>

            <p>
              <strong>Perinthalmanna</strong>
              <br />
              2nd Floor, Vava's Mall
              <br />
              Calicut Bypass Road
              <br />
              Phone: +91 83 52 010101
              <br />
              Email: info@eduflair.com
            </p>
          </div>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Connect with us</h3>
          <ul className="space-y-2">
            {[
              "Language Institute",
              "Ph.D. Consultation",
              "Healthcare Studies",
              "Distance Education",
              "Online Education",
              "Counselling & Mentoring",
              "YouTube Channel",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="block text-gray-300 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block text-gray-300 transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-lg font-semibold">GET THE NEW <span className="text-transparent bg-gradient-to-b from-blue-800 to-blue-300 bg-clip-text">UMA</span> APP TODAY!</h2>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://play.google.com/store">
            <img 
              src={playstore} 
              alt="Play Store" 
              className="h-10 transition-transform transform hover:-translate-x-2" 
            />
          </a>
          <a href="https://www.apple.com/app-store/">
            <img 
              src={applestore} 
              alt="App Store" 
              className="h-10 transition-transform transform hover:translate-x-2" 
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-4 mt-8 text-sm text-center text-gray-400 border-t border-gray-600">
        Copyright &copy; {new Date().getFullYear()} UMA. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;