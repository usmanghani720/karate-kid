import React from 'react';
import MainNav from './menu/main-nav';
import logo from '../images/logo.svg';
import { IoMdCall } from 'react-icons/io';


class Header extends React.Component {
	render() {
		return (
			<div id="header">
				<div className="header-top">
					<dl>
						<dt><address>6702 Parkside Drive Parkland, FL 33067</address></dt>
						<dd><a href="tel:9545727970"><IoMdCall /><span>9545727970</span></a></dd>
					</dl>
					<dl>
						<dt><address>4317 North Pine Island Road Sunrise, FL 33351</address></dt>
						<dd><a href="tel:9545727970"><IoMdCall /><span>9545727970</span></a></dd>
					</dl>
				</div>
				<div className="header-bottom">
					<div className="container">
						<div className="logo">
							<a href="/"><img src={logo} alt="Logo" /></a>
						</div>
						<MainNav />
					</div>
				</div>
			</div>
		);
	}
}
export default Header;