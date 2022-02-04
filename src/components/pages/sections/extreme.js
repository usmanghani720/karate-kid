import React from "react";

import trainingIcon5 from "../../../images/Extreme@2x.png";

import { IoMdCloseCircleOutline } from "react-icons/io";

function hide(event) {
  event.target.parentNode.closest(".Popup").classList.add("active");
  event.target.parentNode.closest("button").classList.add("active");
}

class Extreme extends React.Component {
  render() {
    return (
      <section id="training-box-section" className="training-box-section">
        <div className="Popup">
          <button onClick={hide} className="popup-close-button">
            <IoMdCloseCircleOutline />
          </button>
          <React.Fragment>
            <div className="popup-image-holder">
              <img src={trainingIcon5} alt="Extreme" />
            </div>
            <div className="popup-content-holder">
              <h2 style={{ borderBottom: "none" }}>Extreme</h2>
              <p style={{ color: "#000" }}>
                Evolution Martial Arts' Extreme program will help you become the
                next martial arts superstar. Combining flashy kicks, gymnastic
                flips and high energy music, Evolution Martial Arts' Extreme
                classes will make you stand out at every demonstration or
                competition.
              </p>
            </div>
          </React.Fragment>
        </div>
      </section>
    );
  }
}
export default Extreme;
