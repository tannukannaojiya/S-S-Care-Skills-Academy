
import { useNavigate, useParams } from "react-router-dom";

const allCourses = {
  "RACW/HVAC": [
    {id:1, Price:20000, Duration:"45days", Certificate: "Available", Language: "Hindi", Training: "Assessment",  name: "AC Repairing & Maintenance Course", details: "Learn AC fundamentals", video: "https://www.youtube.com/embed/rNNAuA7zSfQ?si=7jtj2Z_C1YoSCRs0"},
    {id:2, Price:30000, Duration:"90days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Refrigeration Repairing & Maintenance Course ", details: "Learn Refrigeration fundamentals", video: "https://www.youtube.com/embed/IuECw7Z8Zno?si=ttlmZJK2l51LWxuo" },
    {id:3, Price:30000, Duration:"90days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "HVAC Repairing & Maintenance Course", details: "Learn HVAC fundamentals", video: "https://www.youtube.com/embed/L6UVo-iRRZo?si=dyHZkDSyPaJ1RE-H" },
    // {id:4, Price:30000, Duration:"90days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Washing Machine Repairing & Maintenance Course ", details: "Learn Washing Machine fundamentals", video: "https://www.youtube.com/embed/KN6Hb7LybAI?si=BRx5CUc0NdQbWc2x" },
    
  ],
  Automobile: [
    {id:4, Price:45000, Duration:"90days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Automobile Repairing & Maintenance Course", details: "Automobile", video: "https://www.youtube.com/embed/Cxocu6ObsTs?si=bZWC9jndl8ZLeZSZ" },
    {id:5, Price:25000, Duration:"30days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Car Scanning Course", details: "Learn Car Scanning fundamentals", video: "https://www.youtube.com/embed/SqdgBwt0E5g?si=EIxT9rAfrl8qFVtu" },
    {id:6, Price:25000, Duration:"30days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Car Electrical Course", details: "Learn Electrical fundamentals", video: "https://www.youtube.com/embed/b1LtyQSRgzk?si=BAb3D5rj9h_N2wWq" },
    // {id:8, Price:15000, Duration:"30days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Bike Repairing Course", details: "Learn Bike fundamentals", video: "https://www.youtube.com/embed/6TUdYYiysbA?si=k7PuGpmzI6VmwDkj" },
    // {id:9, Price:15000, Duration:"30days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Electric Bike Repairing Course", details: "Learn Electric Bike fundamentals", video: "https://www.youtube.com/embed/6TUdYYiysbA?si=k7PuGpmzI6VmwDkj" },
    // {id:10, Price:30000, Duration:"45days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Mechanical Bike Repairing Course", details: "Learn Mechanical Bike fundamentals", video: "https://www.youtube.com/embed/6TUdYYiysbA?si=k7PuGpmzI6VmwDkj"},
    // {id:11, Price:15000, Duration:"30days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Scooter Repairing Course", details: "Learn Scooter fundamentals", video: "https://www.youtube.com/embed/SqdgBwt0E5g?si=VE8u9WrbtqtjsEyt" },
    // {id:12, Price:30000, Duration:"45days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Electric Scooter Repairing Course", details: "Learn Electric Scooter fundamentals", video: "https://www.youtube.com/embed/oXlMNcJW1cc?si=gjd8RDw6xJ-ycmKg"},
    // {id:13, Price:30000, Duration:"45days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Mechanical Scooter Repairing Course", details: "Learn Mechanical Scooter fundamentals", video: "https://www.youtube.com/embed/b1LtyQSRgzk?si=SsTIpmDADe0Yu7A2" }, 
  ],
  Robotics: [
    {id:7, Price:30000, Duration:"60days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Bike Repairing Course", details: "Learn Bike fundamentals", video: "https://www.youtube.com/embed/6TUdYYiysbA?si=k7PuGpmzI6VmwDkj" },  
  ],
  "Corporate Training": [
    {id:8, Price:7000, Duration:"15days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Corporate Training", details: "Learn Corporate Training fundamentals", video: "https://www.youtube.com/embed/b1LtyQSRgzk?si=SsTIpmDADe0Yu7A2" },
    {id:9, Price:1500, Duration:"30days", Certificate: "Available", Language: "Hindi", Training: "Assessment", name: "Physical and Education Course", details: "Physical and Education fundamentals", video: "https://www.youtube.com/embed/b1LtyQSRgzk?si=SsTIpmDADe0Yu7A2" },
  ],
};

const Courses = (cart) => {
    const navigate = useNavigate();
    let {id} = useParams();
    const courseId = id;
    const course = Object.values(allCourses)
    .flat()
    .find((course) => course.id === parseInt(courseId));
    // console.log(course);
    const handleAddCart = (cart) =>{
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
        <li>🕒 Duration: {course.Duration}</li>
        {/* <li>📚 13 Lectures</li> */}
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

export default Courses;