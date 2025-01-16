import React from 'react';
import { Link } from 'react-router-dom';
import { FaPassport, FaBriefcase, FaPlane, FaBuilding, FaFileAlt, FaClipboardList } from 'react-icons/fa';
import visa from "../../assets/visaservice.jpg";

export function VisaPage() {
  const visaServices = [
    {
      title: 'Student Visa',
      description: 'Expert assistance for student visa applications with high success rate. Our specialized team guides you through the entire process, from document preparation to visa interview. We provide comprehensive support including course selection guidance, financial documentation assistance, and application strategy planning. Our proven track record ensures your academic journey starts right.',
      icon: <FaPassport className="text-3xl" />,
      image: visa
    },
    {
      title: 'Work Visa',
      description: 'Professional guidance for work permit and employment visas. We handle all aspects of your work visa application, ensuring compliance with current regulations. Our experts assist with employment documentation, sponsor requirements, and qualification verification. We work closely with employers to streamline the process and maximize approval chances.',
      icon: <FaBriefcase className="text-3xl" />,
      image: visa
    },
    {
      title: 'Tourist Visa',
      description: 'Quick and efficient tourist visa processing services. Our team simplifies the tourist visa application process, helping you plan your vacation without visa stress. We assist with travel itinerary preparation, accommodation documentation, and financial requirements. Get expert guidance on country-specific tourist visa regulations.',
      icon: <FaPlane className="text-3xl" />,
      image: visa
    },
    {
      title: 'Business Visa',
      description: 'Specialized support for business and corporate visas. Our business visa services cater to entrepreneurs and corporate professionals. We handle invitation letters, business documentation, and multi-entry visa requirements. Get expert assistance for trade shows, business meetings, and corporate events abroad.',
      icon: <FaBuilding className="text-3xl" />,
      image: visa
    },
    {
      title: 'Document Verification',
      description: 'Thorough verification and attestation of required documents. Our document verification service ensures all your papers meet visa requirements. We handle authentication, translation, and legalization of documents. Expert review of educational certificates, employment records, and financial statements.',
      icon: <FaFileAlt className="text-3xl" />,
      image: visa
    },
    {
      title: 'Application Support',
      description: 'Complete assistance with visa application procedures. Our comprehensive application support covers every step of the visa process. We provide form filling assistance, documentation checklists, and application tracking. Get expert guidance on visa fee payments and appointment scheduling.',
      icon: <FaClipboardList className="text-3xl" />,
      image: visa
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
              src={visa} 
              alt="Visa Services" 
              className="object-cover w-full h-full brightness-75"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="px-4 mb-4 text-5xl font-bold text-white uppercase drop-shadow-lg">
                Visa Application Services
              </h1>
              <p className="max-w-2xl px-4 text-xl text-white/90">
                Expert guidance for all your visa requirements
              </p>
            </div>
          </div>

          {/* Visa Services */}
          <div className="px-8 py-16 bg-gray-50">
            <h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
              Our Visa Services
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visaServices.map((service, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 group h-[400px]"
                >
                  {/* Background Image */}
                  <img 
                    src={service.image}
                    alt={service.title}
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
                          {service.icon}
                        </div>
                        <h3 className="ml-4 text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Scrollable Description */}
                    <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
                      <p className="text-lg font-medium leading-relaxed text-white">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="px-8 py-16 bg-white">
            <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
              Why Choose Our Visa Services?
            </h2>
            <div className="grid max-w-5xl gap-12 mx-auto md:grid-cols-2">
              <div className="p-8 bg-blue-50 rounded-xl">
                <h3 className="mb-6 text-2xl font-bold text-blue-600">Features</h3>
                <ul className="space-y-4">
                  {[
                    'Expert visa consultants',
                    'Document verification',
                    'Application review',
                    'Interview preparation'
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
                    'High success rate',
                    'Time-saving process',
                    'Regular updates',
                    'Post-visa support'
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