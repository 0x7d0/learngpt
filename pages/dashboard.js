import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfile from "../components/UserProfile";
import Courses from "../components/Courses";
import ChatGPT from "../components/ChatGPT";
import user from "../utils/user";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen ">
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
