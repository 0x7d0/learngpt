// utils/fetchCourses.js
const fetchCourses = async (page) => {
    const courses = [
      // Add your YouTube course URLs here
      'https://www.youtube.com/watch?v=Z-VfaG9ZN_U',
      'https://www.youtube.com/watch?v=ODg6EPfekf0',
      'https://www.youtube.com/watch?v=CEgcIWKJtkQ',
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
  