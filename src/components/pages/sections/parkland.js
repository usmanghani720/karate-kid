import React from "react";

import parklandImage from "../../../images/parklandimage.jpg";

import { IoMdCloseCircleOutline } from "react-icons/io";

function hide(event) {
  event.target.parentNode.closest(".Popup").classList.add("active");
  event.target.parentNode.closest("button").classList.add("active");
}

class ParkLand extends React.Component {
  render() {
    return (
      <section id="training-box-section" className="training-box-section">
        <div className="Popup">
          <button onClick={hide} className="popup-close-button">
            <IoMdCloseCircleOutline />
          </button>
          <React.Fragment>
            <div className="popup-image-holder">
              <img src={parklandImage} alt="parkLand" />
            </div>
            <div className="popup-content-holder">
              <h2 style={{ borderBottom: "none" }}>
                Evolution Martial Arts - Parkland
              </h2>
              <p style={{ color: "#000" }}>
                Our Parkland school is conveniently located in Parkside Shoppes
                in Parkland.
              </p>
              <p>We serve the Parkland, Coral Springs and Boca Raton areas.</p>
              <p>
                We are located at <br /> 6702 Parkside Drive <br /> Parkland, FL
                33067
                <br />
                954.796.4911
              </p>
              <a
                href="https://www.google.com/maps?f=q&source=embed&hl=en&geocode&q=6702+parkside+drive+parkland,+fl+33067&aq&sll=26.310735,-80.222466&sspn=0.047933,0.104628&vpsrc=0&ie=UTF8&hq&hnear=6702+Parkside+Dr,+Parkland,+Florida+33067&z=14&ll=26.310735,-80.222466"
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
export default ParkLand;
