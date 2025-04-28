import React, { useState } from 'react';
import { LuMessageCircle } from 'react-icons/lu';
import { TbLocationShare } from 'react-icons/tb';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { FaRegBookmark } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';

function Post({ image, username }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  function likeHandler() {
    console.log('clicked');
    setIsLiked(!isLiked);
    setShowHeart(!showHeart);
    setTimeout(() => setShowHeart(false), 1000);
  }

  return (
    <main className="hero-section h-28 bg-white mt-56">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            src={image}
            alt={username}
            onDoubleClick={likeHandler}
          />
          <div>
            <p>{username}</p>
          </div>
        </div>
        <div>
          <HiOutlineDotsVertical />
        </div>
      </div>
      <div className="relative">
        <img src={image} alt={username} className="mt-2 w-[100vw]" onDoubleClick={likeHandler} />
        {showHeart ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-heart">
            <FaHeart className="text-white text-6xl" />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center justify-between gap-2 ml-1">
          <div className="text-1xl cursor-pointer" onClick={likeHandler}>
            {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </div>
          <div className="text-1xl cursor-pointer">
            <LuMessageCircle />
          </div>
          <div className="text-1xl cursor-pointer">
            <TbLocationShare />
          </div>
        </div>
        <div className="mr-1 text-1xl cursor-pointer">
          <FaRegBookmark />
        </div>
      </div>
      {isLiked ? (
        <div>Liked by sudhanshu_dogra and 101 others</div>
      ) : (
        <div>Liked by sahildogra123 and 100 others</div>
      )}
    </main>
  );
}

export default Post;
