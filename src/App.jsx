import { useState } from 'react'

import './App.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StartRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    
    <ImageSlider url={'http://picsum.photos/v2/list'} page={"2"} limit={"15"}/>
   </div>
  );
}

export default App;
