
const Navbar = ({ setSelectedCategory }) => {
  const menus = [
    "RACW/HVAC",
    "Automobile",
    "Robotics",
    "Corporate Training",
  ];

  const handleCategory = (menu) => {
    setSelectedCategory(menu);
  };

  return (
    <div className="flex justify-center py-8 items-center h-3 w-2/3 bg-neutral ml-60 rounded-lg text-white">
      <nav className="flex gap-6 text-lg font-semibold uppercase">
        {menus.map((menu, index) => (
          <div
            key={index}
            className="px-4 py-4 rounded cursor-pointer transition duration-300 hover:bg-neutral-1000"
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
