/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export default function Online({ user }: any) {
  return (
    <li className="flex items-center mb-4">
      <div className="relative mr-2">
        <Image className="w-10 h-10 rounded-full object-cover" src={user.profilePicture} alt={user.username} width={40} height={40} />
        <span className="w-3 h-3 rounded-full bg-limegreen absolute top-0 right-0 border-2 border-white"></span>
      </div>
      <span className="font-medium">{user.username}</span>
    </li>
  );
}
