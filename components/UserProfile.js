import Avataaars from 'react-avataaars';

export default function UserProfile({ userProfile }) {
    console.log('userProfile:', userProfile);
  
    return (
      <div className="flex items-center space-x-3 mt-8">
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Avataaars
                style={{ width: '72px', height: '72px' }}
                avatarStyle="Circle"
                topType="ShortHairShortWaved"
                accessoriesType="Prescription01"
                hairColor="BrownDark"
                facialHairType="BeardMedium"
                facialHairColor="BrownDark"
                clotheType="Hoodie"
                clotheColor="Heather"
                eyeType="Squint"
                eyebrowType="UpDownNatural"
                mouthType="Twinkle"
                skinColor="Light"
              />
            </div>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-medium text-gray-900">
            {userProfile.firstName} {userProfile.lastName}
          </h2>
          <p>{userProfile.bio}</p>
        </div>
      </div>
    );
  }
  