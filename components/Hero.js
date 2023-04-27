import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="container p-8 mx-auto xl:px-0 flex flex-wrap mb-20">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Level up and land your dream job with LearnGPT
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            LearnGPT is a platform that helps you learn new skills and earn
            tokens for completing challenges and courses.
          </p>
          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link
              href="/dashboard"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
            >
              Go to dashboard
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full lg:w-1/2">
        <div className="">
          <img
            alt="Hero Illustration"
            width={616}
            height={617}
            className="object-cover"
            src={"/img/hero.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
