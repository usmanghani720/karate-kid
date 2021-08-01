import React from "react";

import { IoMdCloseCircleOutline } from "react-icons/io";
import ReactPlayer from "react-player";

class ImageSection extends React.Component {
  render() {
    return (
      <div className="Popup">
        <button
          onClick={this.props.toggleImageModal}
          className="popup-close-button"
        >
          <IoMdCloseCircleOutline />
        </button>
        <div className="popup-content-holder" style={{width: "95%"}}>
          <div className="youtube-holder">
            <ReactPlayer
              wid="true"
              url="https://www.youtube.com/watch?v=-lUxpFK0bhg"
              width="100%"
              height="100%"
            />

            <ReactPlayer
              wid="true"
              url="https://www.youtube.com/watch?v=Dr_FGHPqgps"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ImageSection;
