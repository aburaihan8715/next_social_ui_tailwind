/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export default function CloseFriend({ user }: any) {
  return (
    <li className="flex items-center mb-4">
      <Image
        className="rounded-full object-cover mr-2 w-10 h-10 "
        src={user.profilePicture}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={user.username}
        width={40}
        height={40}
      />
      <span className="font-medium">{user.username}</span>
    </li>
  );
}
