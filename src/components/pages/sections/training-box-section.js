import React from "react";

import trainingIcon1 from "../../../images/Children 4-6@2x.png";
import trainingIcon2 from "../../../images/Children 7-11@2x.png";
import trainingIcon3 from "../../../images/Teens & Adults@2x.png";
import trainingIcon4 from "../../../images/Grappling@2x.png";
import trainingIcon5 from "../../../images/Extreme@2x.png";
import trainingIcon6 from "../../../images/Weapon@2x.png";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function hide(event) {
  event.target.parentNode.closest('.Popup').classList.add("active");
  event.target.parentNode.closest('button').classList.add("active");
}

class TrainingBoxSection extends React.Component {
  render() {
    return (
      <section id="training-box-section" className="training-box-section">
        <div className="Popup">
          <button onClick={hide} className="popup-close-button">
            <IoMdCloseCircleOutline />
          </button>
          <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} showArrows={false} >
            <React.Fragment>
              <div className="popup-image-holder">
                <img src={trainingIcon1} alt="4 - 6 Year Old" />
              </div>
              <div className="popup-content-holder">
                <h2>4 - 6 Year Old</h2>
                <p>
                  Evolution Martial Arts' Kinderkicker program is specially
                  designed for children 4 through 6 years old.
                </p>
                <p>
                  Focus, concentration and coordination are taught in a positive
                  learning environment to reinforce the foundations for building
                  life long success skills in addition to providing basic self
                  defense skills to keep your young child safe.
                </p>
              </div>
            </React.Fragment>
            <React.Fragment>
              <div className="popup-image-holder">
                <img src={trainingIcon2} alt="7 - 11 Year Old" />
              </div>
              <div className="popup-content-holder">
                <h2>7 - 11 Year Old</h2>
                <p>
                  Providing your children with the best instruction, our high
                  energy classes will teach your child life saving defense
                  skills, in addition to developing the mind and body
                </p>
              </div>
            </React.Fragment>
            <React.Fragment>
              <div className="popup-image-holder">
                <img src={trainingIcon3} alt="Teens & Adults" />
              </div>
              <div className="popup-content-holder">
                <h2>Teens & Adults</h2>
                <p>
                  The area #1 martial arts school invites you to try The
                  Ultimate Fat Burning Workout! Evolution Martial Arts' teens
                  and adults class is a high energy, exciting and explosive
                  fitness and conditioning workout that combines traditional
                  martial arts with modern self defense.
                </p>
                <p>
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
            <React.Fragment>
              <div className="popup-image-holder">
                <img src={trainingIcon4} alt="Grappling" />
              </div>
              <div className="popup-content-holder">
                <h2>Grappling</h2>
                <p>
                  Evolution Martial Arts' grappling programs provide a complete
                  ground fighting experience.
                </p>
                <p>
                  Combining the takedowns of judo, the reversals of wrestling
                  and the submissions of Jujitsu and Russian Sambo.
                </p>
                <p>
                  Students will enjoy an amazing workout while learning
                  effective self defense against any ground fighting situation
                </p>
              </div>
            </React.Fragment>
            <React.Fragment>
              <div className="popup-image-holder">
                <img src={trainingIcon5} alt="Extreme" />
              </div>
              <div className="popup-content-holder">
                <h2>Extreme</h2>
                <p>
                  Evolution Martial Arts' Extreme program will help become the
                  next martial arts superstar. Combining flashy kicks, gymnastic
                  flips and high energy music, Evolution Martial Arts' Extreme
                  classes will make you stand out at every demonstration or
                  competition
                </p>
              </div>
            </React.Fragment>
            <React.Fragment>
              <div className="popup-image-holder">
                <img src={trainingIcon6} alt="Weapons" />
              </div>
              <div className="popup-content-holder">
                <h2>Weapons</h2>
                <p>
                  Evolution Martial Arts weapons program offers a complete
                  weapons experience, combining the skill of traditional weapons, with the
                  practicality of modern self defence.
                </p>
                <p>
                  Learn Kobudo weapons (nunchuck, bo, kama, sai, tonfa and
                  sword), stick fighting, knife and gun defense.
                </p>
              </div>
            </React.Fragment>
          </Carousel>
        </div>
        {/* <ul>
					{
						trainingList.map(trainingItem => (
							<li key={trainingItem.trainingIcon}>
								<div className="training-box">
									<img src={trainingItem.trainingIcon} />
									<p>{trainingItem.trainingTitle}</p>
								</div>
							</li>
						))
					}
				</ul> */}
      </section>
    );
  }
}
export default TrainingBoxSection;
