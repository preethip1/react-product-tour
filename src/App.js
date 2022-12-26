// import React from "react";
// import "./App.css";
// // import Joyride from "react-joyride";
// import MyNavbar from "./Navbar";
// import { Button } from "react-bootstrap";

// // function App(steps) {
// //   debugger;
// //    steps = [
// //     {
// //       target: ".my-first-step",
// //       content: "This is my awesome feature!",
// //     },
// //     {
// //       target: ".my-other-step",
// //       content: "This another awesome feature!",
// //     },
// //   ];
// //   console.log(steps)
// //   return (
// //     <div>
// //       <Joyride steps={steps} />
// //       <MyNavbar />
// //     </div>
// //   );
// // }

// import Joyride from "react-joyride";
// import Timer from "./Timer";

// class App extends React.Component {
//   state = {
//     steps: [
//       {
//         target: ".my-first-step",
//         content: "This is my awesome feature!",
//       },
//       {
//         target: ".my-other-step",
//         content: "This another awesome feature!",
//       },
//     ],
//   };

//   render() {
//     const { steps } = this.state;

//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center ">
//         <Joyride steps={steps}/>
//         <MyNavbar className="my-other-step"/>
//         {/* <Timer/> */}
//         <Button className="btn btn-primary m-5 my-first-step">Start</Button>
//         <Button className="btn btn-danger m-5 my-other-step">Start</Button>
//       </div>
//     );
//   }
// }

// export default App;

// import Button from "bootstrap";
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import { Steps } from "intro.js-react";
// function App() {
//   const [enabled, setEnabled] = useState(true);
//   const [initialStep, setInitialStep] = useState(0);

//   const onExit = () => {
//     setEnabled(false);
//   };
//   const steps = [
//     {
//       element: "#help",
//       intro: "You can use this button for help",
//       position: "right",
//     },
//     {
//       element: "#about",
//       intro: "You can use this button to get more information",
//     },
//     {
//       element: "#contact",
//       intro: "You can use this button to contact us",
//     },
//   ];

//   return (
//     <div className="">
//       <Steps
//         enabled={enabled}
//         steps={steps}
//         initialStep={initialStep}
//         onExit={onExit}
//       />
//       <div>
//         <Button className="btn btn-primary m-5" id="help">
//           Help
//         </Button>
//         <Button className="btn btn-primary m-5" id="about">
//           About
//         </Button>
//         <Button className="btn btn-primary m-5" id="contact">
//           Contact Us
//         </Button>
//       </div>
//     </div>
//   );
// }
// export default App;

import "./App.css";
import "intro.js/introjs.css";
import { Steps } from "intro.js-react";
import React, { useState } from "react";
import Tour from "./Tour";
function App() {
  const [enabled, setEnabled] = useState(true);
  const [initialStep, setInitialStep] = useState(0);

  const onExit = () => {
    setEnabled(false);
  };
  const steps = [
    {
      element: "#help",
      intro: "You can use this button for help",
      position: "right",
    },
    {
      element: "#about",
      intro: "You can use this button to get more information",
    },
    {
      element: "#contact",
      intro: "You can use this button to contact us",
    },
  ];
  return (
    <div className="App">
      {/* <Steps
        enabled={enabled}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
        scrollToElement={true}
        styles={{
          options: {
            arrowColor: "#e3ffeb",
            backgroundColor: "#e3ffeb",
            overlayColor: "rgba(79, 26, 0, 0.4)",
            primaryColor: "#000",
            textColor: "#004a14",
            width: 900,
            zIndex: 1000,
          },
        }}
      /> */}
      {/* <div className="d-flex">
        <button id="help" className="btn btn-primary m-5">
          Help
        </button>
        <button id="about" className="btn btn-primary m-5">
          About
        </button>
        <button id="contact" className="btn btn-primary m-5">
          Contact Us
        </button>
      </div> */}
      <Tour />
    </div>
  );
}
export default App;

// import { useEffect, useRef, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// // import { getScreenSize } from './modules/helpers';
// import MultiRoute from './MultiRoute';
// import MultiRouteHome from './MultiRoute/routes/Home';
// import MultiRouteA from './MultiRoute/routes/RouteA';
// import MultiRouteB from './MultiRoute/routes/RouteB';

// function App() {
// const [breakpoint, setBreakpoint] = useState(getScreenSize());
// const debounceTimeout = useRef(0);

// const handleResize = useRef(() => {
//   clearTimeout(debounceTimeout.current);

//   debounceTimeout.current = window.setTimeout(() => {
//     setBreakpoint(getScreenSize());
//   }, 250);
// });

// useEffect(() => {
//   const { current } = handleResize;

//   window.addEventListener("resize", current);

//   return () => {
//     window.removeEventListener("resize", current);
//   };
// });

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<MultiRoute />} path="/multi-route">
//           <Route element={<MultiRouteHome />} index />
//           <Route element={<MultiRouteA />} path="a" />
//           <Route element={<MultiRouteB />} path="b" />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
