import React from "react";

import { IoMdCloseCircleOutline } from "react-icons/io";
import vision from "../../../images/visionbig.jpg";

function hide(event) {
  event.target.parentNode.closest(".Popup").classList.add("active");
  event.target.parentNode.closest("button").classList.add("active");
}

class Vision extends React.Component {
  render() {
    return (
      <div className="Popup">
        <button onClick={hide} className="popup-close-button">
          <IoMdCloseCircleOutline />
        </button>
        <div className="popup-image-holder">
          <img src={vision} alt="coupon" />
        </div>
        <div className="popup-content-holder">
          <h2>Our Vision</h2>
          <p>Our Black belts of today become the leaders of tomorrow.</p>
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            Focus and Concentration
          </p>
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            To improve grades and behavior in school
          </p>
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            Courtesy and Respect
          </p>
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            To ensure superior social skills
          </p>
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            Self Discipline
          </p>{" "}
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            To complete homework and chores without constant reminders
          </p>{" "}
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            Control
          </p>{" "}
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            To accept responsibility for their actions and their attitude
          </p>
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            {" "}
            Speed, Coordination and Flexibility
          </p>{" "}
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            To boost athletic performance in other sports and activities
          </p>{" "}
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            Self Esteem and Confidence
          </p>{" "}
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            To project a proud and successful image
          </p>
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            Comaraderie and Sportsmanship
          </p>{" "}
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            To win friends and gain respect from peers
          </p>{" "}
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            Goal Setting
          </p>{" "}
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            To become a super achiever in all areas of life
          </p>{" "}
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            Perseverance
          </p>
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            To never, ever, give up on their dreams
          </p>{" "}
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            Courage
          </p>{" "}
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            To overcome life's daily challenges
          </p>
          <p className="list-paragraph" style={{ margin: "0 0 5px" }}>
            {" "}
            Inner Strength
          </p>
          <p className="list-paragraph" style={{ paddingLeft: "20px" }}>
            {" "}
            To say no to negative peer pressure
          </p>
        </div>
      </div>
    );
  }
}
export default Vision;
