import React from 'react';

import bannerBg from '../../images/banner.svg';

class Home extends React.Component {
	render() {
		return (
			<div id="home">
				<div className="banner" style={{backgroundImage: `url(${bannerBg})`}}>
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
			</div>
		);
	}
}
export default Home;