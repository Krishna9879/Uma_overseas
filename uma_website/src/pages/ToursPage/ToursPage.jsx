import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlane, FaHotel, FaShieldAlt, FaMapMarkedAlt, FaBus, FaTicketAlt } from 'react-icons/fa';
import Tour from "../../assets/tourservice.jpg";
import './ToursPage.css';

export function ToursPage() {
  const programs = [
    {
      title: 'Tour Planning',
      description: 'Custom itineraries designed around your interests, schedule, and budget. Our team ensures every detail is managed for a memorable journey. We work closely with you to understand your preferences and create the perfect travel experience. Our expert planners will handle all the logistics, from accommodation bookings to local transport arrangements.',
      icon: <FaMapMarkedAlt className="text-3xl" />,
      image: Tour
    },
    {
      title: 'Accommodation',
      description: 'Carefully selected hotels and resorts for comfortable stays, ensuring quality and comfort throughout your journey. We partner with premium properties that meet our high standards for cleanliness, service, and amenities. Each accommodation is personally vetted by our team.',
      icon: <FaHotel className="text-3xl" />,
      image: Tour
    },
    {
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance for worry-free journeys, covering all aspects of your travel needs. Our insurance packages include medical coverage, trip cancellation protection, luggage protection, and emergency assistance services.',
      icon: <FaShieldAlt className="text-3xl" />,
      image: Tour
    },
    {
      title: 'Local Guidance',
      description: 'Professional local guides who know the best spots and can provide authentic cultural experiences. Our guides are certified experts with deep knowledge of local history, customs, and hidden gems. They ensure you get the most authentic and enriching experience possible.',
      icon: <FaMapMarkedAlt className="text-3xl" />,
      image: Tour
    },
    {
      title: 'Transport',
      description: 'Reliable transportation throughout your journey, from airport transfers to daily excursions. We use modern, comfortable vehicles and experienced drivers to ensure safe and convenient travel between destinations. All transport is pre-arranged to eliminate any travel stress.',
      icon: <FaBus className="text-3xl" />,
      image: Tour
    },
    {
      title: 'Activity Booking',
      description: 'Pre-arranged tours, activities, and unique experiences that make your journey special. From cultural workshops to adventure sports, we book all activities in advance. Skip the lines with our priority booking system and enjoy exclusive access to popular attractions.',
      icon: <FaTicketAlt className="text-3xl" />,
      image: Tour
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container px-4 py-12 mx-auto">
        <Link to="/services" className="inline-flex items-center mb-6 text-lg text-blue-600 transition-colors hover:text-blue-800">
          <span className="mr-2">←</span> Back to Services
        </Link>

        <div className="overflow-hidden bg-white rounded-lg shadow-xl">
          {/* Hero Section */}
          <div className="relative h-[400px]">
            <img 
              src={Tour} 
              alt="International Tours" 
              className="object-cover w-full h-full brightness-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="px-4 mb-4 text-5xl font-bold text-white uppercase drop-shadow-lg">
                International Tours
              </h1>
              <p className="max-w-2xl px-4 text-xl text-white/90">
                Experience the world with our carefully crafted tour packages
              </p>
            </div>
          </div>

          {/* Tour Services */}
          <div className="px-8 py-16 bg-gray-50">
            <h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
              Our Tour Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 group h-[400px]"
                >
                  {/* Background Image */}
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 brightness-50 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50">
                  </div>

                  {/* Scrollable Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Fixed Header */}
                    <div className="p-6 border-b border-white/20">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl">
                          {program.icon}
                        </div>
                        <h3 className="ml-4 text-2xl font-bold text-white">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Scrollable Description */}
                    <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
                      <p className="text-lg font-medium leading-relaxed text-white">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Our Tours */}
          <div className="px-8 py-16 bg-white">
            <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
              Why Choose Our Tours?
            </h2>
            <div className="grid max-w-5xl gap-12 mx-auto md:grid-cols-2">
              <div className="p-8 bg-blue-50 rounded-xl">
                <h3 className="mb-6 text-2xl font-bold text-blue-600">Features</h3>
                <ul className="space-y-4">
                  {[
                    'Experienced tour planners',
                    '24/7 travel support',
                    'Flexible customization options',
                    'Quality accommodations'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <span className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full"></span>
                      <p className="text-lg text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-green-50 rounded-xl">
                <h3 className="mb-6 text-2xl font-bold text-green-600">Benefits</h3>
                <ul className="space-y-4">
                  {[
                    'Stress-free travel planning',
                    'Best price guarantee',
                    'Local expertise and insights',
                    'Emergency assistance'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-4">
                      <span className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full"></span>
                      <p className="text-lg text-gray-700">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}