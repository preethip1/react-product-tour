import React from "react";
import "./App.css";
// import Joyride from "react-joyride";
import MyNavbar from "./Navbar";
import { Button } from "react-bootstrap";

// function App(steps) {
//   debugger;
//    steps = [
//     {
//       target: ".my-first-step",
//       content: "This is my awesome feature!",
//     },
//     {
//       target: ".my-other-step",
//       content: "This another awesome feature!",
//     },
//   ];
//   console.log(steps)
//   return (
//     <div>
//       <Joyride steps={steps} />
//       <MyNavbar />
//     </div>
//   );
// }

import Joyride from "react-joyride";
import Timer from "./Timer";

class App extends React.Component {
  state = {
    steps: [
      {
        target: ".my-first-step",
        content: "This is my awesome feature!",
      },
      {
        target: ".my-other-step",
        content: "This another awesome feature!",
      },
    ],
  };

  render() {
    const { steps } = this.state;

    return (
      <div className="d-flex flex-column justify-content-center align-items-center ">
        {/* <Joyride steps={steps}/> */}
        {/* <MyNavbar className="my-other-step"/> */}
        <Timer/>
        {/* <Button className="btn btn-primary m-5 my-first-step">Start</Button> */}
        {/* <Button className="btn btn-danger m-5 my-other-step">Start</Button> */}
      </div>
    );
  }
}

export default App;
