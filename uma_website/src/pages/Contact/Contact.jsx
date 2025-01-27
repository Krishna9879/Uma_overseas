import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import contactuna from "../../assets/contactuna.jpg";
import banner1 from "../../assets/bannerimage1.avif";

const Contact = () => {
  return (
    <div>
      {/* Hero Section with Contact Us */}
      <div className="relative h-64 bg-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-white to-gray-600"></div>
          <img
            src={banner1}
            alt="Graduate background"
            className="object-cover w-full h-full opacity-26"
          />
        </div>
        <div className="container relative z-20 flex items-center justify-start h-full px-4 mx-auto">
          <h1 className="text-5xl font-bold text-gray-800">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-16 mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">UMA OVERSEAS & EDUCATION</h2>
            <hr className="border-gray-300" /> {/* Underline after heading topics */}
            
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="mt-1 text-blue-600">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-700">Head Office Location</h3>
                <p className="text-gray-600">
                111,112,Saidham Shoping Centre, Opp Metro P-127, Mahadev Nagar, Vastral, Ahmedabad.382418

                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="mt-1 text-blue-600">
                <FaPhone size={24} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-700">Customer support</h3>
                <p className="text-gray-600">+91 7359 58 5959
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="mt-1 text-blue-600">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-700">General questions</h3>
                <p className="text-gray-600">www.umaoverseasedu.com
                </p>
                <p className="text-gray-600">24/7 customer support</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="mt-1 text-blue-600">
                <FaClock size={24} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-700">Working Hours</h3>
                <p className="text-gray-600">Mon-Sat: 8:00 – 21:00</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.07406070301016!2d72.65318724489562!3d23.00200819224762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e879d1decac39%3A0x8483c474b17564b0!2sUma%20Cyber%20Zone!5e0!3m2!1sen!2sin!4v1737469819111!5m2!1sen!2sin" 
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Blank space before footer */}
      <div className="py-16"></div>
    </div>
  );
};

export default Contact;