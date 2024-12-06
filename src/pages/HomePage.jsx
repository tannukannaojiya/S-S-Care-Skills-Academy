// src/pages/HomePage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCards from "../components/CourseCard";

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

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("AC");

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Navbar setSelectedCategory={setSelectedCategory} />
      <CourseCards courses={allCourses[selectedCategory] || []} />
    </div>
  );
};

export default HomePage;
