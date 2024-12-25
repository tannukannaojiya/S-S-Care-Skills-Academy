import React, { useState } from "react";
import Navbar from "../components/Navbar";
import OnlineCourseCard from "../components/OnlineCourseCard";
import { courseOnlineData } from "../utils/courseOnlineData";


const OnlineHomePage= () => {
  const [selectedCategory, setSelectedCategory] = useState("RACW/HVAC");

  return (
    <div className="bg-gray-100 min-h-screen py-10 overflow-hidden ">
      <Navbar setSelectedCategory={setSelectedCategory} />
      <OnlineCourseCard courses={courseOnlineData[selectedCategory] || []} />
    </div>
  );
};

export default OnlineHomePage;
