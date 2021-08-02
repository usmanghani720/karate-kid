import React from "react";
import trainingIcon2 from "../../../images/Children 7-11@2x.png";
import { IoMdCloseCircleOutline } from "react-icons/io";

function hide(event) {
  event.target.parentNode.closest(".Popup").classList.add("active");
  event.target.parentNode.closest("button").classList.add("active");
}

class ElderChildren extends React.Component {
  render() {
    return (
      <section id="training-box-section" className="training-box-section">
        <div className="Popup">
          <button onClick={hide} className="popup-close-button">
            <IoMdCloseCircleOutline />
          </button>
          <React.Fragment>
            <div className="popup-image-holder">
              <img src={trainingIcon2} alt="7 - 11 Year Old" />
            </div>
            <div className="popup-content-holder">
              <h2 style={{ borderBottom: "none" }}>7 - 11 Year Old</h2>
              <p style={{ color: "#000" }}>
                Providing your children with the best instruction, our high
                energy classes will teach your child life saving defense skills,
                in addition to developing the mind and body
              </p>
            </div>
          </React.Fragment>
        </div>
      </section>
    );
  }
}
export default ElderChildren;
