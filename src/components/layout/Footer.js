import React from 'react';
import FooterNav from '../menu/footer-nav';
import logo from '../../images/logo.svg';
import { IoMdCall } from 'react-icons/io';

class Footer extends React.Component {
	render() {
		return (
			<footer id="footer">
				<div className="footer-top">
					<div className="container">

						<div className="footer-logo">
							<a href="/"><img src={logo} alt="Logo" /></a>
						</div>

						<div className="footer-column">
							<h6>Our Vision</h6>
							<p>Our Black belts if today become the leaders of tomorrow. Read more about the core elements that make up our vision.</p>
						</div>

						<div className="footer-column">
							<h6>Our Company</h6>
							<FooterNav />
						</div>

						<div className="footer-column">
							<h6>Our Contacts</h6>
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
				</div>
				<div className="footer-bottom">
					<div className="container">
						<p>Copyright &copy; 2011,  All Rights Reserved. All Material is Property of <a href="/">Evolution Martial Arts</a></p>
					</div>
				</div>
			</footer>
		);
	}
}
export default Footer;