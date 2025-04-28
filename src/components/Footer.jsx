import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { PiCameraPlusDuotone } from 'react-icons/pi';
import { FaBagShopping } from 'react-icons/fa6';
import { FaRegUserCircle } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white flex justify-between items-center mr-1 ml-1">
      <div className="text-2xl">
        <AiFillHome />
      </div>
      <div className="text-2xl">
        <FaSearch />
      </div>
      <div className="text-2xl">
        <PiCameraPlusDuotone />
      </div>
      <div className="text-2xl">
        <FaBagShopping />
      </div>

      <div className="text-2xl">
        <FaRegUserCircle />
      </div>
    </footer>
  );
}

export default Footer;
