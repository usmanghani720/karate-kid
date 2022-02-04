import React from "react";

import galleryBg1 from "../../images/camp.svg";
import galleryBg2 from "../../images/classess.svg";
import galleryBg3 from "../../images/special.svg";
import galleryBg4 from "../../images/awesom.svg";
import SpecialSection from "./sections/special-section";

const galleryList = [
  {
    galleryClass: "gallery-box1 gallery-bg1",
    galleryImage: galleryBg1,
    galleryHeading: "Camp",
    galleryParagraph: "Signup now for Summer and Days camps",
  },
  {
    galleryClass: "gallery-box1 gallery-bg2",
    galleryImage: galleryBg2,
    galleryHeading: "Free Classes",
    galleryParagraph: "Bring-a-Friend And Free Trial Classes",
  },
  {
    galleryClass: "gallery-box1 gallery-bg3",
    galleryImage: galleryBg3,
    galleryHeading: "Special",
    galleryParagraph: "4 Weeks of Classes, Free Registration, Free Uniform, No Contracts",
  },
];

class GallerySection extends React.Component {
  state = {
    specialModal: false,
  };
  toggleSpecialModal = () => {
    this.setState({ specialModal: !this.state.specialModal });
  };
  showModal = (heading) => {
    if (heading === "Special") {
      this.setState({ specialModal: true });
    }
  };
  render() {
    return (
      <section id="gallery-section" className="gallery-section">
        {this.state.specialModal ? (
          <div id="home">
            <SpecialSection
              toggleSpecialModal={this.toggleSpecialModal.bind(this)}
            />
          </div>
        ) : null}
        <div className="gallery-section">
          <div className="gallery-section-top">
            <ul>
              {galleryList.map((galleryItem) => (
                <li
                  key={galleryItem.galleryHeading}
                  className={galleryItem.galleryClass}
                  onClick={this.showModal.bind(
                    this,
                    galleryItem.galleryHeading
                  )}
                >
                  <div
                    className="gallery-bg-holder"
                    style={{
                      backgroundImage: `url(${galleryItem.galleryImage})`,
                    }}
                  >
                    <div className="gallery-text-holder">
                      <h4>{galleryItem.galleryHeading}</h4>
                      <p>{galleryItem.galleryParagraph}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="gallery-section-bottom">
            <div
              className="gallery-bg-holder gallery-box2 gallery-bg4"
              style={{ backgroundImage: `url(${galleryBg4})` }}
            >
              <div className="gallery-text-holder">
                <h4>Awesome Birthday Parties..!!</h4>
                <p> Call to book Yours Today!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default GallerySection;
