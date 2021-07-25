import React from 'react';

import iconStdC from "../../../images/student.svg";

const studentCreedList = [
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "Self Discipline"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "Camaraderie and Sportsmanship"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "Courtesy and Respect"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "Self Esteem and Confidence"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "Focus and Concentration"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "Courage"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "Control"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "Perseverance"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "Goal Setting"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "Speed, Coordination and Flexibility"
	}
];

class AbooutBoxSection extends React.Component {
	render() {
		return (
			<section id="about-section" className="about-section">
				<div className="container">
					<div className="heading">
						<h6>About Us</h6>
					</div>
					<article>
						<p>Evolution Martial Arts' highly trained staff of martial arts professionals will help you to develop the positive mental and physical skills that will enable you to achieve success throughout life. </p>
						<p>Evolution Martial Arts is the area's leader in quality martial arts training. STATE, NATIONAL and WORLD CHAMPIONS. <br />Our nationally acclaimed programs are designed to provide a lot more than just self defense and
							physical agility. Our courses have proven to develop the following benefits in our students...</p>
					</article>
					<ul>
						{
							studentCreedList.map(studentCreed => (
								<li key={studentCreed.studentCreedTitle}>
									<div className="student-creed-list-holder">
										<img src={studentCreed.studentCreedIcon} alt={studentCreed.studentCreedTitle} />
										<p>{studentCreed.studentCreedTitle}</p>
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
export default AbooutBoxSection;