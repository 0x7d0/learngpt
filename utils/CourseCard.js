// components/CourseCard.js
import React from 'react';

const CourseCard = ({ title, url }) => {
  // Extract the video ID from the YouTube URL
  const videoId = url.split('v=')[1];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <a href={url} target="_blank" rel="noopener noreferrer" className="block mt-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </a>
    </div>
  );
};

export default CourseCard;
