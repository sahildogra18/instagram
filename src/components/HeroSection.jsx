import React, { useState } from 'react';
import { LuMessageCircle } from 'react-icons/lu';
import { TbLocationShare } from 'react-icons/tb';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { FaRegBookmark } from 'react-icons/fa';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import virat from '../assets/s.jpeg';
import { Link } from 'react-router-dom';
function HeroSection() {
  let [isLiked, setIsLiked] = useState(false);
  let [showHeart, setShowHeart] = useState(false);
  let [follow, setFollow] = useState(false);

  function likeHandler() {
    console.log('clicked');
    setIsLiked(!isLiked);
    setShowHeart(!showHeart);
    setTimeout(() => setShowHeart(false), 1000);
  }
  function followKaro() {
    console.log('hola');
    setFollow(!follow);
  }
  return (
    <>
      <main className="hero-section h-28 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              src={virat}
              alt="virat"
              onDoubleClick={likeHandler}
            />
            <div className="flex items-center gap-[120px]">
              <p>sahil_dogra</p>

              <button
                onClick={followKaro}
                className="w-16 bg-blue-400 p-[10px] rounded-md text-[10px] text-white font-semibold hover:bg-blue-500 transition-colors"
              >
                {follow ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
          <div>
            <HiOutlineDotsVertical />
          </div>
        </div>
        <div className="relative">
          <img src={virat} alt="virat" className="mt-2 w-[100vw]" onDoubleClick={likeHandler} />
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
              <Link to="/comment">
                <LuMessageCircle />
              </Link>
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
    </>
  );
}

export default HeroSection;
