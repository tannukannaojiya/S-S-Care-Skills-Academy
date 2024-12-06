// src/pages/HomePage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCards from "../components/CourseCard";

const allCourses = {
  AC: [
    { name: "AC Repairing & Maintenance Course", details: "Learn AC fundamentals.", video: "https://www.youtube.com/embed/Ke90Tje7VS0", price: "$100", duration: "6 hours" },
    { name: "Refrigeration Repairing & Maintenance Course ", details: "Learn AC fundamentals.", video: "https://www.youtube.com/embed/Ke90Tje7VS0", price: "$100", duration: "6 hours" },
    { name: "HVAC Repairing & Maintenance Course", details: "Learn AC fundamentals.", video: "https://www.youtube.com/embed/Ke90Tje7VS0", price: "$100", duration: "6 hours" },
    
  ],
  "Washing Machine" : [
    { name: "Washing Machine Repairing & Maintenance Course ", details: "Learn React Native fundamentals.", video: "https://www.youtube.com/embed/MJzmZ9qmdaE", price: "$120", duration: "8 hours" },
  ],
  Car: [
    { name: "Car Scanning Course", details: "Learn JavaScript step by step.", video: "https://www.youtube.com/embed/PkZNo7MFNFg", price: "$80", duration: "5 hours" },
    { name: "Car Electrical Course", details: "Learn JavaScript step by step.", video: "https://www.youtube.com/embed/PkZNo7MFNFg", price: "$80", duration: "5 hours" },
  ],
  // Automobile: [
  //   { name: "HTML Mastery", details: "Master HTML and semantic structure.", video: "https://www.youtube.com/embed/UB1O30fR-EE", price: "$50", duration: "4 hours" },
  // ],
  Automobile: [
    { name: "Automobile Repairing & Maintenance Course", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
    { name: "Automobile Repairing & Maintenance Course", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
  ],
  Bike: [
    
    { name: "Bike Repairing Course...........................", details: "Learn Tailwind CSS utilities.", video: "https://www.youtube.com/embed/dFgzHOX84xQ", price: "$70", duration: "6 hours" },
    { name: "Electric Bike Repairing Course...........", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
    { name: "Mechanical Bike Repairing Course.....", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
  ],
  Scooter: [
    { name: "Scooter Repairing Course ...................", details: "Learn Tailwind CSS utilities.", video: "https://www.youtube.com/embed/dFgzHOX84xQ", price: "$70", duration: "6 hours" },
    { name: "Electric Scooter Repairing Course..........", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
    { name: "Mechanical Scooter Repairing Course", details: "Responsive CSS techniques.", video: "https://www.youtube.com/embed/1Rs2ND1ryYc", price: "$60", duration: "5 hours" },
  ],
};

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("AC");

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar setSelectedCategory={setSelectedCategory} />
      <CourseCards courses={allCourses[selectedCategory] || []} />
    </div>
  );
};

export default HomePage;
