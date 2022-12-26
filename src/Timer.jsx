// import React from "react";
// import { useState, useEffect } from "react";
// import Countdown from "react-countdown";

// function Timer() {
//   const [counter, setCounter] = useState(30);
  
//   const [time, setTime] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime((time) => time + 1);
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);


//   const renderer = ({ hours, minutes, seconds, completed }) => {
//     if (completed) {
//       // Render a completed state
//       return <Completionist />;
//     } else {
//       // Render a countdown
//       return <span>{seconds}</span>;
//     }
//   };
//   return (
//     <div className="App">
//       <button onClick={() => startIt()}>start</button>
//        <div className="App">{time}</div>;
//       {start ? <Countdown date={Date.now() + 10000} renderer={renderer}/> : <span></span>}
      
//     </div>
//   );
// }
// export default Timer;
