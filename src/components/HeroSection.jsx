// import React, { useEffect, useState } from "react";

// const HeroSection = () => {
//   const images = [
//     "https://www.shutterstock.com/image-vector/cheerful-funny-cartoon-childrens-robot-600nw-2407552137.jpg",
//     "https://www.shutterstock.com/image-vector/cheerful-funny-cartoon-childrens-robot-600nw-2407552137.jpg",
//     "https://www.shutterstock.com/image-vector/cheerful-funny-cartoon-childrens-robot-600nw-2407552137.jpg",
//     "https://www.shutterstock.com/image-vector/cheerful-funny-cartoon-childrens-robot-600nw-2407552137.jpg",
//     "https://www.shutterstock.com/image-vector/cheerful-funny-cartoon-childrens-robot-600nw-2407552137.jpg",
//     "https://www.shutterstock.com/image-vector/cheerful-funny-cartoon-childrens-robot-600nw-2407552137.jpg",
//     "https://www.shutterstock.com/image-vector/cheerful-funny-cartoon-childrens-robot-600nw-2407552137.jpg",
//     "https://www.shutterstock.com/image-vector/cheerful-funny-cartoon-childrens-robot-600nw-2407552137.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // 5 seconds
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="relative w-64 h-64 overflow-hidden">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Image ${index + 1}`}
//             className={`absolute top-0 left-0 w-full h-full object-cover rounded-full transition-transform duration-1000 ${
//               index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-75"
//             }`}
//             style={{ zIndex: index === currentIndex ? 10 : 0 }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
