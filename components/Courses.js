import React, { useState, useEffect, useRef } from "react";
import fetchCourses from "../utils/fetchCourses";
import { CircularProgressbar } from "react-circular-progressbar";
import { VscDebugContinueSmall, VscLoading, VscSearch } from "react-icons/vsc";
import Button from "./Button";
import CourseCard from "./CourseCard";

const Courses = ({ user }) => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const newCourses = await fetchCourses(page);
      if (newCourses.length === 0) {
        setHasMore(false);
      }
      setCourses((prevCourses) => [...prevCourses, ...newCourses]);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];

    if (!target.isIntersecting && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <main className="w-full lg:w-1/2 px-8 lg:px-0">
      <div className="flex items-center justify-between bg-white rounded-lg overflow-hidden shadow-md mb-6 p-4">
        <div className="flex gap-4">
          <div>
            <h2 className="text-xl font-bold mb-4">Your progress</h2>
            <h2 className="mb-4">
              {user.name.split(" ")[0]}, earn more tokens by completing courses.
            </h2>
            <div className="flex gap-2">
              <Button>
                <VscDebugContinueSmall /> Continue where you left off
              </Button>
              <Button secondary>
                <VscSearch />
                Search for courses
              </Button>
            </div>
          </div>

          {/* button in tailwind */}
        </div>
        <div>
          <CircularProgressbar
            className="h-28"
            value={60}
            strokeWidth={12}
            styles={{
              text: {
                fontSize: "16px",
                fontWeight: "bold",
              },
              path: {
                stroke: "#60a5fa",
              },
            }}
            text={`Level ${user.level}`}
          />
        </div>
      </div>
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          {...course}
          canAccess={user.level * 100 >= course.requirement}
        />
      ))}
      {loading && (
        <div className="flex items-center justify-center">
          <VscLoading size={64} className="animate-spin" />
        </div>
      )}
      {!hasMore && !loading && <p>No more courses to show</p>}
      <div ref={loader}></div>
    </main>
  );
};

export default Courses;
