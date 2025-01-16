import React from 'react';
import { Link } from 'react-router-dom';
import examImage from "../../assets/examservice.jpg";

export default function ExamBookingPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <Link to="/services" className="inline-block mb-6 text-blue-600 hover:text-blue-800">
          ← Back to Services
        </Link>
        
        <div className="bg-white rounded-lg shadow-xl">
          <div className="relative h-96">
            <img src={examImage} alt="Exam Booking" className="object-cover w-full h-full"/>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h1 className="text-4xl font-bold text-white">Exam Booking Services</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Our Exam Booking Services</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: 'PTE Booking',
                    description: 'Efficient booking service for PTE exams at preferred locations.'
                  },
                  {
                    title: 'IELTS Booking',
                    description: 'Guidance and assistance in booking IELTS exam slots.'
                  },
                  {
                    title: 'TOEFL Booking',
                    description: 'Quick and easy booking process for TOEFL exams.'
                  },
                  {
                    title: 'GRE Booking',
                    description: 'Expert support for GRE exam scheduling and preparation.'
                  },
                  {
                    title: 'GMAT Booking',
                    description: 'Professional help in GMAT exam registration and planning.'
                  },
                  {
                    title: 'SAT Booking',
                    description: 'Simplified SAT booking process with comprehensive support.'
                  }
                ].map((exam, index) => (
                  <div key={index} className="p-6 rounded-lg bg-gray-50">
                    <h3 className="mb-2 text-xl font-semibold">{exam.title}</h3>
                    <p className="text-gray-600">{exam.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t">
              <h2 className="mb-4 text-2xl font-bold">Why Choose Our Exam Booking Services?</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Personalized booking assistance
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Exam schedule reminders
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Test center selection guidance
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Preparation tips and resources
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      High success rate
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Time-saving process
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Regular updates on exam procedures
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Ongoing support during exam preparation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
