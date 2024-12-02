import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  // Images to scroll through
  const images = [
    'https://www.ipfskillgateinstitute.com/wp-content/uploads/2022/12/ref.jpg',
    'https://www.livemint.com/lm-img/img/2024/11/06/600x338/AC_service_after_season_ends_1730886595036_1730886595338.jpeg',
    'https://content3.jdmagicbox.com/v2/comp/bangalore/f1/080pxx80.xx80.180314191032.u7f1/catalogue/race-spec-yelahanka-new-town-bangalore-motorcycle-repair-and-services-hero-hunk-baz6jwo7v5.jpg',
  ];

  // State to keep track of current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-200">
      {/* Map over images and display the current image */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-xl">Discover our amazing services and offers</p>
      </div>
    </div>
  );
};

export default HeroSection;
