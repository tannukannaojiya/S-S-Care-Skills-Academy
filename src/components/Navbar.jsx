// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = ({ setSelectedCategory }) => {
  const menus = [
    "AC",
    "Washing Machine",
    "Car",
    "Automobile",
    "Bike",
    "Scooter",
  ];

  const handleCategory = (menu) => {
    setSelectedCategory(menu);
  };

  return (
    <div className="flex justify-center items-center h-20 w-2/3 bg-blue-400 ml-60 rounded-lg text-white">
      <nav className="flex  gap-6 text-lg font-semibold">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="px-4 py-4 rounded cursor-pointer transition duration-300 hover:bg-blue-500"
            onClick={() => handleCategory(menu)}
          >
            {menu}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
