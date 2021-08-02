import React from "react";

import sunRiseImage from "../../../images/sunriseimage.png";

import { IoMdCloseCircleOutline } from "react-icons/io";

function hide(event) {
  event.target.parentNode.closest(".Popup").classList.add("active");
  event.target.parentNode.closest("button").classList.add("active");
}

class SunRise extends React.Component {
  render() {
    return (
      <section id="training-box-section" className="training-box-section">
        <div className="Popup">
          <button onClick={hide} className="popup-close-button">
            <IoMdCloseCircleOutline />
          </button>
          <React.Fragment>
            <div className="popup-image-holder">
              <img src={sunRiseImage} alt="SunRise" />
            </div>
            <div className="popup-content-holder">
              <h2 style={{ borderBottom: "none" }}>
                Evolution Martial Arts - Sunrise
              </h2>
              <p style={{ color: "#000" }}>
                Our Sunrise school is conveniently located in Sunrise Shoppes in
                Sunrise.
              </p>
              <p>
                We serve the Sunrise, Lauderhill, Tamarac and Plantation areas.
              </p>
              <p>
                We are located at <br /> 4317 North Pine Island Road <br />{" "}
                Sunrise, FL 33351
                <br />
                954.572.7970
              </p>
              <a
                href="https://www.google.com/maps/place/4317+N+Pine+Island+Rd,+Sunrise,+FL+33351,+USA/@26.178251,-80.267782,14z/data=!4m5!3m4!1s0x88d9060427b90bb5:0xee77fc05a71cc606!8m2!3d26.1775979!4d-80.269171?hl=en"
                target="_blank"
              >
                View Map
              </a>
            </div>
          </React.Fragment>
        </div>
      </section>
    );
  }
}
export default SunRise;
