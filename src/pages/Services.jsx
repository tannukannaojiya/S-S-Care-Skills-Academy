import React from 'react';

const services = [
  { name: 'RACW Training', description: 'Training in Robotics and Computer Vision.' },
  { name: 'Automobile Training', description: 'Hands-on experience with automobile technology.' },
  { name: 'Robotics Training', description: 'Learn the fundamentals of robotics engineering.' },
  { name: 'Educational and Physical', description: 'Programs to enhance both educational and physical growth.' },
  { name: 'Corporate Training', description: 'Develop skills for corporate success and leadership.' },
  { name: 'Career Counseling', description: 'Guidance to help you choose the right career path.' },
];

const Services = () => {
  return (
    <div className="py-5 px-4 bg-gray-100" >
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg hover:scale-105 transform transition-transform"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.name}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <button className="text-blue-600 font-bold border-b-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded">
              Explore Courses
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
