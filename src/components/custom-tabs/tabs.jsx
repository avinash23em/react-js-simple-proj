import { useState } from "react";

export default function Tabs({ tabcontent, onchange }) {
  const [curr, setcurr] = useState(0);
  function handleOnClick(getcurr) {
    setcurr(getcurr);
    onchange(getcurr);
  }
  return (
    <div>
      <div className="wrapper">
        <div className="heading">
          {tabcontent.map((tabitem, index) => (
            <div
              className={`tab-item ${curr === index ? "active" :""}`}
              onClick={() => handleOnClick(index)}
              key={tabitem.label}
            >
              <span className="label">{tabitem.label}</span>
            </div>
          ))}
        </div>
        <div className="content" style={{ color: "red" }}>
          {tabcontent[curr] && tabcontent[curr].content}
        </div>
      </div>
    </div>
  );
}
