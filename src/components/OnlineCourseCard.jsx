import { useNavigate, Link, useParams } from "react-router-dom";
import { courseOnlineData } from "../utils/courseOnlineData";
const OnlineCourseCards = ({ coursesListCart,courses }) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-20 px-6 ">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 text-center"
        >
            <div className="h-28 w-28  "><img className="rounded-full" src={course.img} alt="logo"/></div>
          <div className="text-2xl mt-0 font-semibold mb-2 line-clamp-1 ">{course.name}</div>
          <p className="text-gray-600 mb-2 ">{course.details}</p>
          <p className="text-gray-600 mb-4">Total Day: {course.day} day</p>
          <div className="flex justify-between py-2 ">
          <Link to={`/onlineCourse/${course.id}`}
             onClick={handleVeiwDetails}
            className="bg-blue-500 text-white px-4 flex items-center rounded hover:bg-blue-600 transition"
          >
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

export default OnlineCourseCards;