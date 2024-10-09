import { useState } from 'react'

import './App.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StartRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import ImageLoader from './components/load_more';
import Qrcode from './components/qr-code-generator';
import Treeview from './components/tree-view';
import menus from './components/tree-view/data';
import Lightdarkmode from './components/light-dark-mode';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    
   <Lightdarkmode/>

   </div>
  );
}

export default App;
