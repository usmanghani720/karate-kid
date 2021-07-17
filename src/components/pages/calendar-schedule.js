import React from 'react';

import GallerySection from './gallery-section';

import parklandC from '../../images/parkland-calendar.png';
import sunriseC from '../../images/sunrise-calendar.png';


class CalendarSchedule extends React.Component {
	render() {
		return (
			<div id="calendar-schedule">
				<GallerySection />

				<div className="parkland-box-holder">
					<h2>ParkLand Calendar&Schedule</h2>
					<div className="parkland-box">
						<div className="image-holder">
							<img src={parklandC} alt="enlargeC" />
						</div>
						<h4><a href="/">Enlarge Calendar</a></h4>
					</div>
					<div className="parkland-box">
						<div className="image-holder">
							<img src={sunriseC} alt="enlargeC" />
						</div>
						<h4><a href="/">Enlarge Schedule</a></h4>
					</div>
				</div>

				<div className="parkland-box-holder">
					<h2>Sunrise Calendar&Schedule</h2>
					<div className="parkland-box">
						<div className="image-holder">
							<img src={parklandC} alt="enlargeC" />
						</div>
						<h4><a href="/">Enlarge Calendar</a></h4>
					</div>
					<div className="parkland-box">
						<div className="image-holder">
							<img src={sunriseC} alt="enlargeC" />
						</div>
						<h4><a href="/">Enlarge Schedule</a></h4>
					</div>
				</div>
			</div>
		);
	}
}
export default CalendarSchedule;