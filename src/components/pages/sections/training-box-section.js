import React from 'react';

import trainingIcon1 from "../../../images/Children 4-6@2x.png";
import trainingIcon2 from "../../../images/Children 7-11@2x.png";
import trainingIcon3 from "../../../images/Teens & Adults@2x.png";
import trainingIcon4 from "../../../images/Grappling@2x.png";
import trainingIcon5 from "../../../images/Extreme@2x.png";
import trainingIcon6 from "../../../images/Weapon@2x.png";

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

class TrainingBoxSection extends React.Component {
	render() {
		return (
			<section id="training-box-section" className="training-box-section">
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