import data from "./data";
import "./styles.css";
import { useState } from "react";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enablemultiselection, setEnablemultiselection] = useState(false);
  const [multiple, setMultiple] = useState([false]);
  function handleSingleSelection(getCurentId) {
    setSelected(getCurentId === selected ? null : getCurentId);
  }
  function handleMultiselection(getCurentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurentid=cpyMultiple.indexOf(getCurentId);
    console.log(findIndexOfCurentid);
    if(findIndexOfCurentid===-1) cpyMultiple.push(getCurentId);
    else cpyMultiple.splice(findIndexOfCurentid,1)
    setMultiple(cpyMultiple)
  }
  console.log(selected,multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnablemultiselection(!enablemultiselection)}>
        enable multiselection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enablemultiselection
                    ? () => handleMultiselection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || multiple.indexOf(dataItem.id)!==-1? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>no data found!</div>
        )}
      </div>
    </div>
  );
}
