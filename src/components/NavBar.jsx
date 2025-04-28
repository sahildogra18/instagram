import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import { TbMessageCircle } from 'react-icons/tb';
import logo from '../assets/ig.png';
import { FaRegHeart } from 'react-icons/fa';
function NavBar() {
  return (
    <div>
      {' '}
      <nav className="bg-white flex justify-between items-center ml-4">
        <div>
          <img className="w-24" src={logo} alt="logo" />
        </div>
        <div className="flex items-center gap-4 mr-4">
          <div className="text-2xl">
            <IoMdAddCircle />
          </div>
          <div className="text-2xl">
            <FaRegHeart />
          </div>
          <div className="text-2xl">
            <TbMessageCircle />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
