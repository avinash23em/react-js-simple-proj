import { useEffect, useState } from "react";
export default function RandomColor() {
  const [typecolor, setTypecolor] = useState("hex");
  const [color, setColor] = useState("#000000");
  function randomcolorutility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomhexcolor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomcolorutility(hex.length)];
    }
    setColor(hexcolor);
  }

  
  function handleCreateRandomrgbcolor() {
    const r=randomcolorutility(256);
    const g=randomcolorutility(256);
    const b=randomcolorutility(256);

    setColor(`rgb(${r},${g},${b})`);

  }
  useEffect(()=>{
    if(typecolor=='rgb') handleCreateRandomrgbcolor()
  else handleCreateRandomhexcolor()
},[typecolor])

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypecolor("hex")}>
        create hex color
      </button>
      <button onClick={() => setTypecolor("rgb")}>cretate rgb color</button>
      <button
        onClick={
          typecolor === "hex"
            ? handleCreateRandomhexcolor
            : handleCreateRandomrgbcolor
        }
      >
        create random color
      </button>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'60px',
        marginTop:'50px',
        flexDirection:'column',
        gap:'20px'


      }}>
      <h3>{typecolor=='rgb' ?'rgb color':'hexcolor'}</h3>
      <h1>{color}</h1>

      </div>
    </div>
  );
}
