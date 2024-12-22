import React from "react";

const CourseDetail = ({ course }) => {
  return (
    <div className="p-4 sm:px-5">
      <h2 className="text-2xl font-bold">{course.name}</h2>
      <p className="text-gray-600">{course.description}</p>
      <iframe
        className="w-full mt-4"
        src={course.videoUrl}
        title="Course Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <ul className="mt-4">
        <li>Certificate Available</li>
        <li>Training Assessment</li>
        <li>{course.pdfs} PDFs</li>
        <li>{course.videos} Videos</li>
      </ul>
    </div>
  );
};

export default CourseDetail;
