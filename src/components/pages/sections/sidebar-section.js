import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

import sidebarIcon1 from "../../../images/about-icon.svg";
import sidebarIcon2 from "../../../images/program-icon.svg";
import sidebarIcon3 from "../../../images/team-icon.svg";
import sidebarIcon4 from "../../../images/contact-icon.svg";
import sidebarIcon5 from "../../../images/sunrise-icon.svg";
import sidebarIcon6 from "../../../images/parkland-icon.svg";

const sidebarMenuTopList = [
	{
		sidebarIcon: sidebarIcon1,
		sidebarTitle: "About Us",
		sidebarUrl: '#about-section'
	},
	{
		sidebarIcon: sidebarIcon2,
		sidebarTitle: "Programs",
		sidebarUrl: '#training-section'
	},
	{
		sidebarIcon: sidebarIcon3,
		sidebarTitle: "Our Team",
		sidebarUrl: '#meet-section'
	},
	{
		sidebarIcon: sidebarIcon4,
		sidebarTitle: "Contact Us",
		sidebarUrl: '#information-section'
	}
];

const sidebarMenuBottomList = [
	{
		sidebarIcon: sidebarIcon5,
		sidebarTitle: "Sunrise",
		sidebarUrl: 'calendar-schedule#parkland-block'
	},
	{
		sidebarIcon: sidebarIcon6,
		sidebarTitle: "ParkLand",
		sidebarUrl: 'calendar-schedule#sunrise-block'
	},
];

class Sidebar extends React.Component {
	render() {
		return (
			<aside id="sidebar" className="sidebar">
				<div className="sidebar-top">
					<ul>
						{
							sidebarMenuTopList.map(sidebarMenuTopItem => (
								<li key={sidebarMenuTopItem.sidebarIcon}>
									<NavHashLink to={sidebarMenuTopItem.sidebarUrl} activeClassName="selected" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>
										<div className="sidebar-menu-item">
											<img src={sidebarMenuTopItem.sidebarIcon} />
											<h3>{sidebarMenuTopItem.sidebarTitle}</h3>
										</div>
									</NavHashLink>
								</li>
							))
						}
					</ul>
				</div>
				<div className="sidebar-bottom">
					<ul>
						{
							sidebarMenuBottomList.map(sidebarMenuBottomItem => (
								<li key={sidebarMenuBottomItem.sidebarIcon}>
									<NavHashLink to={sidebarMenuBottomItem.sidebarUrl} activeClassName="selected" scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>
										<div className="sidebar-menu-item">
											<img src={sidebarMenuBottomItem.sidebarIcon} />
											<h3>{sidebarMenuBottomItem.sidebarTitle}</h3>
										</div>
									</NavHashLink>
								</li>
							))
						}
					</ul>
				</div>
			</aside>
		);
	}
}
export default Sidebar;