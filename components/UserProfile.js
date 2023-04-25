import React from 'react';

const UserProfile = () => {
  return (
    <aside className="bg-gray-200 w-1/4 p-4">
      {/* User Profile */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Your Name</h2>
        <p>Experience: 500 XP</p>
        <p>Skills: JavaScript, React, Next.js</p>
      </div>

      {/* Token Wallet */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Token Wallet</h2>
        <p>Balance: 10,000 tokens</p>
      </div>

      {/* Social Media & DMs */}
      <div>
        <h2 className="text-xl font-bold">Connect</h2>
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
