/* eslint-disable @typescript-eslint/no-explicit-any */
import { UsersData } from "@/dev-data/dummyData";
import Image from "next/image";
import Online from "./Online";

export default function RightBar({ profile }: any) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="flex items-center">
          <Image className="w-10 h-10 mr-2" src="/assets/gift.png" alt="gift" width={40} height={40} />
          <span className="font-light text-sm">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <Image className="w-full rounded-lg my-7" src="/assets/ad.png" alt="ad" width={500} height={300} />
        <h4 className="text-lg font-medium mb-5">Online Friends</h4>
        <ul className="p-0 m-0 list-none">
          {UsersData.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="text-lg font-medium mb-5">User information</h4>
        <div className="mb-8">
          <div className="mb-3">
            <span className="font-medium mr-4 text-gray-700">City:</span>
            <span className="font-light">New York</span>
          </div>
          <div className="mb-3">
            <span className="font-medium mr-4 text-gray-700">From:</span>
            <span className="font-light">Madrid</span>
          </div>
          <div className="mb-3">
            <span className="font-medium mr-4 text-gray-700">Relationship:</span>
            <span className="font-light">Single</span>
          </div>
        </div>
        <h4 className="text-lg font-medium mb-5">User friends</h4>
        <div className="flex flex-wrap justify-between">
          {Array(6)
            .fill(null) // Provide a value for the fill method
            .map((_, index) => (
              <div key={index} className="flex flex-col mb-5 cursor-pointer">
                <Image
                  className="w-24 h-24 object-cover rounded-lg"
                  src={`/assets/person/${index + 1}.jpeg`}
                  alt={`Friend ${index + 1}`}
                  width={100}
                  height={100}
                />
                <span className="mt-2 text-sm">John Carter</span>
              </div>
            ))}
        </div>
      </>
    );
  };

  return (
    <div className="flex-[3.5]">
      <div className="p-5 pt-0">{profile ? <ProfileRightBar /> : <HomeRightBar />}</div>
    </div>
  );
}
