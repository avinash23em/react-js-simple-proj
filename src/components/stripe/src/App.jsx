import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from '../components/icons/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-xl bg-blue-500 font-bold grid grid-cols-8 px-8 py-4'>
      <div className='col-span-1'></div>
      <div className='col-span-4 flex justify-between items-center '>
        <div className='h-100 w-200' ><Logo/></div>
        <div >products</div>
        <div >solutions</div>
        <div >resources</div>
      </div>
      <div className='col-span-1'></div>
      <div className='col-span-2 flex justify-start items-center gap-6'>
      <div >signin</div>
      <div >contact</div>
      </div>
      </div>
        </>
  )
}

export default App
