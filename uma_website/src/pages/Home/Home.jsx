import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
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
import ChatLauncher from '../ChatLauncher/ChatLauncher';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      {/* WhatsApp Icon - Responsive positioning */}
      <a
        href="https://wa.me/917359 58 5959
"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 p-2 text-white transition bg-green-500 rounded-full md:p-3 bottom-16 left-4 hover:bg-green-600"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 md:w-7 md:h-7" />
      </a>

      {/* Hero Banner Section */}
      <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-gradient-to-r from-white to-gray-200">
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
        <div className="container relative px-4 py-8 mx-auto md:py-12 lg:py-16">
          <div className="grid items-center gap-4 md:gap-8 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="space-y-4 text-black md:space-y-6">
              <h2 className="text-xl font-medium md:text-2xl">
                Experience Life-Changing Opportunities with Us!
              </h2>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                <span className="text-transparent bg-gradient-to-b from-blue-800 to-blue-300 bg-clip-text">UMA</span> OVERSEAS & EDUCATION
              </h1>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Enroll Now - Limited Offer!
              </h3>
              
              <p className="text-lg md:text-xl">
                First 20 Students Special Offer for PTE & IELTS Training
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row md:gap-4">
                <button className="w-full px-4 py-2 font-semibold text-white transition bg-purple-700 rounded-lg sm:w-auto md:px-6 md:py-3 hover:bg-purple-800">
                  Call Now: +91 7359 58 5959
                </button>
                <button className="flex items-center justify-center w-full gap-2 px-4 py-2 font-semibold text-purple-900 transition bg-white rounded-lg sm:w-auto md:px-6 md:py-3 hover:bg-gray-100">
                  Call Now: +91 7359 58 5959
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Animated Images */}
            <div className="relative h-[300px] md:h-[350px] lg:h-[400px] mt-8 lg:mt-0">
              {/* Australia Map */}
              <div className="absolute inset-0 flex items-end transition-opacity duration-500">
                <img 
                  src={images[currentImageIndex].map}
                  alt="Australia Map"
                  className="object-contain w-full h-full"
                />
              </div>
              
              {/* Student Image */}
              <div className="absolute bottom-0 right-0 w-1/2 transition-opacity duration-500">
                <img 
                  src={images[currentImageIndex].student}
                  alt="Student"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner />
      <Services />
      <Courses />
      <ChatLauncher />
    </div>
  );
};

export default Home;