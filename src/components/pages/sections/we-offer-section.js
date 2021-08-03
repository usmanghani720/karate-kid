import React from "react";

import offerIcon1 from "../../../images/h1.svg";
import offerIcon2 from "../../../images/h2.svg";
import offerIcon3 from "../../../images/h3.svg";
import offerIcon4 from "../../../images/h4.svg";
import offerIcon5 from "../../../images/h5.svg";

const weOfferList = [
  {
    weOfferIcon: offerIcon1,
    weOfferTitle: "Safe, clean & modern learning facilities",
  },
  {
    weOfferIcon: offerIcon2,
    weOfferTitle: "Energetic and exciting classes that make learning fun",
  },
  {
    weOfferIcon: offerIcon3,
    weOfferTitle:
      "Unique designed combination of martial arts & leadership education",
  },
  {
    weOfferIcon: offerIcon4,
    weOfferTitle:
      "Highly trained instructors dedicated to quality, excellence & personal attention",
  },
  {
    weOfferIcon: offerIcon5,
    weOfferTitle:
      "The most positive & contemporary teaching techniques in martial arts education",
  },
];

class WeOfferSection extends React.Component {
  render() {
    return (
      <section id="offer-section" className="offer-section">
        <div className="container">
          <div className="heading">
            <h6>What We Offer</h6>
          </div>
          <article>
            <p>
              All martial arts schools are not created equally. Evolution Martial
              Arts sets the standard for excellence. Evolution Martial Arts
              provides you with the best in
            </p>
          </article>
          <ul>
            {weOfferList.map((weOfferItem) => (
              <li key={weOfferItem.weOfferTitle}>
                <div className="services-box">
                  <img
                    src={weOfferItem.weOfferIcon}
                    alt={weOfferItem.weOfferTitle}
                  />
                  <p>{weOfferItem.weOfferTitle}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
export default WeOfferSection;
