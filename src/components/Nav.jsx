import React, { useState } from 'react';
import { Link } from 'react-scroll';
 import AcademyLogo from "../assets/AcademyLogo.png";
<assets />
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={AcademyLogo}
              alt="Company Logo"
              className="h-14 w-14"
            />
            {/* <span className="ml-2 text-xl font-semibold">Company</span> */}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="about" className="hover:text-gray-400">
              About
            </a>
            
            <Link to="services" smooth={true} duration={500} className="hover:text-gray-400">
            Services
          </Link>
          <Link to="courses" smooth={true} duration={500} className="hover:text-gray-400">
          Courses
          </Link>
            <a href="online-courses" className="hover:text-gray-400">
              Online Courses
            </a>
            <a href="csr" className="hover:text-gray-400">
              CSR
            </a>
           
            <a href="careersUs" className="hover:text-gray-400 hover:cursor-pointer">
              Careers
            </a>
            <a href="contactUs" className="hover:text-gray-400 hover:cursor-pointer">
              Contact Us
            </a>
            
            <a href="becomePartner" className="hover:text-gray-400 hover:cursor-pointer">
            Become Partner
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#about" className="block px-4 py-2 hover:bg-gray-600">
            About
          </a>
          <a href="#services" className="block px-4 py-2 hover:bg-gray-600">
            Services
          </a>
          <a href="#courses" className="block px-4 py-2 hover:bg-gray-600">
            Courses
          </a>
          <a href="#online-courses" className="block px-4 py-2 hover:bg-gray-600">
            Online Courses
          </a>
          <a href="#csr" className="block px-4 py-2 hover:bg-gray-600">
            CSR
          </a>
          <a href="#blog" className="block px-4 py-2 hover:bg-gray-600">
            Blog
          </a>
          <a href="#careers" className="block px-4 py-2 hover:bg-gray-600">
            Careers
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-600">
            Contact
          </a>
          
        </div>
      )}
    </nav>
  );
};

export default Nav;
