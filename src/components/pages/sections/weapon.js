import React from "react";

import trainingIcon6 from "../../../images/Weapon@2x.png";

import { IoMdCloseCircleOutline } from "react-icons/io";

function hide(event) {
  event.target.parentNode.closest(".Popup").classList.add("active");
  event.target.parentNode.closest("button").classList.add("active");
}

class Weapon extends React.Component {
  render() {
    return (
      <section id="training-box-section" className="training-box-section">
        <div className="Popup">
          <button onClick={hide} className="popup-close-button">
            <IoMdCloseCircleOutline />
          </button>
          <React.Fragment>
            <div className="popup-image-holder">
              <img src={trainingIcon6} alt="Weapon" />
            </div>
            <div className="popup-content-holder">
              <h2 style={{ borderBottom: "none" }}>Weapon</h2>
              <p style={{ color: "#000" }}>
                Evolution Martial Arts weapons program offers a complete weapons
                experience.
              </p>
              <p style={{ color: "#000" }}>
                Combining the skill of traditional weapons, with the
                practicality of modern self defence
              </p>
              <p style={{ color: "#000" }}>
                Learn Kobudo weapons (nunchuck, bo, kama, sai, tonfa and sword),
                stick fighting, knife and gun defense.
              </p>
            </div>
          </React.Fragment>
        </div>
      </section>
    );
  }
}
export default Weapon;
