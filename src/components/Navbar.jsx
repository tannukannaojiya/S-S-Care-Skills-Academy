
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
    <div className="bg-neutral-800 mx-4 px-4 text-white py-4 sm:mx-20 md:mx-10 xl:mx-90">
      <div className=" mx-auto px-4 rounded-lg">
        <nav className="flex justify-center md:gap-6 sm:px-2 text-sm sm:text-base md:text-lg font-semibold uppercase">
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



