import React, { useState } from 'react';

const ResponsiveForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    city: '',
    address: '',
    pinCode: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex justify-center items-center h-full py-10 px-30 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full  max-w-lg p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Your Details</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="contact">
            Contact Number
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            placeholder="Enter your contact number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="pinCode">
            Pin Code
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            placeholder="Enter your pin code"
            value={formData.pinCode}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="resume">
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResponsiveForm;
