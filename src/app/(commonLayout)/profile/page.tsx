import SideBar from "@/components/modules/home/SideBar";
import TopBar from "@/components/modules/home/TopBar";
import Image from "next/image";

import RightBar from "@/components/modules/home/RightBar";
import Feed from "@/components/modules/home/Feed";

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="flex">
        <SideBar />
        <div className="flex-[9]">
          <div>
            <div className="relative h-80">
              <Image className="w-full h-64 object-cover" src="/assets/post/3.jpeg" alt="Profile Cover" width={1000} height={320} />
              <Image
                className="w-36 h-36 rounded-full object-cover absolute left-0 right-0 mx-auto top-36 border-4 border-white"
                src="/assets/person/7.jpeg"
                alt="Profile User"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <h4 className="text-2xl">Safak Kocaoglu</h4>
              <span className="font-light">Hello my friends!</span>
            </div>
          </div>
          <div className="flex mt-4">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
