import { useNavigate, Link } from "react-router-dom";

const CourseCards = ({courses }) => {
  const navigate = useNavigate();

  const handleVeiwDetails= () => {
    navigate('/cart'); // Navigate to the cart page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  };

  const handleAddToCarts= () => {
    navigate('/cart'); // Navigate to the cart page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  };

  return (
    <div className=" ">
    <div className="grid  gap-6 pt-10 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
      {courses.map((courses, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 text-center"
        >
            <div className="h-28 w-28  "><img className="rounded-full" src={courses.img} alt="logo"/></div>
          <div className="text-2xl mt-0 font-semibold mb-2 line-clamp-1 ">{courses.name}</div>
          <p className="text-gray-600 mb-2 ">{courses.details}</p>
          <p className="text-gray-600 mb-4">Total Day: {courses.day}</p>
          <div className="flex justify-between py-2  ">
          <Link to={`/courses/${courses.id}`}
             onClick={handleVeiwDetails}
            className="bg-blue-500 text-white px-4 flex items-center rounded hover:bg-blue-600 transition">
            Veiw Details →
          </Link>
          <Link to={`/cart`}
            onClick={handleAddToCarts}
            className="bg-blue-500 text-white px-4 py-2  rounded hover:bg-blue-600 transition"
          >
            Add To Cart 
          </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CourseCards;
