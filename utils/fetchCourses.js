// utils/fetchCourses.js
const fetchCourses = async (page = 1) => {
  const courses = [
    // Add your YouTube course URLs here
    {
      title: "Next.js Crash Course",
      url: "https://www.youtube.com/watch?v=Z-VfaG9ZN_U",
      requirement: 100,
    },
    {
      title: "Polkadot Blockchain Academy 2022 Highlights",
      url: "https://www.youtube.com/watch?v=ODg6EPfekf0",
      requirement: 100,
    },
    {
      title: "Learn React in 2023",
      url: "https://www.youtube.com/watch?v=EWD8JhDlZ1s",
      requirement: 190,
    },
    {
      title: "Learn JavaScript in 2023",
      url: "https://www.youtube.com/watch?v=Qqx_wzMmFeA",
      requirement: 215,
    },
    {
      title: "Learn TypeScript in 2023",
      url: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
      requirement: 220,
    },
    {
      title: "Learn Solidity in 2023",
      url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      requirement: 250,
    },
    {
      title: "Learn Web3 in 2023",
      url: "https://www.youtube.com/watch?v=0tZFQs7qBfQ",
      requirement: 300,
    },
    {
      title: "Learn Ethereum in 2023",
      url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
      requirement: 350,
    },
    {
      title: "PHP For Beginners",
      url: "https://www.youtube.com/watch?v=Z-VfaG9ZN_U",
      requirement: 400,
    },
    {
      title: "Python for Intermediate",
      url: "https://www.youtube.com/watch?v=Z-VfaG9ZN_U",
      requirement: 450,
    },
    {
      title: "MongoDB course",
      url: "https://www.youtube.com/watch?v=Z-VfaG9ZN_U",
      requirement: 475,
    },
    {
      title: "Node.js ultimate course",
      url: "https://www.youtube.com/watch?v=jix4JBDV3WE",
      requirement: 500,
    },
    {
      title: "Testing with Jest",
      url: "https://www.youtube.com/watch?v=4MFOBeUCPkw",
      requirement: 550,
    },
    {
      title: "Learn GraphQL",
      url: "https://www.youtube.com/watch?v=TXm9C7UCWT4",
      requirement: 600,
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return courses.slice(startIndex, endIndex);
};

export default fetchCourses;
