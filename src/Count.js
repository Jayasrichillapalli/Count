import React, { useState, useEffect } from 'react';
import "./Counter.css"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState(null)

  useEffect(() => {
    let intervalTime;

    if (timer) {
      intervalTime = setInterval(() => {
        setCount(prevCount => prevCount + 1)
      }, 1000);
    }

    return () => {
      clearInterval(intervalTime)
    }

  }, [timer]);
  
  return (
    <div id="counter-section">
      <p id="count-section"><b>Count : {count}</b></p>
      <button onClick={() => setTimer(true)}>Start</button>
      <button onClick={() => setTimer(false)}>Stop</button>
    </div>
  );
}

export default Counter;
