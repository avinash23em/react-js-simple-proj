import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus,FaPlus} from "react-icons/fa";



export default function MenuItem({item}){
    const[display,setdisplay]=useState({});
    function handleTogglechildren(getcurrent){
setdisplay({
    ...display,
    [getcurrent] :!display[getcurrent],
})
    }
    console.log(display);
return <li>
<div className="menu-item">
   <p>{item.label}</p>
   {
    item&&item.children&&item.children.length > 0  ? <span onClick={()=>handleTogglechildren(item.label)}>
    {
        display[item.label] ?  <FaMinus color="white" size={25} />:<FaPlus color="white" size={25} />
    }
    </span> :null
   }
   </div>
   {
    item&&item.children&&item.children.length > 0 && display[item.label] ?
    <MenuList list={item.children}/>
     :null
   }
  
</li>
}