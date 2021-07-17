import React from 'react';
import { NavLink } from "react-router-dom";
import { IoMdCall, IoIosPin, IoIosMail } from 'react-icons/io';


const menuList = [
	{
		addressIcon: <IoIosPin />,
		addressName: 'KarateAmerica Building, United States',
		addressUrl: 'https://g.page/karate-america-neenah?share'
	},
	{
		addressIcon: <IoMdCall />,
		addressName: '+00 111 222 1234',
		addressUrl: 'tel:9545727970'
	},
	{
		addressIcon: <IoIosMail />,
		addressName: 'evolutionmartialarts123@gmail.com',
		addressUrl: 'mailto:evolutionmartialarts123@gmail.com'
	}
];

class AddressNav extends React.Component {
	render() {
		return (
			<nav id="address-nav">
				{
					menuList.map(menuItem => (
						<dl key={menuItem.addressName}>
							<dt>{menuItem.addressIcon}</dt>
							<dd>
								<NavLink exact activeClassName="active" to={menuItem.addressUrl}>{menuItem.addressName}</NavLink>
							</dd>
						</dl>
					))
				}
			</nav>
		);
	}
}
export default AddressNav;