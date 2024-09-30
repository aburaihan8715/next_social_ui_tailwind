import Image from "next/image";
import { MdEmojiEmotions, MdLabel, MdPermMedia, MdRoom } from "react-icons/md";

export default function Share() {
  return (
    <div className="w-full h-44 rounded-lg shadow-md">
      <div className="p-4">
        <div className="flex items-center">
          <Image className="rounded-full object-cover mr-2" src="/assets/person/1.jpeg" alt="Profile" width={50} height={50} />
          <input className="border-none w-4/5 focus:outline-none" placeholder="What's in your mind Safak?" />
        </div>
        <hr className="my-5" />
        <div className="flex items-center justify-between">
          <div className="flex ml-5">
            <div className="flex items-center mr-4 cursor-pointer">
              <MdPermMedia className="text-red-500 mr-1" fontSize="small" />
              <span className="text-sm font-medium">Photo or Video</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <MdLabel className="text-blue-500 mr-1" fontSize="small" />
              <span className="text-sm font-medium">Tag</span>
            </div>
            <div className="flex items-center mr-4 cursor-pointer">
              <MdRoom className="text-green-500 mr-1" fontSize="small" />
              <span className="text-sm font-medium">Location</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <MdEmojiEmotions className="text-yellow-500 mr-1" fontSize="small" />
              <span className="text-sm font-medium">Feelings</span>
            </div>
          </div>
          <button className="bg-green-500 text-white py-1 px-4 rounded-md font-medium mr-5 hover:bg-green-600">Share</button>
        </div>
      </div>
    </div>
  );
}
