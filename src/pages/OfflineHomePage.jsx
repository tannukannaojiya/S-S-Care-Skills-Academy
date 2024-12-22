import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { courseOfflineData } from "../utils/courseOfflineData";
import OfflineCourseCard from "../components/OfflineCourseCard";

const OfflineHomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("RACW/HVAC");

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Navbar setSelectedCategory={setSelectedCategory} />
      <OfflineCourseCard courses={courseOfflineData[selectedCategory] || []} />
    </div>
  );
};

export default OfflineHomePage;
