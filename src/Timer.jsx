import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [counter, setCounter] = useState(30);
  const [start, setStart] = useState(false);
  let timer;
  function resend() {
    if (start === true) {
      console.log("timer",timer);
      timer = setInterval(() => setCounter(counter - 1), 1000);
    //   console.log(counter);
    }
  }
  function startIt() {
    setStart(true);
    setCounter(counter - 1);
  }

  useEffect(() => {
    // console.log("useEffect", counter);
    resend();
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => startIt()}>start</button>
      <div>Countdown: {counter}</div>
    </div>
  );
}
export default Timer;
