import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCards from "../components/CourseCard";
import { allCourses } from "../utils/courseData";


const HomePageCourses = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("RACW/HVAC");

  return (
    <div className="bg-gray-100  h-full pb-8 pt-4">
      <Navbar setSelectedCategory={setSelectedCategory} />
      <CourseCards courses={allCourses[selectedCategory] || []} />
    </div>
  );
};

export default HomePageCourses;
