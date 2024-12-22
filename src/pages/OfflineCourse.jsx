import { useNavigate, useParams } from "react-router-dom";
import { courseOfflineData } from "../utils/courseOfflineData";
const OfflineCourse = (cart) => {
    const navigate = useNavigate();
    let {id} = useParams();
    const courseId = id;
    const course = Object.values(courseOfflineData)
    .flat()
    .find((course) => course.id === parseInt(courseId));
    // console.log(course);
    const handleAddCart = () =>{
        navigate("/cart");
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
      }
  return (
   
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
  <div className="flex flex-col md:flex-row">
    {/* Video */}
    <div className="w-full md:w-1/2">
      <iframe
        className="w-full h-48 md:h-full"
        src={course.video}
        title={course.name}
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    {/* Course Details */}
    <div className="p-4 w-full md:w-1/2">
      <h2 className="text-lg font-semibold text-gray-800">{course.name}</h2>
      <p className="text-gray-600 mt-2">Fee: ₹{course.Price}</p>

      {/* Features */}
      <ul className="mt-4 text-sm text-gray-600 space-y-2">
        <li>🕒 Duration: {course.day}</li>
        <li>🏅 Certificate {course.Certificate}</li>
        <li>📈 Training {course.Training}</li>
        <li>🌐 Language: {course.Language}</li>
      </ul>

      {/* Add to Cart Button */}
      <button 
        onClick={() => handleAddCart(cart)} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>

  );
};

export default OfflineCourse;