import React, { useState } from "react";
import Navbar from "../components/Navbar";
// import CourseCards from "../components/CourseCard";
import OfflineCourseCard from "./OfflineCourseCard";

const allCourses = {
  "RACW/HVAC": [
    {id:1, name: "AC Repairing & Maintenance Course", day:"45", details: "Learn AC fundamentals.", img:"https://img.freepik.com/free-photo/medium-shot-people-wearing-safety-helmets_23-2149366668.jpg?t=st=1733999672~exp=1734003272~hmac=124d8c7df2181f67c6a48902ab479ebdec075537d7ef926c7701500902c762f8&w=740", price: "$100", duration: "6 hours" },
    {id:2, name: "Refrigeration Repairing & Maintenance Course ", day:"90", details: "Learn Refrigeration fundamentals.", img:"https://t3.ftcdn.net/jpg/02/80/17/10/360_F_280171078_3f2QC6x8NG17c7W8jqsu74EVDBVDud8o.jpg", video: "https://www.youtube.com/embed/Ke90Tje7VS0", price: "$100", duration: "6 hours" },
    {id:3, name: "HVAC Repairing & Maintenance Course", day:"90", details: "Learn HVAC fundamentals.", img:"https://media.istockphoto.com/id/1437896577/photo/air-conditioner-technician-repairing-central-air-conditioning-system-with-outdoor-tools.jpg?s=612x612&w=0&k=20&c=Vt5lo-He1rM3_d-G5GHaFVYD0lyMGAtsUccuwNaCe08=", video: "https://www.youtube.com/embed/Ke90Tje7VS0", price: "$100", duration: "6 hours" },
    {id:4, name: "Washing Machine Repairing & Maintenance Course ", day:"90", details: "Learn Washing Machine fundamentals.", img:"https://media.istockphoto.com/id/1078745094/photo/repair-and-service-of-a-damaged-washing-machine.jpg?s=612x612&w=0&k=20&c=ZXnHkNHl-N_i9FcEn56mEqQXHpP8qdlZGfaH6qRs3m4=", video: "https://www.youtube.com/embed/KN6Hb7LybAI?si=ogckaMliSEuCbR-e", price: "$120", duration: "8 hours" },  
  ],
  
  Automobile: [
    {id:5, name: "Automobile Repairing & Maintenance Course", day:"90", details: "Learn Automobile fundamentals..", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa84cTs5QHPJ59eWZa4lT05N-1gJOssuuFoA&s"},
    {id:6, name: "Car Scanning Course", day:"30", details: "Learn Car Scanning fundamentals.", img:"https://www.shutterstock.com/image-photo/professional-car-mechanic-repair-service-600nw-2042089037.jpg"},
    {id:7, name: "Car Electrical Course", day:"30", details: "Learn Car Electrical fundamentals.", img:"https://www.allamericanchryslerodessa.com/blogs/3096/wp-content/uploads/2023/05/download-2023-06-13T171034.229.png"},
    {id:8, name: "Bike Repairing Course", day:"30", details: "Learn Car Scanning fundamentals..", img:"https://5.imimg.com/data5/XM/BH/LN/SELLER-38802900/yamaha-bike-repairing-services.png" },
    {id:9, name: "Electric Bike Repairing Course", day:"30", details: "Learn Electric Bike fundamentals..", img:"https://5.imimg.com/data5/SELLER/Default/2023/5/305062200/SG/CF/BD/75161098/electric-scooter-repairing-service-500x500.jpg"},
    {id:10, name: "Mechanical Bike Repairing Course", day:"45", details: "Learn Mechanical Bike fundamentals..", img:"https://www.shutterstock.com/image-photo/mechanic-hold-hex-key-wrench-600nw-1796531065.jpg" },
    {id:11, name: "Scooter Repairing Course", day:"30", details: "Learn Scooter fundamentals..", img:"https://static.vecteezy.com/system/resources/previews/046/326/542/non_2x/a-motorcycle-mechanic-inspecting-a-damaged-engine-photo.jpg" },
    {id:12, name: "Electric Scooter Repairing Course", day:"30", details: "Learn Electric Scooter fundamentals..", img:"https://5.imimg.com/data5/SELLER/Default/2023/9/342526829/XY/WE/YW/91667407/electric-scooter-repairing-service.jpg" },
    {id:13, name: "Mechanical Scooter Repairing Course", day:"45", details: "Learn Mechanical Scooter fundamentals..", img:"https://static.vecteezy.com/system/resources/previews/035/514/400/non_2x/mechanic-using-wrench-and-socket-to-remove-auto-transmission-system-or-rear-clutch-pulley-of-scooter-motorcycles-working-in-garage-maintenance-repair-motorcycle-concept-selective-focus-photo.jpg" },
  
  ],
  Robotics: [
    {id:14, name: "Robotics Course", day:"60", details: "Learn Robotics fundamentals..", img:"https://media.istockphoto.com/id/966248982/photo/robot-with-education-hud.jpg?s=612x612&w=0&k=20&c=9eoZYRXNZsuU3edU87PksxN4Us-c9rB6IR7U_IGZ-U8=" }, 
  ],
  "Corporate Training": [
    {id:15, name: "Corporate Training", day:"15", details: "Learn Corporate Training fundamentals..", img:"https://mediaindia.eu/wp-content/uploads/2016/06/Corporate-training.jpg" },
  ],
};

const OfflineHomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("RACW/HVAC");

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Navbar setSelectedCategory={setSelectedCategory} />
      <OfflineCourseCard courses={allCourses[selectedCategory] || []} />
    </div>
  );
};

export default OfflineHomePage;
