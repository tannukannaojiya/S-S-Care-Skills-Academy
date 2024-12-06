
import { useNavigate } from "react-router-dom";

const CourseCards = ({ courses, addCart }) => {
  const navigate = useNavigate();

  const handleDetails = (courses) => {
    navigate("/courses", { state: { courses } });
  };
  const handleAddCart = (addCart) =>{
    navigate("/addCart");
  }

  return (
    <div className=" ">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 pl-6 pr-6">
      {courses.map((courses, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 text-center"
        >
            <div className="h-16 w-16"><img src="https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-little-cute-robot-funny-virtual-assistant-bot-png-image_11549965.png" alt="logo"/></div>
          <div className="text-2xl mt-0 font-semibold mb-2">{courses.name}</div>
          <p className="text-gray-600 mb-2">{courses.details}</p>
          <p className="text-gray-600 mb-4">Total Lecture: 18</p>
          <div className="flex justify-between pd-16">
          <button
            onClick={() => handleDetails(courses)}
            className="bg-blue-500 text-white px-4   rounded hover:bg-blue-600 transition"
          >
            Veiw Details →
          </button>
          <button
            onClick={() => handleAddCart(addCart)}
            className="bg-blue-500 text-white px-4 py-2  rounded hover:bg-blue-600 transition"
          >
            Add To Cart 
          </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CourseCards;
