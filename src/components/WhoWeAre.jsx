import React from 'react'

const WhoWeAre = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-5">
    {/* Card Container */}
    <div className="bg-white shadow-lg rounded-lg w-full md:w-10/12 lg:w-8/12 p-8">
      {/* WHO WE ARE Section */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">WHO WE ARE</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-6">
        S&S Care Skills Academy
      </h2>
      <p className="text-gray-600 leading-relaxed mb-8">
        The Institute for Industrial Development (IID) is an incubator with the Government of India,
        the Ministry of Micro, Small, and Medium Enterprises (MSME), and the Department of Start-Ups, 
        an initiative by the Government of Uttar Pradesh. IID is a unit of Samadhan Samiti working in a 
        public-private partnership with the government since 1999. Our master incubator center is the 
        Khadi and Village Industries Commission (KVIC) at Rajghat, New Delhi, and the other incubation 
        center is the National Small Industries Commission (NSIC) at Gokhle Marg, Lucknow.
      </p>

      {/* Our Key Features Section */}
      <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-6">Our Key Features</h2>
      <ul className="space-y-4">
        {[
          "Industrial Solutions",
          "Entrepreneurship Development Programme",
          "Online Consultancy",
          "Live Events (online/offline)",
        ].map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 text-lg mr-3">✔️</span>
            <p className="text-gray-700 text-lg">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
};
  

export default WhoWeAre;
