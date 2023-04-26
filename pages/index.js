import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfile from "../components/UserProfile";
import Courses from "../components/Courses";
import ChatGPT from "../components/ChatGPT";
import { FaCode, FaGraduationCap, FaUser, FaComment } from "react-icons/fa";

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
    <div className="flex flex-col min-h-screen bg-white">
      <Header user={user} />
      <div className="flex-grow flex w-full flex-col items-center lg:flex-row lg:items-start justify-center py-8 gap-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center w-full lg:w-1/3 px-4">
          <div className="relative">
            <div className="w-40 h-40 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={user.avatar}
                alt="Avatar"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <p className="text-lg font-bold text-white">{user.name}</p>
              <p className="text-sm text-gray-200">{user.skills.join(", ")}</p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500">
              <FaUser className="text-white" />
            </div>
            <p className="text-lg font-semibold text-gray-800">
              Level {user.level}
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500">
              <FaGraduationCap className="text-white" />
            </div>
            <p className="text-lg font-semibold text-gray-800">
              {user.experience} XP
            </p>
          </div>
          <div className="mt-4 flex gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500">
              <FaCode className="text-white" />
            </div>
            <p className="text-lg font-semibold text-gray-800">
              {user.balance} $
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <Courses user={user} />
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <ChatGPT user={user} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
