import React from "react";
import FooterNav from "../menu/footer-nav";
import AddressNav from "../menu/address-nav";
import SocialNav from "../menu/social-nav";
import logo from "../../images/logo.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-logo">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <div className="footer-column">
              <h6>Our Vision</h6>
              <p>
                Our Black belts if today become the leaders of tomorrow. Read
                more about the core elements that make up our vision.
              </p>
            </div>
            <div className="footer-column">
              <h6>Our Company</h6>
              <FooterNav />
            </div>
            <div className="footer-column address-column">
              <h6>Our Contacts</h6>
              <AddressNav />
              <SocialNav />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              Copyright &copy; 2011, All Rights Reserved. All Material is
              Property of <a href="/">Evolution Martial Arts</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
