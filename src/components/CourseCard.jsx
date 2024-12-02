import React from 'react';
// import { useDispatch } from 'react-redux';
// import { CartSlice } from '../features/CartSlice';

const CourseCard = ({ course }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-4">{course.title}</h2>
      <p className="text-gray-700 mt-2">{course.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">${course.price}</span>
        <button
          onClick={() => dispatch(addToCart(course))}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
