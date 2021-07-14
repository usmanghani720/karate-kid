import React from 'react';
import MainNav from './menu/main-nav';
import logo from '../images/logo.svg';
import { IoMdCall } from 'react-icons/io';


class Header extends React.Component {
	render() {
		return (
			<header id="header">
				<div className="header-top">
					<div className="container">
						<dl>
							<dt><address>6702 Parkside Drive Parkland, FL 33067</address></dt>
							<dd>
								<a href="tel:9545727970">
									<strong><IoMdCall /></strong>
									<span>9545727970</span>
								</a>
							</dd>
						</dl>
						<dl>
							<dt><address>4317 North Pine Island Road Sunrise, FL 33351</address></dt>
							<dd>
								<a href="tel:9545727970">
									<strong><IoMdCall /></strong>
									<span>9545727970</span>
								</a>
							</dd>
						</dl>
					</div>
				</div>
				<div className="header-bottom">
					<div className="container">
						<div className="logo">
							<a href="/"><img src={logo} alt="Logo" /></a>
						</div>
						<MainNav />
					</div>
				</div>
			</header>
		);
	}
}
export default Header;