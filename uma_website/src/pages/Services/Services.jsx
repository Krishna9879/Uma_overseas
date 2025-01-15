import { useState } from 'react';
import ielts from "../../assets/ielts.jpg"
import exam from "../../assets/examservice.jpg"
import money from "../../assets/moneyservice.jpg"
import Tour from "../../assets/tourservice.jpg"
import abroad from "../../assets/service01.jpg"
import visa from "../../assets/visaservice.jpg"

export default function Services() {
  const services = [
    {
      title: 'PTE/IELTS Training',
      desc: 'Expert coaching with practice labs and flexible timing',
      details: [
        'Undergraduate',
        'Postgraduate',
        'Level 4 Training',
        'Level 3 Training',
        'Basic Training',
        'Advanced Training'
      ],
      image: ielts
    },
    {
      title: 'International Tours',
      desc: 'Comprehensive travel planning and assistance',
      details: [
        'Tour Planning',
        'Accommodation',
        'Travel Insurance',
        'Local Guidance',
        'Transport',
        'Activity Booking'
      ],
      image: Tour
    },
    {
      title: 'Visa Application',
      desc: 'End-to-end visa processing support',
      details: [
        'Student Visa',
        'Work Visa',
        'Tourist Visa',
        'Dependent Visa',
        'Document Verification',
        'Application Support',
       
      ],
      image: visa
    },
    {
      title: 'Money Exchange',
      desc: 'Competitive rates for currency exchange',
      details: [
        'Major Currencies',
        'Exchange Rates',
        'Secure transaction',
        'Cash Exchange',
        'Rate Alerts',
        'Financial Advice'
      ],
      image: money
    },
    {
      title: 'Exam Slot Booking',
      desc: 'Convenient booking of exam slots',
      details: [
        'PTE Booking',
        'IELTS Booking',
        'TOEFL Booking',
        'GRE Booking',
        'GMAT Booking',
        'Duolingo'
      ],
      image: exam
    },
    {
      title: 'Study Abroad',
      desc: 'Complete guidance for overseas education',
      details: [
        'Country Selection',
        'University Selection',
        'Course Guidance',
        'Application Process',
        'Scholarship Support',
        'Education loan'
      ],
      image: abroad
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto ">
        <h2 className="mb-12 text-4xl font-bold text-center">Choose Your Dream Career</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all duration-300 transform rounded-lg cursor-pointer h-80 hover:shadow-xl group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="absolute inset-0 p-6 text-white">
                  {hoveredIndex === index ? (
                    <div className="absolute inset-0 p-6 overflow-hidden bg-blue-900 bg-opacity-90">
                      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                        <h3 className="sticky top-0 pb-2 mb-4 text-2xl font-bold bg-blue-900 bg-opacity-90">
                          {service.title}
                        </h3>
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="p-2 text-sm transition-colors rounded hover:bg-blue-800">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
                      <p className="text-sm">{service.desc}</p>
                      <p className="mt-4 text-sm">{service.details.length} Courses</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}