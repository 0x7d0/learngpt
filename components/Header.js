import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCircleQuestion } from "react-icons/ci";

const Header = ({ user }) => {
  return (
    <header className="bg-gray-900 py-6 px-8 flex justify-between items-center border-b border-gray-900 gap-4">
      <h1 className="text-white text-2xl font-bold">
        <Link href="/">
          <Image src="/img/logo-light.png" alt="Logo" width={80} height={80} />
        </Link>
      </h1>
      <div className="flex gap-4 w-full flex-1">
        <div className="relative">
          <input
            type="text"
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg border-2 border-gray-700 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-96"
            placeholder="Search"
          />
          <span className="absolute top-0 left-0 bottom-0">
            <div className="flex items-center justify-center h-full w-12">
              <CiCircleQuestion size={24} />
            </div>
          </span>
        </div>
      </div>

      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/dashboard" className="text-white hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block overflow-hidden rounded-full border-4 border-blue-400 hover:border-blue-600"
            >
              <Image src={user.avatar} alt="Avatar" width={50} height={50} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
