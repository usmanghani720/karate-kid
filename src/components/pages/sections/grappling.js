import React from "react";

import trainingIcon4 from "../../../images/Grappling@2x.png";

import { IoMdCloseCircleOutline } from "react-icons/io";

function hide(event) {
  event.target.parentNode.closest(".Popup").classList.add("active");
  event.target.parentNode.closest("button").classList.add("active");
}

class Grappling extends React.Component {
  render() {
    return (
      <section id="training-box-section" className="training-box-section">
        <div className="Popup">
          <button onClick={hide} className="popup-close-button">
            <IoMdCloseCircleOutline />
          </button>
          <React.Fragment>
            <div className="popup-image-holder">
              <img src={trainingIcon4} alt="Grappling" />
            </div>
            <div className="popup-content-holder">
              <h2 style={{ borderBottom: "none" }}>Grappling</h2>
              <p style={{ color: "#000" }}>
                Evolution Martial Arts' grappling programs provide a complete
                ground fighting experience.
              </p>
              <p style={{ color: "#000" }}>
                Combining the takedowns of judo, the reversals of wrestling and
                the submissions of Jujitsu and Russian Sambo.
              </p>
              <p style={{ color: "#000" }}>
                Students will enjoy an amazing workout while learning effective
                self defense against any ground fighting situation
              </p>
            </div>
          </React.Fragment>
        </div>
      </section>
    );
  }
}
export default Grappling;
