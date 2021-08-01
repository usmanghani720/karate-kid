import React from "react";

import meetIcon3 from "../../../images/m3.png";
import meetIcon4 from "../../../images/m4.png";
import meetIcon5 from "../../../images/m5.png";
import meetIcon6 from "../../../images/m6.png";
import meetIcon7 from "../../../images/m7.svg";
import meetIcon8 from "../../../images/m8.svg";

const meetList = [
  {
    meetIcon: meetIcon3,
    meetTitle: "MR. Rosen",
    meetDesignation: "Designation",
  },
  {
    meetIcon: meetIcon4,
    meetTitle: "Mrs. Kristy Roth",
    meetDesignation: "Instructor",
  },
  {
    meetIcon: meetIcon5,
    meetTitle: "MR. Eli Roth",
    meetDesignation: "BBLP Instructor's Assistants",
  },
  {
    meetIcon: meetIcon6,
    meetTitle: "MR. Victor Patino",
    meetDesignation: "BBLP Instructor's Assistants",
  },
  {
    meetIcon: meetIcon7,
    meetTitle: "MR. Oscar Washington",
    meetDesignation: "Instructor",
  },
  {
    meetIcon: meetIcon7,
    meetTitle: "MR. Valladares",
    meetDesignation: "Instructor",
  },
];

const officeList = [
  {
    meetIcon: meetIcon8,
    meetTitle: "Ms. Monika",
    meetDesignation: "Office Master",
  },
];

class MeetSection extends React.Component {
  render() {
    return (
      <section id="meet-section" className="meet-section">
        <div className="meet-text">
          <h2>Meet Our Instructors</h2>
          <article>
            <p>
              Our staff is dedicated to excellence and to serving each student's
              individual goals. Evolution Martial Arts' instructors believe in
              being their best so that our students can be their best.
            </p>
          </article>
        </div>
        <div className="container">
          <ul>
            {meetList.map((meetItem) => (
              <li key={meetItem.meetTitle}>
                <div className="meet-box">
                  <img src={meetItem.meetIcon} alt={meetItem.meetTitle} />
                  <div className="meet-box-details">
                    <h3>{meetItem.meetTitle}</h3>
                    <p>{meetItem.meetDesignation}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="meet-text">
          <h2>Meet Our Office Staff</h2>
        </div>
        <div className="container">
          <ul>
            {officeList.map((meetItem) => (
              <li key={meetItem.meetTitle}>
                <div className="meet-box">
                  <img src={meetItem.meetIcon} alt={meetItem.meetTitle} />
                  <div className="meet-box-details">
                    <h3>{meetItem.meetTitle}</h3>
                    <p>{meetItem.meetDesignation}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
export default MeetSection;
