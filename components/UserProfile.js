import React from 'react';
import { Avatar } from 'react-avatar';
import { CurrencyDollarIcon, MailIcon, UserIcon, ChatAltIcon } from '@heroicons/react/outline';

const UserProfile = () => {
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    tokenBalance: 10000,
  };

  return (
    <aside className="bg-white w-1/4 p-6 rounded-lg shadow-md mr-8">
      <div className="flex items-center mb-4">
        <Avatar email={userData.email} name={userData.name} round={true} size={64} />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p className="text-gray-600">{userData.email}</p>
        </div>
      </div>
      <div className="mb-4">
        <CurrencyDollarIcon className="w-6 h-6 inline-block text-blue-500 mr-2" />
        <span>{userData.tokenBalance} Tokens</span>
      </div>
      <div className="space-y-2">
        <button className="flex items-center text-blue-500">
          <UserIcon className="w-6 h-6 mr-2" />
          Profile
        </button>
        <button className="flex items-center text-blue-500">
          <MailIcon className="w-6 h-6 mr-2" />
          DMs
        </button>
        <button className="flex items-center text-blue-500">
          <ChatAltIcon className="w-6 h-6 mr-2" />
          Social Media
        </button>
      </div>
    </aside>
  );
};

export default UserProfile;
