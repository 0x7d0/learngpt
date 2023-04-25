import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-8 flex justify-between">
      <div className="text-white text-sm space-y-4">
        <Link href="/">
          <Image src="/img/logo-light.png" alt="Logo" width={80} height={80} />
        </Link>
        <p>© 2023 Learn GPT. All rights reserved.</p>
      </div>

      <div className="flex gap-12">
        <div className="text-white flex flex-col gap-1">
          <h3 className="text-lg font-bold">Courses</h3>
          <Link href="#" className="text-white text-sm hover:text-gray-200">
            Most popular
          </Link>
          <Link href="#" className="text-white text-sm hover:text-gray-200">
            Trending
          </Link>
          <Link href="#" className="text-white text-sm hover:text-gray-200">
            Categories
          </Link>
        </div>
        <div className="text-white flex flex-col gap-1">
          <h3 className="text-lg font-bold">Explore</h3>
          <Link href="#" className="text-white text-sm hover:text-gray-200">
            Use cases
          </Link>
          <Link href="#" className="text-white text-sm hover:text-gray-200">
            Blog
          </Link>
          <Link href="#" className="text-white text-sm hover:text-gray-200">
            Partners
          </Link>
        </div>
        <div className="text-white flex flex-col gap-1">
          <h3 className="text-lg font-bold">Learn more</h3>
          <Link href="#" className="text-white text-sm hover:text-gray-200">
            Privacy
          </Link>
          <Link href="#" className="text-white text-sm hover:text-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
