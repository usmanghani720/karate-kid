import React from 'react';

import trainingIcon1 from "../../../images/Children 4-6@2x.png";
import trainingIcon2 from "../../../images/Children 7-11@2x.png";
import trainingIcon3 from "../../../images/Teens & Adults@2x.png";
import trainingIcon4 from "../../../images/Grappling@2x.png";
import trainingIcon5 from "../../../images/Extreme@2x.png";
import trainingIcon6 from "../../../images/Weapon@2x.png";
import { IoMdCloseCircleOutline } from 'react-icons/io';

const trainingList = [
	{
		trainingIcon: trainingIcon1,
		trainingTitle: "Children 4-6"
	},
	{
		trainingIcon: trainingIcon2,
		trainingTitle: "Children 7-11"
	},
	{
		trainingIcon: trainingIcon3,
		trainingTitle: "Teens & Adults"
	},
	{
		trainingIcon: trainingIcon4,
		trainingTitle: "Grappling"
	},
	{
		trainingIcon: trainingIcon5,
		trainingTitle: "Extreme"
	},
	{
		trainingIcon: trainingIcon6,
		trainingTitle: "Weapon"
	}
];

function hide(event){
	event.target.parentElement.parentElement.classList.add("active");
//	this.event.parentNode.classList.add("active");
}

class TrainingBoxSection extends React.Component {


	render() {
		return (
			<section id="training-box-section" className="training-box-section">
				<div className="Popup">
					<a onClick={hide} className="popup-close-button"><IoMdCloseCircleOutline /></a>
					<div className="popup-image-holder">
						<img src={trainingIcon1} />
					</div>
					<div className="popup-content-holder">
						<h2>4 - 6 Year Old</h2>
						<p>Evolution Martial Arts' Kinderkicker program is specially designed for children 4 through 6 years old.</p>
						<p>Focus, concentration and coordination are taught in a positive learning environment to reinforce the foundations for building life long success skills in addition to providing basic self defense skills to keep your young child safe.</p>
					</div>
				</div>
				<ul>
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
				</ul>
			</section>
		);
	}
}
export default TrainingBoxSection;