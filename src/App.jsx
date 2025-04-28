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

export default function App() {
  return (
    <div className="h-100vh w-100vw bg-white">
      <NavBar />
      <Story />
      <HeroSection />
      <Footer />
    </div>
  );
}
