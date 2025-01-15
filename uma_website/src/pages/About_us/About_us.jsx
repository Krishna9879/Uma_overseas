import React, { useState, useEffect } from 'react';
import './About_us.css';


const About_us = () => {
  return( 
    <div>
        <div className='head1'>
              <h1 className='about'>About Us</h1>
        </div>
        <div className='head2' >
             <img src="https://assets.studies-overseas.com/our_vision_834e3bdca8.svg" className='img1'/>
              <div>
              <h1 className='h3'> Our Vision</h1>
              <p className='para1'>
              Our vision is to make a transformative impact on Study Abroad Service Sector through continual innovation in student services by connecting institutions, recruiters, and students across the globe.
              </p>
              </div>
        </div>
        
        <div className='head2' >
             <img src="https://assets.studies-overseas.com/our_mission_510c5e59a3.svg" className='img1'/>
              <div>
              <h1 className='h3'> Our Mission</h1>
              <p className='para1'>
              Our mission is to build a comprehensive overseas education ecosystem where students and universities can seamlessly connect and discover opportunities that align with their aspirations. We are dedicated to making global education accessible to all, leveraging advanced technology through our innovative online platform. What sets us apart is our personalized approach, ensuring every student receives tailored guidance throughout their journey. We are breaking barriers daily, enabling students and institutions to harness our expertise and global network to achieve their academic and professional ambitions, fostering success on an international scale. </p>
              </div>
        </div>
        
        <div className='box1'>
             <div className='box2'>
                     <h1 className='ab'>About us</h1>
                     <div className='ul'>
                     </div>
                <p className='para2'> Our mission is to empower students with life-changing opportunities by connecting them to top global education programs, services. Through our cutting-edge platform, we offer personalized guidance in areas such as PTE/IELTS training, visa applications, international tours, and more. We are dedicated to simplifying the study abroad process, making global education accessible and achievable for everyone. With a unique blend of technology and personal support, we help students and partners reach their goals, transcending borders and unlocking world of possibilities. Every day, we strive to make dreams of studying overseas a reality.</p>     
             </div>
        </div>

     
    </div>
  )
}
export default About_us;