// src/components/CourseCard.jsx
import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

const allCourses = {
  AC: [
    {id:1, name: "AC Repairing & Maintenance Course", details: "Learn AC fundamentals.", video: "https://www.youtube.com/embed/Ke90Tje7VS0", price: "$100", duration: "6 hours" },
    {id:2, name: "Refrigeration Repairing & Maintenance Course ", details: "Learn AC fundamentals.", video: "https://www.youtube.com/embed/Ke90Tje7VS0", price: "$100", duration: "6 hours" },
    {id:3, name: "HVAC Repairing & Maintenance Course", details: "Learn AC fundamentals.", video: "https://www.youtube.com/embed/Ke90Tje7VS0", price: "$100", duration: "6 hours" },
    
  ],
  "Washing Machine" : [
    {id:4, name: "Washing Machine Repairing & Maintenance Course ", details: "Learn React Native fundamentals.", video: "https://www.youtube.com/embed/MJzmZ9qmdaE", price: "$120", duration: "8 hours" },
  ],
  Car: [
    {id:5, name: "Car Scanning Course", details: "Learn JavaScript step by step.", video: "https://www.youtube.com/embed/PkZNo7MFNFg", price: "$80", duration: "5 hours" },
    {id:6, name: "Car Electrical Course", details: "Learn JavaScript step by step.", video: "https://www.youtube.com/embed/PkZNo7MFNFg", price: "$80", duration: "5 hours" },
  ],
  
  Automobile: [
    {id:7, name: "Automobile Repairing & Maintenance Course", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
   
  ],
  Bike: [
    
    {id:8, name: "Bike Repairing Course", details: "Learn Tailwind CSS utilities.", video: "https://www.youtube.com/embed/dFgzHOX84xQ", price: "$70", duration: "6 hours" },
    {id:9, name: "Electric Bike Repairing Course", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
    {id:10, name: "Mechanical Bike Repairing Course", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
  ],
  Scooter: [
    {id:11, name: "Scooter Repairing Course", details: "Learn Tailwind CSS utilities.", video: "https://www.youtube.com/embed/dFgzHOX84xQ", price: "$70", duration: "6 hours" },
    {id:12, name: "Electric Scooter Repairing Course", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
    {id:13, name: "Mechanical Scooter Repairing Course", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
  ],
};

const Courses = (addCart) => {
    const navigate = useNavigate();
    let {id} = useParams();
    // const course = allCourses
    const handleAddCart = (addCart) =>{
        navigate("/addCart");
      }
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
      {/* Video */}
      <iframe
        className="w-full h-48"
        src="https://www.youtube.com/embed/your-video-id"
        title="Course Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Course Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Course Name</h2>
        <p className="text-gray-600 mt-2">Price: ₹999</p>
        <p className="text-gray-600 mt-2">Total Lecture: 18</p>

        {/* Features */}
        <ul className="mt-4 text-sm text-gray-600 space-y-2">
          <li>🕒 Duration: 17:43</li>
          <li>📚 13 Lectures</li>
          <li>🏅 Certificate Available</li>
          <li>📈 Training Assessment</li>
          <li>🎥 9 Videos</li>
          <li>📄 4 PDFs</li>
          <li>🌐 Language: Hindi</li>
        </ul>

        {/* Add to Cart Button */}
        <button onClick={() => handleAddCart(addCart)} className="mt-4 bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Courses;
