import React from "react";

import trainingIcon1 from "../../../images/Children 4-6@2x.png";

import { IoMdCloseCircleOutline } from "react-icons/io";

function hide(event) {
  event.target.parentNode.closest(".Popup").classList.add("active");
  event.target.parentNode.closest("button").classList.add("active");
}

class SmallChildren extends React.Component {
  render() {
    return (
      <section id="training-box-section" className="training-box-section">
        <div className="Popup">
          <button onClick={hide} className="popup-close-button">
            <IoMdCloseCircleOutline />
          </button>
          <React.Fragment>
            <div className="popup-image-holder">
              <img src={trainingIcon1} alt="4 - 6 Year Old" />
            </div>
            <div className="popup-content-holder">
              <h2 style={{ borderBottom: "none" }}>4 - 6 Year Old</h2>
              <p style={{ color: "#000" }}>
                Evolution Martial Arts' Kinderkicker program is specially
                designed for children 4 through 6 years old.
              </p>
              <p style={{ color: "#000" }}>
                Focus, concentration and coordination are taught in a positive
                learning environment to reinforce the foundations for building
                life long success skills in addition to providing basic self
                defense skills to keep your young child safe.
              </p>
            </div>
          </React.Fragment>
        </div>
      </section>
    );
  }
}
export default SmallChildren;
