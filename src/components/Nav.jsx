import  { useState } from 'react';
import { Link as LinkScroll} from 'react-scroll';
import { Link } from 'react-router-dom';
 import AcademyLogo from "../assets/AcademyLogo.png";
<assets />
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src={AcademyLogo}
              alt="Company Logo"
              className="h-14 w-14"
            />
          </Link>

          {/* Desktop Menu */}
          
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-400 cursor-pointer">
              Home
            </Link>
            <Link to="about" className="hover:text-gray-400 cursor-pointer">
              About
            </Link>
          <LinkScroll to="courses" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
          Courses
          </LinkScroll>
            <Link to="online-courses" className="hover:text-gray-400 cursor-pointer">
              Online Courses
            </Link>
            <Link to="csr" className="hover:text-gray-400 cursor-pointer">
              CSR
            </Link>
           
            <Link to="careersUs" className="hover:text-gray-400 hover:cursor-pointer">
              Careers
            </Link>
            <Link to="contactUs" className="hover:text-gray-400 hover:cursor-pointer">
              Contact Us
            </Link>
            
            <Link to="becomePartner" className="hover:text-gray-400 hover:cursor-pointer">
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"
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
          <a href="/" className="hover:text-gray-400 cursor-pointer">
              Home
            </a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
            About
          </a>
          <a href="#courses" className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
            Courses
          </a>
          <a href="#online-courses" className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
            Online Courses
          </a>
          <a href="#csr" className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
            CSR
          </a>
          
          <a href="#careers" className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
            Careers
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
            Contact
          </a>
          <a href="#becomePartner" className="block px-4 py-2 hover:bg-gray-600 cursor-pointer">
          Partner With Us
          </a>
          
        </div>
      )}
    </nav>
  );
};

export default Nav;