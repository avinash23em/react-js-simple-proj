import { useState } from 'react'

import './App.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <RandomColor/>
   </div>
  );
}

export default App;
