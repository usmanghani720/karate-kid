import React from "react";

import GallerySection from "./gallery-section";
import PhotoGallery from "../../images/photo.svg";
import VideoGallery from "../../images/Video.svg";
import ReactPlayer from "react-player";
import VideoSection from "./sections/video-section";
import ImageSection from "./sections/image-section";

class Gallery extends React.Component {
  state = {
    videoModal: false,
    imageModal: false,
  };
  toggleVideoModal = () => {
    this.setState({ videoModal: !this.state.videoModal });
  };
  showVideoModal = () => {
    this.setState({ videoModal: true });
  };

  toggleImageModal = () => {
    this.setState({ imageModal: !this.state.imageModal });
  };
  showImageModal = () => {
    this.setState({ imageModal: true });
  };
  render() {
    return (
      <div id="gallery">
        <GallerySection />
        {this.state.videoModal ? (
          <VideoSection toggleVideoModal={this.toggleVideoModal.bind(this)} />
        ) : null}
        {this.state.imageModal ? (
          <ImageSection toggleImageModal={this.toggleImageModal.bind(this)} />
        ) : null}
        {/* <div className="gallery-section2">
          <div className="photo-gallery">
            <div className="image-holder">
              <img src={PhotoGallery} alt="P Gallery" />
            </div>
            <a
              style={{ cursor: "pointer" }}
              onClick={this.showImageModal.bind(this)}
            >
              Photo Gallery
            </a>
          </div>
          <div className="video-gallery">
            <div className="image-holder">
              <img
                style={{ cursor: "pointer" }}
                src={VideoGallery}
                alt="V Gallery"
              />
            </div>
            <a
              style={{ cursor: "pointer" }}
              onClick={this.showVideoModal.bind(this)}
            >
              Video Gallery
            </a>
          </div>
        </div> */}
        <div className="gallery-section3" style={{ padding: "50px 0" }}>
          <div className="video-gallery">
            <div className="image-holder">
              <img
                style={{ cursor: "pointer", width: "100%" }}
                src={VideoGallery}
                alt="V Gallery"
              />
            </div>
            <a
              style={{ cursor: "pointer" }}
              onClick={this.showVideoModal.bind(this)}
            >
              Video Gallery
            </a>
          </div>
        </div>
        <div className="gallery-section3">
          <p>Demo Team Video</p>
          <div className="youtube-holder">
            <ReactPlayer
              wid="true"
              url="https://www.youtube.com/watch?v=XL9Cpak6jyg"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Gallery;
