import { useState, useEffect } from "react";

const Timer = ({ val }) => {
  const [counter, setCounter] = useState(val);
  const [showMsg, setShowMsg] = useState(null);

  useEffect(() => {
    if (counter === 0) {
      setShowMsg("Timer is Finished.!!!");
    } else if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  return showMsg ? <h1>{showMsg}</h1> : <h2>{counter}</h2>;
};

export default Timer;
