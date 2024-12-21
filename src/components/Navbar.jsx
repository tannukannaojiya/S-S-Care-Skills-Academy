
// const Navbar = ({ setSelectedCategory }) => {
//   const menus = [
//     "RACW/HVAC",
//     "Automobile",
//     "Robotics",
//     "Corporate Training",
//   ];

//   const handleCategory = (menu) => {
//     setSelectedCategory(menu);
//   };

//   return (
//     <div className="flex justify-center sm:flex sm:justify-center py-8 items-center h-3 w-2/3 bg-neutral ml-60 rounded-lg text-white">
//       <nav className="flex gap-6 text-lg font-semibold uppercase ">
//         {menus.map((menu, index) => (
//           <div
//             key={index}
//             className="px-4 py-4 rounded cursor-pointer transition duration-300 hover:bg-neutral-1000"
//             onClick={() => handleCategory(menu)}
//           >
//             {menu}
//           </div>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

const Navbar = ({ setSelectedCategory }) => {
  const menus = [
    "RACW/HVAC",
    "Automobile",
    "Robotics",
    "Corporate",
  ];

  const handleCategory = (menu) => {
    setSelectedCategory(menu);
  };

  return (
    <div className="bg-neutral-800 text-white py-4 sm:mx-10 lg:mx-56 md:mx-32 xl:64 2xl:mx-64">
      <div className="w-2/3 mx-auto px-4 rounded-lg">
        <nav className="flex justify-center gap-6 text-sm sm:text-base md:text-lg font-semibold uppercase">
          {menus.map((menu, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded cursor-pointer transition duration-300 hover:bg-neutral-700"
              onClick={() => handleCategory(menu)}
            >
              {menu}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;



