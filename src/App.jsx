import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import virat from './assets/virat-kohli.jpg';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import NavBar from './components/NavBar';
import { CiHeart } from 'react-icons/ci';
import Story from './components/Story';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllHome from './components/AllHome';
import Comments from './components/Comments';
import Shoping from './components/Shoping';
import DetailsForm from './components/DetailsForm';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AllHome />} />
          <Route path="/comment" element={<Comments />} />
          <Route path="/shop" element={<Shoping />} />
          <Route path="/detailfrom" element={<DetailsForm />} />
        </Routes>
      </Router>
    </div>
  );
}
