import React from "react";

import trainingIcon3 from "../../../images/Teens & Adults@2x.png";

import { IoMdCloseCircleOutline } from "react-icons/io";

function hide(event) {
  event.target.parentNode.closest(".Popup").classList.add("active");
  event.target.parentNode.closest("button").classList.add("active");
}

class TeenAndAdults extends React.Component {
  render() {
    return (
      <section id="training-box-section" className="training-box-section">
        <div className="Popup">
          <button onClick={hide} className="popup-close-button">
            <IoMdCloseCircleOutline />
          </button>
          <React.Fragment>
            <div className="popup-image-holder">
              <img src={trainingIcon3} alt="Teens & Adults" />
            </div>
            <div className="popup-content-holder">
              <h2 style={{ borderBottom: "none" }}>Teens & Adults</h2>
              <p style={{ color: "#000" }}>
                The area #1 martial arts school invites you to try The Ultimate
                Fat Burning Workout! Evolution Martial Arts' teens and adults
                class is a high energy, exciting and explosive fitness and
                conditioning workout that combines traditional martial arts with
                modern self defense.
              </p>
              <p style={{ color: "#000" }}>
                Evolution Martial Arts' specially designed teens and adults
                class is taught by Nationally certified instructors and is
                guaranteed to get you in the shape you've always wanted while
                teaching you valuable defense skills. From your shoulders to
                your calves, you'll become leaner and stronger, you'll tighten
                and tone your body, increase your confidence and reduce your
                stress level while having fun in a clean, safe family
                environment.
              </p>
            </div>
          </React.Fragment>
        </div>
      </section>
    );
  }
}
export default TeenAndAdults;
