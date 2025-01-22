import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Calendar, ChevronDown, Clock, GraduationCap, MapPin, Users, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ExamCard = ({ exam, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      {/* Main Card */}
      <div 
        className="relative h-64 overflow-hidden shadow-lg cursor-pointer rounded-xl"
        onClick={() => setIsExpanded(true)}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${exam.bgColor}`}>
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="relative flex flex-col justify-between h-full p-6">
          <div className="text-white">
            <exam.icon className="w-10 h-10 mb-4" />
            <h3 className="mb-2 text-xl font-semibold">{exam.title}</h3>
            <div className="text-sm text-white/80 line-clamp-2">
              {exam.description}
            </div>
          </div>
          <div className="flex justify-end">
            <button 
              className="flex items-center text-sm font-medium transition-colors text-white/90 hover:text-white"
            >
              Learn More <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-2xl"
            >
              {/* Fixed Header with Icon and Close Button */}
              <div className={`sticky top-0 z-10 bg-gradient-to-br ${exam.bgColor} p-6 flex justify-between items-start`}>
                <div className="flex items-center">
                  <exam.icon className="w-8 h-8 text-white" />
                  <h3 className="ml-4 text-2xl font-bold text-white">{exam.title}</h3>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="transition-colors text-white/90 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="max-h-[calc(80vh-5rem)] overflow-y-auto">
                <div className={`bg-gradient-to-br ${exam.bgColor} bg-opacity-10 p-6 space-y-6`}>
                  {/* Description Section */}
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="mb-3 text-lg font-semibold">Description</h4>
                    <p className="leading-relaxed text-gray-700">{exam.description}</p>
                  </div>

                  {/* Exam Details Section */}
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="mb-3 text-lg font-semibold">Exam Details</h4>
                    <ul className="space-y-3">
                      {exam.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="mr-3 text-blue-500">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Preparation Tips Section */}
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="mb-3 text-lg font-semibold">Preparation Tips</h4>
                    <ul className="space-y-3">
                      {exam.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="mr-3 text-blue-500">•</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Resources Section */}
                  <div className="p-6 bg-white rounded-lg shadow-sm">
                    <h4 className="mb-3 text-lg font-semibold">Additional Resources</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start text-gray-700">
                        <span className="mr-3 text-blue-500">•</span>
                        Official exam preparation materials
                      </li>
                      <li className="flex items-start text-gray-700">
                        <span className="mr-3 text-blue-500">•</span>
                        Practice tests and mock exams
                      </li>
                      <li className="flex items-start text-gray-700">
                        <span className="mr-3 text-blue-500">•</span>
                        Study guides and reference materials
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};



const ExamBookingPage = () => {
  const examServices = [
    {
      title: 'PTE Booking',
      description: 'Efficient booking service for PTE exams at preferred locations. Our comprehensive service includes test center selection, date booking, and complete guidance throughout the registration process. We also provide mock test recommendations and preparation strategies.',
      icon: GraduationCap,
      bgColor: 'from-blue-500 to-blue-600',
      details: [
        'Computer-based English proficiency test',
        'Results typically available within 48 hours',
        'Flexible test dates and locations',
        'Accepted by thousands of institutions worldwide'
      ],
      tips: [
        'Practice with official PTE materials',
        'Focus on time management skills',
        'Take multiple mock tests before the actual exam',
        'Review scoring criteria and test format'
      ]
    },
    {
      title: 'IELTS Booking',
      description: 'Expert guidance for IELTS exam registration and preparation. We help you choose between Academic and General Training modules, select convenient test dates, and provide comprehensive pre-test support including document verification and preparation materials.',
      icon: Calendar,
      bgColor: 'from-purple-500 to-purple-600',
      details: [
        'Available in Academic and General Training formats',
        'Results within 13 calendar days',
        'Valid for 2 years from test date',
        'Accepted globally for immigration and education'
      ],
      tips: [
        'Understand the different test sections',
        'Practice speaking with native English speakers',
        'Read international newspapers regularly',
        'Work on improving vocabulary range'
      ]
    },
    {
      title: 'TOEFL Booking',
      description: 'Streamlined TOEFL registration process with expert guidance. Our service includes test center selection, date booking, and comprehensive support throughout the registration journey. We also provide study materials and preparation strategies.',
      icon: BookOpen,
      bgColor: 'from-green-500 to-green-600',
      details: [
        'Internet-based test (iBT) format',
        'Score valid for 2 years',
        'Results available approximately 10 days after test',
        'Widely accepted for academic admissions'
      ],
      tips: [
        'Familiarize yourself with the test format',
        'Practice note-taking skills',
        'Use official TOEFL preparation materials',
        'Focus on academic English skills'
      ]
    },
    {
      title: 'GRE Booking',
      description: 'Complete GRE exam registration assistance with personalized support. We help you select test centers, choose suitable dates, and guide you through the entire registration process. Additional support includes score reporting guidance and institution selection.',
      icon: Clock,
      bgColor: 'from-red-500 to-red-600',
      details: [
        'Computer-based adaptive test',
        'Scores valid for 5 years',
        'Can be taken once every 21 days',
        'Required for many graduate programs'
      ],
      tips: [
        'Master the quantitative reasoning section',
        'Build strong vocabulary',
        'Practice with official GRE questions',
        'Take timed practice tests'
      ]
    },
    {
      title: 'GMAT Booking',
      description: 'Professional GMAT registration service with comprehensive support. Our expertise includes test center selection, date booking, and complete registration assistance. We also provide guidance on score reporting and test preparation strategies.',
      icon: MapPin,
      bgColor: 'from-yellow-500 to-yellow-600',
      details: [
        'Computer adaptive test format',
        'Scores valid for 5 years',
        'Can be taken once every 16 days',
        'Primary test for business school admission'
      ],
      tips: [
        'Focus on integrated reasoning skills',
        'Practice data sufficiency questions',
        'Develop strong analytical writing skills',
        'Time management is crucial'
      ]
    },
    {
      title: 'Duolingo',
      description: 'Simplified SAT registration process with expert guidance. We assist in test center selection, date booking, and provide complete registration support. Additional services include score reporting assistance and preparation guidance.',
      icon: Users,
      bgColor: 'from-indigo-500 to-indigo-600',
      details: [
        'Standard test for college admissions',
        'Scores valid for 5 years',
        'Given 7 times per year',
        'Tests math and evidence-based reading'
      ],
      tips: [
        'Practice with official SAT materials',
        'Focus on time management',
        'Review math fundamentals thoroughly',
        'Read extensively to improve comprehension'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container px-4 mx-auto">
        <Link 
          to="/services" 
          className="inline-flex items-center mb-6 text-blue-600 transition-colors hover:text-blue-800"
        >
          <span className="mr-2">←</span>
          Back to Services
        </Link>
        
        <div className="overflow-hidden bg-white shadow-2xl rounded-2xl">
          <div className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
              <motion.h1 
                className="mb-4 text-5xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Exam Booking Services
              </motion.h1>
              <p className="max-w-2xl text-xl text-white/90">
                Professional assistance for booking and preparing for your important academic examinations
              </p>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-12">
              <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Our Exam Services</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {examServices.map((exam, index) => (
                  <ExamCard key={index} exam={exam} index={index} />
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Why Choose Us</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div 
                  className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="mb-4 text-2xl font-semibold text-blue-900">Features</h3>
                  <ul className="space-y-3">
                    {[
                      'Personalized booking assistance',
                      'Exam schedule reminders',
                      'Test center selection guidance',
                      'Preparation tips and resources'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-blue-800">
                        <span className="mr-3 text-blue-500">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="mb-4 text-2xl font-semibold text-purple-900">Benefits</h3>
                  <ul className="space-y-3">
                    {[
                      'High success rate',
                      'Time-saving process',
                      'Regular updates on exam procedures',
                      'Ongoing support during exam preparation'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center text-purple-800">
                        <span className="mr-3 text-purple-500">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamBookingPage;