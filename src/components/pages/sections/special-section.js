import React from "react";

import { IoMdCloseCircleOutline } from "react-icons/io";
import coupon from "../../../images/coupon.png";

class SpecialSection extends React.Component {
  render() {
    return (
      <div className="Popup">
        <button onClick={this.props.toggleSpecialModal} className="popup-close-button">
          <IoMdCloseCircleOutline />
        </button>
        <div className="popup-image-holder">
          <img src={coupon} alt="coupon" />
        </div>
        <div className="popup-content-holder">
          <h2>Special Offer</h2>
          <p>This special offer includes</p>
          <p className="list-paragraph">four weeks of classes</p>
          <p className="list-paragraph">
            a <b style={{ fontWeight: "600" }}>free</b> uniform and
          </p>

          <p className="list-paragraph">
            <b style={{ fontWeight: "600" }}>free</b> registration
          </p>
          <p className="list-paragraph">No contract</p>
          <p>
            Save <b style={{ fontWeight: "600" }}>1/2</b> of current monthly
            rate
          </p>
        </div>
      </div>
    );
  }
}
export default SpecialSection;
