import React from 'react';

import offerIcon1 from "../../../images/h1.svg";
import offerIcon2 from "../../../images/h2.svg";
import offerIcon3 from "../../../images/h3.svg";
import offerIcon4 from "../../../images/h4.svg";
import offerIcon5 from "../../../images/h5.svg";

const weOfferList = [
	{
		weOfferIcon: offerIcon1,
		weOfferTitle: "Safe, Clean & modern learning facilities"
	},
	{
		weOfferIcon: offerIcon2,
		weOfferTitle: "Energetic and Exciting Classes that make learning fun"
	},
	{
		weOfferIcon: offerIcon3,
		weOfferTitle: "Unique Designed Combination of Martial Arts & Leadership Education"
	},
	{
		weOfferIcon: offerIcon4,
		weOfferTitle: "Highly Trained Instructors dedicated to Quality, Excellence & Personal Attention"
	},
	{
		weOfferIcon: offerIcon5,
		weOfferTitle: "The Most Positive & Contemporary Teaching Techniques In Martial Arts Education"
	}
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
						<p>Not all martial arts schools are created equal. Evolution Martial Arts sets the standard for excellence. Evolution Martial Arts provides you with the best in</p>
					</article>
					<ul>
						{
							weOfferList.map(weOfferItem => (
								<li key={weOfferItem.weOfferIcon}>
									<div className="services-box">
										<img src={weOfferItem.weOfferIcon} />
										<p>{weOfferItem.weOfferTitle}</p>
									</div>
								</li>
							))
						}
					</ul>
				</div>
			</section>
		);
	}
}
export default WeOfferSection;