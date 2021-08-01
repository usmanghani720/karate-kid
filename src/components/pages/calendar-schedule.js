import React from "react";

import GallerySection from "./gallery-section";

import parklandC from "../../images/parkland-calendar.png";
import sunriseC from "../../images/sunrise-calendar.png";
import emaparklandcalendar from "../../pdf/emaparklandcalendar.pdf";
import emaparklandschedule from "../../pdf/emaparklandschedule.pdf";
import emasunrisecalendar from "../../pdf/emasunrisecalendar.pdf";
import emasunriseschedule from "../../pdf/emasunriseschedule.pdf";

class CalendarSchedule extends React.Component {
  render() {
    return (
      <div id="calendar-schedule">
        <GallerySection />

        <div id="parkland-block" className="parkland-box-holder">
          <h2>ParkLand Calendar & Schedule</h2>
          <div className="parkland-box">
            <div className="image-holder">
              <img src={parklandC} alt="enlargeC" />
            </div>
            <h4>
              <a href={emaparklandcalendar} target="_blank">
                Enlarge Calendar
              </a>
            </h4>
          </div>
          <div className="parkland-box">
            <div className="image-holder">
              <img src={sunriseC} alt="enlargeC" />
            </div>
            <h4>
              <a href={emaparklandschedule} target="blank">
                Enlarge Schedule
              </a>
            </h4>
          </div>
        </div>

        <div id="sunrise-block" className="parkland-box-holder">
          <h2>Sunrise Calendar & Schedule</h2>
          <div className="parkland-box">
            <div className="image-holder">
              <img src={parklandC} alt="enlargeC" />
            </div>
            <h4>
              <a href={emasunrisecalendar} target="_blank">
                Enlarge Calendar
              </a>
            </h4>
          </div>
          <div className="parkland-box">
            <div className="image-holder">
              <img src={sunriseC} alt="enlargeC" />
            </div>
            <h4>
              <a href={emasunriseschedule} target="_blank">
                Enlarge Schedule
              </a>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
export default CalendarSchedule;
