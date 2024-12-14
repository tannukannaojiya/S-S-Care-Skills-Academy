// src/components/CourseCard.jsx
import React from 'react';

const ViewCourseDetail = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/cart'); // Navigate to the cart page
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
  }

  return (
    <div className = "max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
      {/* Video */}
      <iframe
        className="w-full h-48"
        src="https://www.youtube.com/embed/your-video-id"
        title="Course Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* Course Details */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Course Name</h2>
        <p className="text-gray-600 mt-2">Price: ₹999</p>

        {/* Features */}
        <ul className="mt-4 text-sm text-gray-600 space-y-2">
          <li>🕒 Duration: 17:43</li>
          <li>📚 13 Lectures</li>
          <li>🏅 Certificate Available</li>
          <li>📈 Training Assessment</li>
          <li>🎥 9 Videos</li>
          <li>📄 4 PDFs</li>
          <li>🌐 Language: Hindi</li>
        </ul>

        {/* Add to Cart Button */}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600">
        onClick={handleAddToCart}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ViewCourseDetail;
