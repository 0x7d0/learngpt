import React from 'react';

const UserProfile = () => {
  return (
    <aside className="bg-white w-1/4 p-6 rounded-lg shadow-md">
      {/* User Profile */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Your Name</h2>
        <p>Experience: 500 XP</p>
        <p>Skills: JavaScript, React, Next.js</p>
      </div>

      {/* Token Wallet */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Token Wallet</h2>
        <p>Balance: 10,000 tokens</p>
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
