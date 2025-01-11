import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import Banner from "../../components/Banner/Banner";
import Courses from "../Courses/Courses";
import Services from "../Services/Services";
import student01 from "../../assets/student01.png";
import student02 from "../../assets/student02.png";
import student03 from "../../assets/student03.png";
import graduate from "../../assets/graduate.png";
import france from "../../assets/france.png";
import german from "../../assets/german.png";
import una from "../../assets/una.png";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      student: student01,
      map: france
    },
    {
      student: student02,
      map: german
    },
    {
      student: student03,
      map: una
    }
  ];

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/917359585959" // Replace with your WhatsApp number (with country code)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 left-4 p-3 bg-green-500 rounded-full text-white hover:bg-green-600 transition"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Hero Banner Section */}
      <div className="relative min-h-[600px] bg-gradient-to-r from-white to-gray-200 ">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ 
            backgroundImage: `url(${graduate})`,
            opacity: 0.2,
            mixBlendMode: "normal"
          }}
        />

        {/* Content Container */}
        <div className="container relative px-4 py-16 mx-auto">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="space-y-6 text-black">
              <h2 className="text-2xl font-medium">
                Experience Life-Changing Opportunities with the
              </h2>
              <h1 className="text-4xl font-bold md:text-5xl">
                <span className="text-transparent bg-gradient-to-b from-blue-800 to-blue-300 bg-clip-text">UMA</span> OVERSEAS & EDUCATION
              </h1>
              <h3 className="text-3xl font-semibold">
                Enroll Now - Limited Offer!
              </h3>
              
              <p className="text-xl">
                First 20 Students Special Offer for PTE & IELTS Training
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button className="px-6 py-3 font-semibold text-white transition bg-purple-700 rounded-lg hover:bg-purple-800">
                  Call Now: +91 7359 58 5959
                </button>
                <button className="flex items-center gap-2 px-6 py-3 font-semibold text-purple-900 transition bg-white rounded-lg hover:bg-gray-100">
                  Call Now: +91 7359 58 5959
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Animated Images */}
            <div className="relative h-[400px] flex items-end mt-12">
              {/* Australia Map */}
              <div className="absolute inset-0 flex items-end transition-opacity duration-500">
                <img 
                  src={images[currentImageIndex].map}
                  alt="Australia Map"
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Student Image */}
              <div className="absolute bottom-0 right-0 w-1/2 transition-opacity duration-500 h-1/1">
                <img 
                  src={images[currentImageIndex].student}
                  alt="Student"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner />
      <Services />
      <Courses />
    </div>
  );
};

export default Home;
