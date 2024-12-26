import React from 'react';
import { services } from '../utils/services';

const Services = () => {
  return (
    <div className="p-4 bg-gray-100 " >
      <h1 className="text-4xl font-bold text-center mb-6">Our Courses</h1>
      <div className="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-justify">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 rounded-lg hover:scale-95 transform transition-transform"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
            <div className=''>
            {/* <button className="text-blue-600 font-bold border-b-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 py-2 px-4 rounded">
              Explore Courses
            </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
