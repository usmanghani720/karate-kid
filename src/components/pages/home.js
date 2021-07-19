import React from 'react';

import GallerySection from "./gallery-section";
import { BiCheck } from 'react-icons/bi';

import iconStdC from "../../images/student.svg";
import offerIcon1 from "../../images/h1.svg";
import offerIcon2 from "../../images/h2.svg";
import offerIcon3 from "../../images/h3.svg";
import offerIcon4 from "../../images/h4.svg";
import offerIcon5 from "../../images/h5.svg";
import trainingIcon1 from "../../images/Children 4-6@2x.png";
import trainingIcon2 from "../../images/Children 7-11@2x.png";
import trainingIcon3 from "../../images/Teens & Adults@2x.png";
import trainingIcon4 from "../../images/Grappling@2x.png";
import trainingIcon5 from "../../images/Extreme@2x.png";
import trainingIcon6 from "../../images/Weapon@2x.png";
import meetIcon1 from "../../images/m1.png";
import meetIcon2 from "../../images/m2.png";
import meetIcon3 from "../../images/m3.png";
import meetIcon4 from "../../images/m4.png";
import meetIcon5 from "../../images/m5.png";
import meetIcon6 from "../../images/m6.png";
import meetIcon7 from "../../images/m7.svg";
import meetIcon8 from "../../images/m8.svg";

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

const meetList = [
	{
		meetIcon: meetIcon1,
		meetTitle: "MR. Braun",
		meetDesignation: "Owner, Instructor"
	},
	{
		meetIcon: meetIcon2,
		meetTitle: "MRS. Braun",
		meetDesignation: "Owner, Instructor"
	},
	{
		meetIcon: meetIcon3,
		meetTitle: "MRS. Rosen",
		meetDesignation: "Designation"
	},
	{
		meetIcon: meetIcon4,
		meetTitle: "Mrs. Christy Roth",
		meetDesignation: "Instructor"
	},
	{
		meetIcon: meetIcon5,
		meetTitle: "MR. Eli Roth",
		meetDesignation: "BBLP Instructor's Assistants"
	},
	{
		meetIcon: meetIcon6,
		meetTitle: "MR. Victor Patino",
		meetDesignation: "BBLP Instructor's Assistants"
	},
	{
		meetIcon: meetIcon7,
		meetTitle: "MR. Oscar Washington",
		meetDesignation: "Instructor"
	},
	{
		meetIcon: meetIcon8,
		meetTitle: "Ms. Monika",
		meetDesignation: "Instructor"
	},
	{
		meetIcon: meetIcon7,
		meetTitle: "MR. Balladares",
		meetDesignation: "Instructor"
	},
];

class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<div className="banner">
					<div className="container">
						<div className="caption">
							<h1>Developing Tomorrow's Leaders Today</h1>
							<p className="welcome">Welcome</p>
							<p>Thank you for visiting Evolution Martial Arts. Teaching children, teens and adults for over twenty years to be their best.</p>
							<p>Evolution Martial Arts gives you the tools you need to be successful on the street, in school, at work and in life.</p>
							<p>Building your <span>confidence</span> with practical <span>self defense</span> to survive even the most dangerous situation.</p>
						</div>
					</div>
				</div>

				<GallerySection />

				<div className="about-box">
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
									<li key={studentCreed.studentCreedIcon}>
										<div className="student-creed-list-holder">
											<img src={studentCreed.studentCreedIcon} />
											<p>{studentCreed.studentCreedTitle}</p>
										</div>
									</li>
								))
							}
						</ul>
					</div>
				</div>

				<div className="offer-section">
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
				</div>

				<div className="traning-section">
					<div className="container">
						<h6>Training Programs</h6>
						<p>At Evolution Martial Arts, We Recognize That Training Expectations Differ At Each Age Level. When We Are  Young, We Are Learning The Basics Which Will Enable Us To Endure A More Vigorous Level Of Training As We Get Older. At Evolution Artial Arts, Our Programs Are Specially Designed To Allow Our Students The Ability To Enjoy The Most That They Can For Their Age Level.</p>
					</div>
				</div>

				<div className="training-box-section">
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
				</div>

				<div className="meet-section">
					<div className="meet-text">
						<h2>Meet Our Instructors</h2>
						<article>
							<p>Our staff is dedicated to excellence and to serving each student's individual goals. Evolution Martial Arts' instructors believe in being their best so that our students can be their best.</p>
						</article>
					</div>
					<div className="container">
						<ul>
							{
								meetList.map(meetItem => (
									<li key={meetItem.meetIcon}>
										<div className="meet-box">
											<img src={meetItem.meetIcon} />
											<div className="meet-box-details">
												<h3>{meetItem.meetTitle}</h3>
												<p>{meetItem.meetDesignation}</p>
											</div>
										</div>
									</li>
								))
							}
						</ul>
					</div>
				</div>








				<div className="information-box">
					<div className="container">
						<div className="info-text">
							<h4>Request Information</h4>
							<p>To request information regarding our school, products or training programs,<br />please complete the form and we will be in contact with your shortly.<br />You may also <a href="/">sign up for our Monthly Newsletter.</a></p>
						</div>
						<div className="info-form">
							<ul>
								<li>
									<div className="input-holder">
										<input type="text" name="fname" placeholder="First Name*" />
									</div>
								</li>
								<li>
									<div className="input-holder">
										<input type="text" name="fname" placeholder="Last Name*" />
									</div>
								</li>
								<li>
									<div className="input-holder">
										<input type="text" name="fname" placeholder="Phone No*" />
									</div>
								</li>
								<li>
									<div className="input-holder">
										<input type="text" name="fname" placeholder="E-Mail*" />
									</div>
								</li>
								<li>
									<div className="input-holder">
										<strong>Location</strong>
										<input type="text" name="fname" placeholder="No Preference" />
									</div>
									<div className="input-holder">
										<strong>Intrests</strong>
										<div className="checkbox-holder">
											<div className="form-group">
												<input type="checkbox" id="html" />
												<span className="custom-checkbox"><BiCheck /></span>
												<label htmlFor="html">Kinderkicker (Ages 4-6)</label>
											</div>
											<div className="form-group">
												<input type="checkbox" id="css" />
												<span className="custom-checkbox"><BiCheck /></span>
												<label htmlFor="css">Kids (Ages 7-11)</label>
											</div>
											<div className="form-group">
												<input type="checkbox" id="javascript" />
												<span className="custom-checkbox"><BiCheck /></span>
												<label htmlFor="javascript">Teens/Adults</label>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div className="input-holder">
										<strong>Comments</strong>
										<textarea placeholder="Write Your Message Here..." id="w3review" className="textarea" name="w3review" rows="4" cols="50"></textarea>
									</div>
									<div className="input-holder">
										<button className="submit-btn">Submit Request</button>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		);
	}
}
export default Home;