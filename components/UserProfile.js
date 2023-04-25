import Avataaars from 'react-avataaars';

export default function UserProfile({ userProfile }) {
  return (
    <div>
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
  );
}
