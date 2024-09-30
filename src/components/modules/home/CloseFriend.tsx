/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export default function CloseFriend({ user }: any) {
  return (
    <li className="flex items-center mb-4">
      <Image className="rounded-full object-cover mr-2" src={user.profilePicture} alt={user.username} width={32} height={32} />
      <span className="font-medium">{user.username}</span>
    </li>
  );
}
