import React from 'react';

import GallerySection from "./gallery-section";
import ReactPlayer from "react-player";

import imageMainPrincipal from "../../images/p1.svg";
import iconStdC from "../../images/student.svg";
import iconVision1 from "../../images/Solid-1.svg";
import iconVision2 from "../../images/solid-2.svg";
import iconVision3 from "../../images/solid-3.svg";
import iconVision4 from "../../images/solid-4.svg";
import iconVision5 from "../../images/solid-5.svg";
import iconVision6 from "../../images/solid-6.svg";
import iconVision7 from "../../images/solid-7.svg";
import iconVision8 from "../../images/solid-8.svg";
import iconVision9 from "../../images/solid-9.svg";
import iconVision10 from "../../images/solid-10.svg";
import iconVision11 from "../../images/solid-11.svg";

const studentCreedList = [
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "I have self discipline"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "I am focused. I have speed, power and accuracy"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "I take responsibility for my actions and my attitude"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "I am dedicated to the dreams and goals that are most important to me"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "I will develop myself in a positive manner and will avoid anything that could harm my mental growth or physical health"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "I am excited about my future and will always enjoy improving myself as a martial artist and as a person"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "I will use what I learn in class constructively and defensively and will never be abusive or offensive"
	},
	{
		studentCreedIcon: iconStdC,
		studentCreedTitle: "This is a Black Belt school. We are on a quest to be our best"
	}
];

const ourVisionList = [
	{
		ourVisionIcon: iconVision1,
		ourVisionTitle: "Focus and Concentration",
		ourVisionParagraph: "To improve grades & behavior in school"
	},
	{
		ourVisionIcon: iconVision2,
		ourVisionTitle: "Courtesy and Respect",
		ourVisionParagraph: "To ensure superior social skills"
	},
	{
		ourVisionIcon: iconVision3,
		ourVisionTitle: "Self Discipline",
		ourVisionParagraph: "To complete homework & chores without constant reminders"
	},
	{
		ourVisionIcon: iconVision4,
		ourVisionTitle: "Control",
		ourVisionParagraph: "To accept responsibility for their actions and their attitude"
	},
	{
		ourVisionIcon: iconVision5,
		ourVisionTitle: "Speed, Coordination & Flexibility",
		ourVisionParagraph: "To boost athletic performance in other sports and activities"
	},
	{
		ourVisionIcon: iconVision6,
		ourVisionTitle: "Self Esteem and Confidence",
		ourVisionParagraph: "To project a proud & successful image"
	},
	{
		ourVisionIcon: iconVision7,
		ourVisionTitle: "Camaraderie and Sportsmanship",
		ourVisionParagraph: "To win friends and gain respect from peers"
	},
	{
		ourVisionIcon: iconVision8,
		ourVisionTitle: "Goal Setting",
		ourVisionParagraph: "To become a super achiever in all areas of life"
	},
	{
		ourVisionIcon: iconVision9,
		ourVisionTitle: "Perseverance",
		ourVisionParagraph: "To never, ever, give up on their dreams"
	},
	{
		ourVisionIcon: iconVision10,
		ourVisionTitle: "Courage",
		ourVisionParagraph: "To overcome life's daily challenges"
	},
	{
		ourVisionIcon: iconVision11,
		ourVisionTitle: "Inner Strength",
		ourVisionParagraph: "To say no to negative peer pressure"
	}
];





class Principles extends React.Component {
	render() {
		return (
			<div id="principles">
				<GallerySection />

				<div className="main-principle-box">
					<div className="principle-box">
						<h1>Main Principle</h1>
						<p>In the broad spectrum of martial arts styles, our style of Tae Kwon Do is referred to as
							"Freestyle Tae Kwon Do." This means that we have chosen to incorporate techniques
							from other styles into our curriculum in order to provide you with the best martial arts
							training possible. We have carefully selected the techniques from different systems that
							are effective, practical and beneficial for your martial arts education.
							This evolving philosophy is the essence of Evolution Martial Arts.</p>
						<p>
							Evolution Martial Arts is a blended system called mixed martial arts. With a base of
							Tae Kwon Do (TKD), we incorporate techniques from Brazilian Jujitsu,
							Israeli Self Defense (Krav Maga), Shorin Ryu Karate, Kobudo Weapons, Shoalin Temple Boxing Kung Fu,
							Western Boxing and Muay Thai. TKD is a Korean style of martial art that came to the
							USA as a result of Americans' exposure to it during the Korean War. TKD, which means
							"The way of foot and hand", is the most popular style of martial arts practiced in the USA.
							Evolution Martial arts is a mixed martial arts system." This means that we have chosen to incorporate
							techniques from other styles into our curriculum in order to provide you with the best martial arts
							training
							possible.</p>
						<img src={imageMainPrincipal} />

					</div>
					<div className="student-box">
						<div className="student-left-box">
							<div className="youtube-holder">
								<ReactPlayer wid url="https://www.youtube.com/watch?v=XL9Cpak6jyg" width='100%' height='100%' />
							</div>
						</div>
						<div className="student-right-box">
							<h1>Student Creed</h1>

							<div className="student-data">
								<ul>
									{
										studentCreedList.map(studentCreed => (
											<li key={studentCreed.studentCreedIcon}>
												<div className="belt-list-holder">
													<div className="belt-icon-holder">
														<img src={studentCreed.studentCreedIcon} />
													</div>
													<p>{studentCreed.studentCreedTitle}</p>
												</div>
											</li>
										))
									}
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="our-vision-box">
					<div className="vision-first-row">
						{
							ourVisionList.map(ourVisionItem => (
								<div key={ourVisionItem.ourVisionIcon} className="vision-box">
									<img src={ourVisionItem.ourVisionIcon} />
									<h6>{ourVisionItem.ourVisionTitle}</h6>
									<p>{ourVisionItem.ourVisionParagraph}</p>
								</div>
							))
						}
					</div>
				</div>
			</div>
		);
	}
}
export default Principles;