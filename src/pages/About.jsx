// import React from "react";
// import AlokMohit from "../assets/AlokMohit.jpg";

// const TeamCard = ({ image, name, profile, details }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto sm:mx-4 my-4 transform transition-transform hover:scale-105 hover:shadow-xl">
//       <div className="overflow-hidden">
//         <img
//           className="w-full h-64 object-cover transform transition-all duration-300 hover:grayscale"
//           src={image}
//           alt={name}
//         />
//       </div>
//       <div className="p-6">
//         <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
//         <h3 className="text-lg text-blue-600 font-semibold mt-2">{profile}</h3>
//         <p className="text-gray-600 mt-4">{details}</p>
//       </div>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen w-full overflow-x-hidden py-10">
//       <div className="flex flex-col items-center">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
//         <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 px-4">
//           <TeamCard
//             image="https://careskillsacademy.in/wp-content/uploads/2023/09/Satyendra_Kumar480x520.webp"
//             name="Satyendra Kumar"
//             profile="FOUNDER"
//             details="Satyendra Kumar is the co-founder and managing director of S&S Care Skills Academy Private Limited. In recent years, Satyendra has been committed to taking the company to the next level. He has 25+ years of working experience in the service Industry. He is an electronics engineer by profession. He is currently running many authorized service center like Philips, LG, Samsung, Whirlpool, Tata Sky, Daiken, Intex, Voltas, and Coca-Cola."
//           />
//           <TeamCard
//             image={AlokMohit}
//             name="Alok Mohit"
//             profile="CEO"
//             details="Alok Mohit is the CEO of S & S Care Skills Academy. He has 25+ years of working experience in HR Domain. He carries with him vast experience of more than 25 years in HR Domain in FMCG, DTH, Consumer Durable and Ad Industry. He has worked in leading positions in companies like Duenna India, Dish TV, Video on Wheels and Onida. His contributions led to accelerate Companies’ growth by formulating and successfully implementing various HR strategies."
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import AlokMohit from "../assets/AlokMohit.jpg";

const TeamCard = ({ image, name, profile, details }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto sm:mx-4 my-4 transform transition-transform hover:scale-105 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          className="w-full h-64 object-cover transform transition-all duration-300 hover:grayscale"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <h3 className="text-lg text-blue-600 font-semibold mt-2">{profile}</h3>
        <p className="text-gray-600 mt-4">{details}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full overflow-x-hidden py-10">
      <div className="flex flex-col items-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        <p className="text-gray-700 text-center max-w-4xl mb-8 leading-relaxed">
          S&S Care Skills Academy (P) Ltd. was established in 2014 to impart
          skills to the employable youth of India for a better future. S&S Care
          Skills Academy is committed to creating a skilled workforce in India.
          We firmly believe that education, skills, and knowledge of superior
          quality pave the way for a rewarding career for the current and future
          generations of our country.
          <br />
        
          In our mission of skill development, we provide paid training, run
          various CSR activities, and conduct corporate training.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6">
          <TeamCard
            image="https://careskillsacademy.in/wp-content/uploads/2023/09/Satyendra_Kumar480x520.webp"
            name="Satyendra Kumar"
            profile="FOUNDER"
            details="Satyendra Kumar is the co-founder and managing director of S&S Care Skills Academy Private Limited. In recent years, Satyendra has been committed to taking the company to the next level. He has 25+ years of working experience in the service Industry. He is an electronics engineer by profession. He is currently running many authorized service centers like Philips, LG, Samsung, Whirlpool, Tata Sky, Daiken, Intex, Voltas, and Coca-Cola."
          />
          <TeamCard
            image={AlokMohit}
            name="Alok Mohit"
            profile="CEO"
            details="Alok Mohit is the CEO of S & S Care Skills Academy. He has 25+ years of working experience in HR Domain. He carries with him vast experience of more than 25 years in HR Domain in FMCG, DTH, Consumer Durable and Ad Industry. He has worked in leading positions in companies like Duenna India, Dish TV, Video on Wheels, and Onida. His contributions led to accelerate Companies’ growth by formulating and successfully implementing various HR strategies."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
