import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserProfile from '../components/UserProfile';
import Courses from '../components/Courses';
import ChatGPT from '../components/ChatGPT';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex">
        <UserProfile />
        <Courses />
        <ChatGPT />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
