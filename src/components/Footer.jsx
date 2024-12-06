import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About the Academy Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About the Academy</h2>
          <p className="text-gray-400 text-justify">
            S&S Care Skills Academy (P) Ltd. was established in the year 2014 to impart skills to the 
            employable youth of India for a better future. S&S Care Skills Academy is committed to creating a 
            skilled workforce in India. We firmly believe that education, skills, and knowledge of superior quality 
            pave the way for a rewarding career for the current and future generation of our country.
            <br />
            In our mission of skill development, we provide paid trainings, run various CSR activities, & corporate trainings.
          </p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            <li><a href="#courses" className="hover:underline">Courses</a></li>
            <li><a href="#admission" className="hover:underline">Admission</a></li>
          </ul>
        </div>

        {/* Social Media Icons Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.facebook.com/sscareskillsacademynoida" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
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
     <div className="bg-gray-900 pt-5 text-gray-500 text-sm h-14">
     © {new Date().getFullYear()} S&S Care Skills Academy. All rights reserved.
   </div>
   </div>
    </>
  );
};

export default Footer;