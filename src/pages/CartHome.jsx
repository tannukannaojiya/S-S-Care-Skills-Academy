import React from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  { id: 1, title: 'React Basics', price: 49.99, description: 'Learn React.', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Redux Essentials', price: 39.99, description: 'Master Redux.', image: 'https://via.placeholder.com/150' },
];

const CartHome = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CartHome;
