// utils/fetchCourses.js
const fetchCourses = async (page) => {
    const courses = [
      // Add your YouTube course URLs here
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://www.youtube.com/watch?v=J01rYl9T3BU',
      'https://www.youtube.com/watch?v=zH7KZD5vGBY',
      // ...
    ];
  
    // Emulate slow-loading with a 2-second delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    const itemsPerPage = 10;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    return courses.slice(startIndex, endIndex);
  };
  
  export default fetchCourses;
  