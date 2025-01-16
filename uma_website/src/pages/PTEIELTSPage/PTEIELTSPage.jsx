import React from 'react';
import { Link } from 'react-router-dom';
import ielts from "../../assets/ielts.jpg";
import './PTEIELTSPage.css';

export function PTEIELTSPage() {
  const programs = [
    {
      title: 'Undergraduate',
      description: 'Comprehensive training for undergraduate students preparing for abroad studies.',
      image: ielts // Replace with specific image
    },
    {
      title: 'Postgraduate',
      description: 'Advanced preparation for postgraduate applicants with focused modules.',
      image: ielts // Replace with specific image
    },
    {
      title: 'Level 4 Training',
      description: 'Intensive training for advanced English proficiency.',
      image: ielts // Replace with specific image
    },
    {
      title: 'Level 3 Training',
      description: 'Intermediate level training with practical exercises.',
      image: ielts // Replace with specific image
    },
    {
      title: 'Basic Training',
      description: 'Fundamental English skills development for beginners.',
      image: ielts // Replace with specific image
    },
    {
      title: 'Advanced Training',
      description: 'Expert level training for high band score aspirants.',
      image: ielts // Replace with specific image
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <Link to="/services" className="inline-block mb-6 text-blue-600 hover:text-blue-800">
          ← Back to Services
        </Link>
        
        <div className="bg-white rounded-lg shadow-xl">
          <div className="hero-section">
            <img src={ielts} alt="PTE/IELTS Training" className="hero-image"/>
            <div className="hero-overlay">
              <h1 className="text-4xl font-bold text-white">PTE/IELTS Training</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h2 className="mb-8 text-2xl font-bold text-center">Our Training Programs</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {programs.map((program, index) => (
                  <div key={index} className="program-card">
                    <div className="card-image">
                      <img src={program.image} alt={program.title} />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{program.title}</h3>
                      <p className="card-description">{program.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t">
              <h2 className="mb-8 text-2xl font-bold text-center">Why Choose Our Training?</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="feature-card">
                  <h3 className="mb-4 text-xl font-semibold">Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Expert trainers with international certification
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Regular mock tests and evaluations
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Personalized study materials
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Interactive learning sessions
                    </li>
                  </ul>
                </div>
                <div className="feature-card">
                  <h3 className="mb-4 text-xl font-semibold">Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Flexible batch timings
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Practice lab access
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Online resource portal
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Performance tracking
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