import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from '../components/icons/Logo'
import Arrow1 from '../components/icons/arrow'
import Arrow from '../components/icons/arrow1'

export default function App() {
  return (
    <div className='text-xl bg-blue-500 font-bold grid grid-cols-8 px-8 py-4'>
    
      <div className='col-span-1'></div>

      
      <div className='col-span-4 flex justify-between items-center'>
        <div className='h-100 w-200'>
          <Logo />
        </div>

        <div>
          <button className="flex items-center gap-1">
            Products
            <span className="flex items-center">
    <Arrow />
    <Arrow1 />
  </span>
          </button>
        </div>

        <div>
          <button className="flex items-center gap-1">
            Solutions
            <span className='flex'>
    <Arrow />
    <Arrow1 />
  </span>
          </button>
        </div>

        <div>
          <button className="flex items-center gap-1">
            Resources
            <span className='flex'>
    <Arrow />
    <Arrow1 />
  </span>
          </button>
        </div>
      </div>

      
      <div className='col-span-1'></div>

      
      <div className='col-span-2 flex justify-start items-center gap-6'>
        <div>Sign in</div>
        <div>Contact</div>
      </div>
    </div>
  );
}