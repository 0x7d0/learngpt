import React, { useState, useEffect, useRef } from 'react';
import fetchCourses from '../utils/fetchCourses';
import CourseCard from './CourseCard';


const CourseCard = ({ title, url }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
    </a>
  </div>
);

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const loader = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const newCourses = await fetchCourses(page);
      setCourses((prevCourses) => [...prevCourses, ...newCourses]);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { root: null, rootMargin: '20px', threshold: 1.0 });

    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];

    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <main className="w-1/2 px-8">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
      {loading && <p>Loading...</p>}
      <div ref={loader}></div>
    </main>
  );
};

export default Courses;
