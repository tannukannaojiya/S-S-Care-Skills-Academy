import React, { useState, useEffect } from 'react';
import image2 from '../assets/heroPage2.jpg';
import image3 from '../assets/heroPage3.jpg';
const images = [
  // "https://images.pexels.com/photos/8985662/pexels-photo-8985662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // "https://images.pexels.com/photos/5463577/pexels-photo-5463577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // "https://images.pexels.com/photos/4488639/pexels-photo-4488639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  { id: 1, src: 'https://images.pexels.com/photos/8985662/pexels-photo-8985662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', alt: 'Image 1' },
    { id: 2, src: image2, alt: 'Image 2' },
    { id: 3, src: image3, alt: 'Image 3' },
];

const HeadHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <img
        key={image.id}
        src={image.src}
        alt={image.alt}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4 sm:font-normal">
          Welcome To S & S Care Skills Academy
        </h1>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeadHeroSection;