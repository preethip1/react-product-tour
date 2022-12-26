import React from "react";
import JoyRide from "react-joyride";

// Tour steps
const TOUR_STEPS = [
  {
    target: "#help",
    content: "This is the App logo",
  },
  {
    target: "#about",
    content: "View the login button",
  },
  {
    target: "#contact",
    content: "here is the post card",
  },
  {
    target: ".tour-contact",
    content: "this is the contact form",
  },
  {
    target: ".tour-footer",
    content: "see our footer",
  },
];

// Tour component
const Tour = () => {
  return (
    <>
      <JoyRide
        steps={TOUR_STEPS}
        continuous={true}
        styles={{
          options: {
            arrowColor: "#e3ffeb",
            backgroundColor: "#e3ffeb",
            overlayColor: "rgba(79, 26, 0, 0.4)",
            primaryColor: "#000",
            textColor: "#004a14",
            width: 200,
            zIndex: 1000,
          },
        }}
      />
      <button id="help" className="btn btn-primary m-5">
        Help
      </button>
      <button id="about" className="btn btn-primary m-5">
        About
      </button>
      <button id="contact" className="btn btn-primary m-5">
        Contact Us
      </button>
    </>
  );
};
export default Tour;
