import "./styles.css";
import { useState, useEffect } from "react";
import Timer from "./Timer";

export default function App() {
  const [val, setVal] = useState(null);
  const [inputMode, setInputMode] = useState(true);

  const actionHandler = (e) => {
    setVal(e.target.value);
  };

  const submitHandler = (e) => {
    setInputMode(false);
  };

  return (
    <div className="App">
      {inputMode ? (
        <div>
          <label>
            enter a value : <input value={val} onChange={actionHandler} />
          </label>
          <h2> {val} </h2>
          <br /> <br />
          <button onClick={submitHandler}> submit value for timer </button>
        </div>
      ) : (
        <Timer val={val} />
      )}
    </div>
  );
}
