
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
    <div className="flex justify-center">
    <div className="bg-neutral-800 w-2/5 flex justify-center text-white py-4  md:w-2/3 sm:w-auto">
      <div className="rounded-lg">
        <nav className="flex justify-center font-semibold uppercase text-sm md:text-sm ">
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
    </div>
  );
};

export default Navbar;



