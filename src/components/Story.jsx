import React from 'react';
import virat from '../assets/virat-kohli.jpg';
import sahil from '../assets/s.jpeg';
import kfc from '../assets/kfc.png';
import messi from '../assets/messi.jpeg';

function Story() {
  return (
    <div className="story section bg-white h-28 w-full text-black font-serif ">
      <div className="flex items-center h-full w-full overflow-x-auto text-white">
        <div className="flex items-center gap-6 px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-spin-slow"></div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-black">
                <img className="w-full h-full object-cover" src={messi} alt="messi" />
              </div>
            </div>
            <p className="text-black text-sm mt-1">messi_10</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-spin-slow"></div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-black">
                <img className="w-full h-full object-cover" src={virat} alt="virat" />
              </div>
            </div>
            <p className="text-black text-sm mt-1">virat_18</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-spin-slow"></div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-black">
                <img className="w-full h-full object-cover" src={sahil} alt="sahil" />
              </div>
            </div>
            <p className="text-black text-sm mt-1">sahil_123</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-spin-slow"></div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-black">
                <img className="w-full h-full object-cover" src={kfc} alt="kfc" />
              </div>
            </div>
            <p className="text-black text-sm mt-1">kfc_official</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
