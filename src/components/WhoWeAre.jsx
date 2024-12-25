import React from 'react';
import certification from '../assets/certification.jpg';
const WhoWeAre = () => {
  return (
    <div className="bg-gray-100 pb-4 min-h-screen flex flex-col justify-center items-center sm:px-5 xs:px-5">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">WHO WE ARE</h1>
      {/* Card Container */}
      <div className="bg-white p-5 shadow-lg rounded-lg w-full md:w-11/12 lg:w-10/12 flex flex-col md:flex-row "> 
      
        {/* Image Container */}
        <div className="md:w-1/2 pt-4">
          <img 
            src={certification} 
            alt="S&S Care Skills Academy" 
            className="w-full h-auto object-cover rounded-lg md:rounded-l-lg" 
          />
        </div>

        {/* Content Container */}
        <div className="md:w-1/2 p-6 md:p-8">
          {/* WHO WE ARE Section */}
          
          <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-6">
            S&S Care Skills Academy
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify mb-8">
            S&S Care Skills Academy(P) Ltd, was established in the year 2014 with the aim to impart skills to the employable youth of India for a better future. S&S Care Skills Academy is committed to create skilled workforce in India. We firmly believe that education, skills and knowledge of superior quality pave the way for a rewarding career for the current and future generation of our country.
            In our mission of skill development, we provide paid trainings, run various CSR activities & Corporate trainings.
          </p>

          {/* Our Key Features Section */}
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-6">Our Key Features</h2>
          <ul className="space-y-4">
            {[
              "Experienced Trainers",
              "Practical Focus",
              "Supportive Resources",
              "Live Events (Offline)",
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-500 text-lg mr-3">✔️</span>
                <p className="text-gray-700 text-lg">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;