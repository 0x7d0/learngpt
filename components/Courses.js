import React from 'react';

const CourseCard = ({ title, likes, reshares }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{likes} likes</p>
    <p className="text-gray-600">{reshares} reshares</p>
  </div>
);

const Courses = () => {
  const sampleCourses = [
    { title: 'React for Beginners', likes: 120, reshares: 20 },
    { title: 'Advanced Next.js', likes: 75, reshares: 12 },
    // Add more sample courses here
  ];

  return (
    <main className="w-1/2 px-8">
      {sampleCourses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </main>
  );
};

export default Courses;
