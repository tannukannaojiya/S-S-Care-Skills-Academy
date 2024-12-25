import React from 'react';

const HeroSection = () => {
  const images = [
    'https://presentations.gov.in/wp-content/uploads/2020/06/NSDC-Preview.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHj89PVsfm4bgUG6RaLd6gExymYHTmK6ee4g&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPHvDSPRYA7IaPW3l5Ns60I6q0yBXHSTSXA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvq4g205X1Ms6jHQPHtRtbyq6yYxq9jAETzw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MS_jQ9Z9i3eTzikHM43K3mxGne85p0w4LA&s',
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 py-12 xs:overflow-x-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Affiliations

      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 overflow-hidden rounded-full shadow-lg ${index === 0 || index === 1 || index === 4 ? 'object-contain' : 'object-cover'} 
            transform transition-transform duration-200 hover:scale-110`}
          >
            <img
              src={src}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
