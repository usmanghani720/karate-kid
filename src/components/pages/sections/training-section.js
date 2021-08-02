import React from "react";
import trainingIcon1 from "../../../images/Children 4-6@2x.png";
import trainingIcon2 from "../../../images/Children 7-11@2x.png";
import trainingIcon3 from "../../../images/Teens & Adults@2x.png";
import trainingIcon4 from "../../../images/Grappling@2x.png";
import trainingIcon5 from "../../../images/Extreme@2x.png";
import trainingIcon6 from "../../../images/Weapon@2x.png";
import SmallChildren from "./small-chidren";
import ElderChildren from "./elder-children";
import TeenAndAdults from "./teen-and-adults";
import Grappling from "./grappling";
import Extreme from "./extreme";
import Weapon from "./weapon";
const programList = [
  {
    icon: trainingIcon1,
    title: "4 - 6 Year Old",
  },
  {
    icon: trainingIcon2,
    title: "7 - 11 Year Old",
  },
  {
    icon: trainingIcon3,
    title: "Teens & Adults",
  },
  {
    icon: trainingIcon4,
    title: "Grappling",
  },
  {
    icon: trainingIcon5,
    title: "Extreme",
  },
  {
    icon: trainingIcon6,
    title: "Weapon",
  },
];
class TrainingSection extends React.Component {
  state = {
    showModal: "",
  };

  changeShowModal = (value) => {
    this.setState({ showModal: value });
  };
  render() {
    return (
      <section id="training-section" className="training-section meet-section">
        {this.state.showModal === "4 - 6 Year Old" ? <SmallChildren /> : null}
        {this.state.showModal === "7 - 11 Year Old" ? <ElderChildren /> : null}
        {this.state.showModal === "Teens & Adults" ? <TeenAndAdults /> : null}
		{this.state.showModal === "Grappling" ? <Grappling /> : null}
		{this.state.showModal === "Extreme" ? <Extreme /> : null}
		{this.state.showModal === "Weapon" ? <Weapon /> : null}
        <div className="container">
          <h6>Training Programs</h6>
          <p>
            At Evolution Martial Arts, We Recognize That Training Expectations
            Differ At Each Age Level. When We Are Young, We Are Learning The
            Basics Which Will Enable Us To Endure A More Vigorous Level Of
            Training As We Get Older. At Evolution Artial Arts, Our Programs Are
            Specially Designed To Allow Our Students The Ability To Enjoy The
            Most That They Can For Their Age Level.
          </p>
          <ul style={{ paddingTop: "50px" }}>
            {programList.map((program) => (
              <li
                key={program.title}
                onClick={this.changeShowModal.bind(this, program.title)}
              >
                <div className="meet-box">
                  <img src={program.icon} alt={program.title} />
                  <div className="meet-box-details">
                    <h3 style={{ color: "#fff" }}>{program.title}</h3>
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
export default TrainingSection;
