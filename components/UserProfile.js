import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

const UserProfile = ({ user }) => {
  return (
    <aside className="bg-white w-full lg:w-1/4 p-6 px-12 lg:p-6 lg:rounded-e-lg shadow-md lg:min-h-[calc(100vh-180px)] lg:sticky lg:top-8">
      <div className="mb-6">
        <div className="flex gap-4 flex-nowrap">
          <Link
            href="#"
            className="flex overflow-hidden rounded-full border-4 border-blue-400 hover:border-blue-600"
          >
            <Image src={user.avatar} alt="Avatar" width={120} height={120} />
          </Link>

          <div>
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p>Experience: {user.experience}XP</p>
            <p>Skills: {user.skills.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* Token Wallet */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Token Wallet</h2>
        <p>Balance: {user.balance} tokens</p>
      </div>

      {/* Social Media & DMs */}
      <div>
        <h2 className="text-xl font-bold mb-2">Connect</h2>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Direct Messages</li>
        </ul>
      </div>
    </aside>
  );
};

export default UserProfile;
