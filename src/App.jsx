import { useState } from 'react'

import './App.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StartRating from './components/star-rating';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    
    <StartRating noofstars={10}/>
   </div>
  );
}

export default App;
