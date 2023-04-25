import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfile from "../components/UserProfile";
import Courses from "../components/Courses";
import ChatGPT from "../components/ChatGPT";

const user = {
  name: "John Doe",
  avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  level: 2,
  experience: 500,
  skills: ["Python", "JavaScript", "React"],
  balance: (10000).toLocaleString("en-US"),
};

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header user={user} />
      <div className="flex-grow flex w-full flex-col items-center lg:flex-row lg:items-start justify-center py-8 gap-8">
        <UserProfile user={user} />
        <Courses user={user} />
        <ChatGPT user={user} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
