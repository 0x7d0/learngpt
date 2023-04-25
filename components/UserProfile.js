import Avataaars from 'react-avataaars';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';

export default function UserProfile({ userProfile }) {
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
        <dl className="flex flex-col mt-1 text-sm text-gray-600">
          <div className="flex flex-col">
            <dt className="font-medium">Tokens</dt>
            <dd className="mt-1">
              <HiOutlineCurrencyDollar className="inline-block mr-1 w-4 h-4" />
              {20000}
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="font-medium">Experience</dt>
            <dd className="mt-1">{userProfile.experience}</dd>
          </div>
          <div className="flex flex-row items-center mt-1">
            <FaFacebook className="mr-2 text-xl text-gray-400" />
            <FaLinkedin className="mr-2 text-xl text-gray-400" />
            <FaTwitter className="mr-2 text-xl text-gray-400" />
            <FaInstagram className="mr-2 text-xl text-gray-400" />
            <img
              src="/metamask.png"
              alt="Metamask Wallet"
              className="inline-block w-6 h-6"
            />
          </div>
        </dl>
      </div>
    </div>
  );
}
