import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-6 px-8 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-gray-800 text-2xl font-bold">Your Project Name</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-black">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
