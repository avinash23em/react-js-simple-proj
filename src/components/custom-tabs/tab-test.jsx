import Tabs from "./tabs";
import './tabs.css';
function Randomcomponent(){
   return  <h1>this is random</h1>;
}

export default function Tabtest(){
    const tabs=[
        {
            label:'tab 1',
            content:<div>this is tab1 </div>
        },
        {
            label:'tab 2',
            content:<div>this is tab 2  </div>
        },
        {
            label:'tab 3',
            content:<Randomcomponent/>,
        },
    ]

     function handlechange(curr){
        console.log(curr);
     }

    return <Tabs tabcontent={tabs} onchange={handlechange}/>
}