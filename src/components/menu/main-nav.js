import React from 'react';

const menuList = [
	{ listName: 'Home' },
	{ listName: 'Members' },
	{ listName: 'Principles' },
	{ listName: 'Belt Requirements' },
	{ listName: 'Calendar&Schedule' },
	{ listName: 'Gallery' }
];

class MainNav extends React.Component {
	render() {
		return (
			<nav id="main-nav">
				<ul>
					{
						menuList.map(menuItem => (
							<li key={menuItem.listName}><a href="/">{menuItem.listName}</a></li>
						))
					}
				</ul>
			</nav>
		);
	}
}
export default MainNav;