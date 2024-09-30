import Feed from "@/components/modules/home/Feed";
import RightBar from "@/components/modules/home/RightBar";
import SideBar from "@/components/modules/home/SideBar";
import TopBar from "@/components/modules/home/TopBar";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="flex w-full">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}
