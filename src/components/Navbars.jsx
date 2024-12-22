import React, { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Link, NavLink } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
// import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import AcademyLogo from '../assets/AcademyLogo.png';

const Navbars = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="bg-neutral text-neutral-content shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 2xl:space-x-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center sm: ">
            <Link to="/" className="flex items-center cursor-pointer sm:pr-2">
              <img src={AcademyLogo} alt="Academy Logo" className="h-14 w-14 lg:h-12 lg:w-12 md:h-11 md:w-11" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-4 md:space-x-2 md:text-xs">
            <Link to="/" className="hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition duration-300">
              About
            </Link>
            {/* <LinkScroll to="courses" smooth={true} duration={500} className="hover:text-blue-400 transition duration-300">
              Courses
            </LinkScroll> */}
            <Link to="/offlineCourses" className="hover:text-blue-400 transition duration-300">Courses</Link>
    
            <Link to="/onlineCourse" className="hover:text-blue-400 transition duration-300">
              Online Courses
            </Link>
            <Link to="/csr" className="hover:text-blue-400 transition duration-300">
              CSR
            </Link>
            <Link to="/careerPage" className="hover:text-blue-400 transition duration-300">
              Careers
            </Link>
            <Link to="/contactUs" className="hover:text-blue-400 transition duration-300">
              Contact Us
            </Link>
            <Link to="/becomePartner" className="hover:text-blue-400 transition duration-300">
              Partner With Us
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex space-x-2 items-center lg-space-x-0.5 lg:pl-1">
            <Link
              to="/login"
              className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 "
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </Link>
            <NavLink to="/cart" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <BsCart3 className="h-6 w-6" />
                <span className="badge badge-sm badge-primary indicator-item">0</span>
              </div>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {isMobileOpen ? (
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
      {isMobileOpen && (
        <div className="md:hidden bg-gray-800 text-white space-y-2 px-4 py-3">
          <Link to="/" className="block hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" className="block hover:text-blue-400">
            About
          </Link>
          <Link to="/offlineCourses" className="block hover:text-blue-400">Courses</Link>
          <Link to="/onlineCourse" className="block hover:text-blue-400">
            Online Courses
          </Link>
          <Link to="/csr" className="block hover:text-blue-400">
            CSR
          </Link>
          <Link to="/careerPage" className="block hover:text-blue-400">
            Careers
          </Link>
          <Link to="/contact" className="block hover:text-blue-400">
            Contact Us
          </Link>
          <Link to="/partner" className="block hover:text-blue-400">
            Partner With Us
          </Link>
          <div className="flex space-x-4 mt-4 md:space-x-2 md:px-2 sm:hidden">
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 "
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbars;

