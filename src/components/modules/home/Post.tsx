/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";
import { MdMoreVert } from "react-icons/md";
import { UsersData } from "@/dev-data/dummyData";

export default function Post({ post }: any) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const user = UsersData.find((u: any) => u.id === post?.userId);

  return (
    <div className="w-full rounded-lg shadow-md my-7">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Conditional rendering for user profile picture */}
            {user?.profilePicture ? (
              <Image className="w-8 h-8 rounded-full object-cover" src={user.profilePicture} alt={user.username} width={32} height={32} />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-300" /> // Fallback if profile picture is not available
            )}
            <span className="text-sm font-medium mx-3">{user?.username}</span>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <div>
            <MdMoreVert />
          </div>
        </div>
        <div className="my-5">
          <span className="text-base">{post?.desc}</span>
          {/* Conditional rendering for post photo */}
          {post.photo && <Image className="mt-5 w-full max-h-[500px] object-contain" src={post.photo} alt="post" width={500} height={500} />}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image className="w-6 h-6 mr-2 cursor-pointer" src="/assets/like.png" onClick={likeHandler} alt="like" width={24} height={24} />
            <Image className="w-6 h-6 mr-2 cursor-pointer" src="/assets/heart.png" onClick={likeHandler} alt="heart" width={24} height={24} />
            <span className="text-sm">{like} people like it</span>
          </div>
          <div>
            <span className="cursor-pointer text-sm border-b border-dashed border-gray-400">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
