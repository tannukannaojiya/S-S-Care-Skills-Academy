import React from 'react';
import { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {Link, useLocation } from 'react-router-dom';

import { Events, scroll, scrollSpy} from 'react-scroll';
const Footer = () => {
  const location = useLocation();
  
  useEffect(() => {    
    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const handleScrollLinkClick = (sectionId) => {
    // If on the same page, scroll to section
    if (location.pathname === '/') {
      scroll.scrollTo(sectionId);
    } else {
      // Otherwise, navigate to the home page first
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <>
    <footer className="bg-gray-800 text-gray-200 py-10 px-4 md:px-20 sm:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About the Academy Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About the Academy</h2>
          {/* <p className="text-gray-400 text-justify">
            S&S Care Skills Academy (P) Ltd. was established in the year 2014 to impart skills to the 
            employable youth of India for a better future. S&S Care Skills Academy is committed to creating a 
            skilled workforce in India. We firmly believe that education, skills, and knowledge of superior quality 
            pave the way for a rewarding career for the current and future generation of our country.
            
            In our mission of skill development, we provide paid trainings, run various CSR activities, & corporate trainings.
          </p> */}
          <p className="text-gray-400 text-justify">
          S&S Care Skills Academy is a leading hands-on learning provider in
           various technical courses such as AC Repair, PCB Repair, Mobile 
           Repair, Automobile Repair and many more. Since our launch in 2014, 
           we have been helping over thousands of youths from all over India 
           to learn technical skills through our wide range of courses and 
           hands-on labs to become employable/potential learners.t, we 
           provide paid trainings, run various CSR activities, & corporate 
           trainings.
          </p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 grid grid-cols-1">
            <Link to="/" className='cursor-pointer'>Home</Link>
            <Link to="https://careskillsacademy.in/about" className='cursor-pointer' onClick={scrollToTop}>About Us</Link>
            <Link to="/offlineCourses" className='cursor-pointer' onClick={scrollToTop}>Courses</Link>
            <Link to="/onlineCourse" className='cursor-pointer' onClick={scrollToTop}>Online Courses</Link>
            <Link to="/csr" className='cursor-pointer' onClick={scrollToTop}>CSR</Link>
            <Link to="/careerPage" className='cursor-pointer' onClick={scrollToTop}>Carrers</Link>
            <Link to="/contactUs" className='cursor-pointer' onClick={scrollToTop}>Contact Us</Link>
            <Link to="/becomePartner" className='cursor-pointer' onClick={scrollToTop}>Partner With Us</Link>
          </ul>
        </div>

        {/* Social Media Icons Section */}
        <div>
          {/* <h2 className="text-xl font-semibold mb-4">Follow Us</h2> */}
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/sscareskillsacademynoida" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="https://x.com/careskillsnoida?s=11&t=sOFQ7RqFa8PA7UJcCwwIQA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/sscareskillsacademy/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/sscareskillsacademy/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
            <a href="https://www.youtube.com/@sscareskillsacademy/videos" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>
        {/* Contact Us Section */}

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">
            Address: A-56, Sector - 6, Noida, Uttar Pradesh 201301, India
          </p>
          <p className="text-gray-400 mt-2">Mobile: <a href="tel:+919266116110" className="hover:underline">+91 9266116110</a></p>
          <p className="text-gray-400 mt-2">Email: <a href="mailto:info@careskillsacademy.in" className="hover:underline">info@careskillsacademy.in</a></p>
          <p className="text-gray-400 mt-2">Website: <a href="https://www.careskillsacademy.in" target="_blank" rel="noopener noreferrer" className="hover:underline">www.careskillsacademy.in</a></p>
        </div>
      </div>
    </footer>

     {/* Footer Bottom */}
     <div className="text-center">
     <div className="bg-gray-900 pt-5 text-gray-500 text-sm h-16 xs:px-4">
     © {new Date().getFullYear()} S&S Care Skills Academy. All rights reserved.
   </div>
   </div>
    </>
  );
};

export default Footer;
