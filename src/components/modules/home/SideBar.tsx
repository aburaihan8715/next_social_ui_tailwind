import { MdBookmark, MdChat, MdEvent, MdGroup, MdHelpOutline, MdPlayCircleOutline, MdRssFeed, MdSchool, MdWorkOutline } from "react-icons/md";
import { UsersData } from "./../../../dev-data/dummyData";
import CloseFriend from "./CloseFriend";

export default function SideBar() {
  return (
    <div className="flex-3 h-[calc(100vh-50px)] overflow-y-scroll sticky top-[50px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      <div className="p-5">
        <ul className="list-none m-0 p-0">
          <li className="flex items-center mb-5">
            <MdRssFeed className="mr-4 text-2xl" />
            <span className="font-medium">Feed</span>
          </li>
          <li className="flex items-center mb-5">
            <MdChat className="mr-4 text-2xl" />
            <span className="font-medium">Chats</span>
          </li>
          <li className="flex items-center mb-5">
            <MdPlayCircleOutline className="mr-4 text-2xl" />
            <span className="font-medium">Videos</span>
          </li>
          <li className="flex items-center mb-5">
            <MdGroup className="mr-4 text-2xl" />
            <span className="font-medium">Groups</span>
          </li>
          <li className="flex items-center mb-5">
            <MdBookmark className="mr-4 text-2xl" />
            <span className="font-medium">Bookmarks</span>
          </li>
          <li className="flex items-center mb-5">
            <MdHelpOutline className="mr-4 text-2xl" />
            <span className="font-medium">Questions</span>
          </li>
          <li className="flex items-center mb-5">
            <MdWorkOutline className="mr-4 text-2xl" />
            <span className="font-medium">Jobs</span>
          </li>
          <li className="flex items-center mb-5">
            <MdEvent className="mr-4 text-2xl" />
            <span className="font-medium">Events</span>
          </li>
          <li className="flex items-center mb-5">
            <MdSchool className="mr-4 text-2xl" />
            <span className="font-medium">Courses</span>
          </li>
        </ul>
        <button className="w-36 border-none p-2 rounded-md font-medium bg-gray-200">Show More</button>
        <hr className="my-5" />
        <ul className="list-none m-0 p-0">
          {UsersData.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
