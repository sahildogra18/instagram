import React, { useState } from 'react';
import comments from '../data/comments';
import { FaHeart } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import virat from '../assets/s.jpeg';
import { IoMdSend } from 'react-icons/io';

function Comments() {
  const [data, setData] = useState(comments);
  let [comment, setComment] = useState('looking marvelous 🔥');

  const commentLike = id => {
    setData(
      data.map(item => {
        if (item.id === id) {
          return { ...item, likes: item.likes + 1 };
        } else {
          return item;
        }
      })
    );
  };

  function sendComment() {
    setData([
      ...data,
      {
        id: data.length + 1,
        username: 'sahil Dogra',
        comment: comment,
        likes: 0,
        timestamp: '1m',
        profilePic: virat,
      },
    ]);
    setComment('');
  }

  return (
    <div className="w-full h-full bg-gray-800 text-white">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl font-bold">Comments</h2>
        <div className="text-4xl">
          <Link to="/">
            <AiFillHome />
          </Link>
        </div>
      </div>

      <div className="container mt-4 flex gap-4 flex-col justify-between">
        {data.map(item => {
          return (
            <div
              key={item.id}
              className="flex gap-6 justify-between items-center p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="flex gap-6 items-center">
                <div>
                  <img
                    className="object-cover w-10 h-10 border-2 border-white rounded-full"
                    src={item ? item.profilePic : 'https://randomuser.me/api/portraits/men/1.jpg'}
                    alt="profile"
                  />
                </div>
                <div>
                  <div className="font-semibold">{item ? item.username : 'userName'}</div>
                  <p className="text-gray-300">{item ? item.comment : 'comment'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-gray-400 text-sm">{item ? item.timestamp : 'timestamp'}</div>
                <div className="flex gap-2 flex-col justify-center items-center">
                  <div>
                    <FaHeart
                      onClick={() => commentLike(item.id)}
                      className="text-gray-400 hover:text-red-500 cursor-pointer"
                    />
                  </div>
                  <p className="text-sm text-gray-400">{item.likes}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 items-center justify-between">
        <div>
          <img className="w-8 h-8 border-2 border-white rounded-full" src={virat} alt="" />
        </div>
        <input
          className="mr-14 bg-gray-800 border-none outline-none"
          type="text"
          placeholder="Add a comment"
          value={comment}
          onChange={e => {
            setComment(e.target.value);
          }}
        />
        <div onClick={sendComment} className="text-3xl cursor-pointer">
          <IoMdSend />
        </div>
      </div>
    </div>
  );
}

export default Comments;
