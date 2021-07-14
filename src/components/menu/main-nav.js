import React from 'react';
import { NavLink } from "react-router-dom";

const menuList = [
	{ listName: 'Home', listUrl: '/' },
	{ listName: 'Members', listUrl: '/members' },
	{ listName: 'Principles', listUrl: '/principles' },
	{ listName: 'Belt Requirements', listUrl: '/belt-requirements' },
	{ listName: 'Calendar&Schedule', listUrl: '/calendar-schedule' },
	{ listName: 'Gallery', listUrl: '/gallery' }
];

class MainNav extends React.Component {
	render() {
		return (
				<nav id="main-nav">
					<ul>
						{
							menuList.map(menuItem => (
								<li key={menuItem.listName}><NavLink exact activeClassName="active" to={menuItem.listUrl}>{menuItem.listName}</NavLink></li>
							))
						}
					</ul>
				</nav>
		);
	}
}
export default MainNav;


