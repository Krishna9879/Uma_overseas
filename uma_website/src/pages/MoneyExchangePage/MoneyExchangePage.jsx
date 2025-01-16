import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import money from "../../assets/moneyservice.jpg";
import './MoneyExchangePage.css';
export  function MoneyExchangePage() {
   useEffect(() => {
       const observerOptions = {
         threshold: 0.2,
         rootMargin: "0px"
       };
   
       const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
           if (entry.isIntersecting) {
             entry.target.classList.add('animate-in');
           }
         });
       }, observerOptions);
   
       const animatedElements = document.querySelectorAll('.scroll-animate');
       animatedElements.forEach(el => observer.observe(el));
   
       return () => {
         animatedElements.forEach(el => observer.unobserve(el));
       };
     }, []);
   
     const services = [
       {
         title: 'Major Currency',
         description: 'Comprehensive guidance in choosing the right country for your studies.',
         image: money
       },
       {
         title: 'Exchange Rates',
         description: 'Expert advice on selecting the best universities for your course.',
         image: money
       },
       {
         title: 'Wire Transfer',
         description: 'Tailored support for selecting the most suitable courses.',
         image:money
       },
       {
         title: 'Cash Exchange',
         description: 'Step-by-step assistance with university applications.',
         image: money
       },
       {
         title: 'Rate Alerts',
         description: 'Information on available scholarships and application help.',
         image: money
       },
       {
         title: 'supports',
         description: 'Essential tips and guidance for preparing to study abroad.',
         image: money
       }
     ];
   
     return (
       <div className="min-h-screen py-12 bg-gray-50">
         <div className="container px-4 mx-auto">
           <Link to="/services" className="inline-block mb-6 text-red-600 hover:text-red-800">
             ← Back to Services
           </Link>
           
           <div className="bg-white rounded-lg shadow-xl">
             <div className="hero-section">
               <img src={money} alt="Study Abroad" className="hero-image"/>
               <div className="hero-overlay">
                 <h1 className="headline-box">Money Exchange Services</h1>
               </div>
             </div>
   
             <div className="p-8">
               <div className="mb-8">
                 <h2 className="mb-8 headline-box">competative Rate For Currency Exchange</h2>
                 <div className="space-y-12">
                   {services.map((service, index) => (
                     <div 
                       key={index} 
                       className={`scroll-animate service-row ${index % 2 === 0 ? 'from-left' : 'from-right'}`}
                     >
                       <div className="service-content">
                         <div className="service-image-container">
                           <img src={service.image} alt={service.title} className="service-image"/>
                           <h3 className="service-title">{service.title}</h3>
                         </div>
                         <div className="service-text">
                           <p>{service.description}</p>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
   
               <div className="pt-8 border-t">
                 <h2 className="mb-8 headline-box">Why Choose Our Study Abroad Services?</h2>
                 <div className="grid gap-6 md:grid-cols-2">
                   <div className="scroll-animate from-left">
                     <h3 className="mb-3 headline-box">Features</h3>
                     <ul className="space-y-2">
                       <li className="flex items-center">
                         <span className="mr-2">•</span>
                         Personalized study plans
                       </li>
                       <li className="flex items-center">
                         <span className="mr-2">•</span>
                         Application document review
                       </li>
                       <li className="flex items-center">
                         <span className="mr-2">•</span>
                         Visa application assistance
                       </li>
                       <li className="flex items-center">
                         <span className="mr-2">•</span>
                         Pre-departure orientation
                       </li>
                     </ul>
                   </div>
                   <div className="scroll-animate from-right">
                     <h3 className="mb-3 headline-box">Benefits</h3>
                     <ul className="space-y-2">
                       <li className="flex items-center">
                         <span className="mr-2">•</span>
                         High admission success rate
                       </li>
                       <li className="flex items-center">
                         <span className="mr-2">•</span>
                         Comprehensive support throughout the process
                       </li>
                       <li className="flex items-center">
                         <span className="mr-2">•</span>
                         Regular updates on opportunities
                       </li>
                       <li className="flex items-center">
                         <span className="mr-2">•</span>
                         Ongoing support after arrival
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