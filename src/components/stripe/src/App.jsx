import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from '../components/icons/Logo'
import Arrow1 from '../components/icons/arrow'
import Arrow from '../components/icons/arrow1'
import Home from '../components/Routes/home'
import Navabr from '../components/Routes/navbar'

export default function App() {
  return (
    <div className="bg-pink-400">
    <div><Navabr/></div>
      <div className='h-screen'><Home/></div>
    </div>
  );
}