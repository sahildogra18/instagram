import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import pm from '../assets/pm.png';
import bar from '../assets/bar.jpg';
import lm10 from '../assets/10.jpg';
import DetailsForm from './DetailsForm';
import { Link } from 'react-router-dom';

function Shoping() {
  function detailsForm() {
    console.log('Details Form Opened');
  }
  return (
    <div className="container min-h-screen w-full bg-[#0c0c0c] text-white">
      {/* Logo */}
      <div className="flex justify-center items-center pt-4">
        <img className="w-28" src={pm} alt="Logo" />
      </div>

      {/* Swiper Carousel */}
      <div className="flex justify-center items-center mt-4">
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="w-[90vw] max-w-md rounded-xl overflow-hidden"
        >
          <SwiperSlide>
            <img src={lm10} alt="Messi Jersey 1" className="w-full h-96 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bar} alt="Messi Jersey 2" className="w-full h-96 object-cover" />
          </SwiperSlide>
          {/* You can add more SwiperSlide images here */}
        </Swiper>
      </div>

      {/* Product Details */}
      <div className="details flex justify-center items-center mt-6 px-4 text-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Messi 2016-17 Barcelona Home <br /> Retro Jersey
          </h2>
          <h3 className="text-xl">₹ 2500</h3>
        </div>
      </div>

      {/* Buy Button */}
      <div className="flex justify-center items-center mt-8">
        <Link to={'/detailfrom'}>
          <button
            onClick={detailsForm}
            className="bg-purple-600 text-white w-[80vw] p-3 rounded-xl hover:bg-purple-700 transition"
          >
            Buy it
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Shoping;
