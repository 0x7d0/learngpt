import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfile from "../components/UserProfile";
import Courses from "../components/Courses";
import ChatGPT from "../components/ChatGPT";
import user from "../utils/user";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Benefits from "../components/Benefits";
import BenefitsTwo from "../components/BenefitsTwo";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header user={user} />
      <div className="flex-grow flex w-full items-center flex-col justify-center py-8 gap-8">
        <Hero />
        <TrustedBy />
        <Benefits />
        <BenefitsTwo />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
