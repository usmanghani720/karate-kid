import React from 'react';

import { BiCheck } from 'react-icons/bi';

class InformationSection extends React.Component {
	render() {
		return (
			<section id="information-section" className="information-section">
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
									<strong>Interests</strong>
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
			</section>
		);
	}
}
export default InformationSection;