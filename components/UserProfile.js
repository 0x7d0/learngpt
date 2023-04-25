export default function UserProfile({ userProfile }) {
    return (
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">{userProfile.name}</h2>
        <p className="text-gray-500">{userProfile.bio}</p>
      </div>
    );
  }
  