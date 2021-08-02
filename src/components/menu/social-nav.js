import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const menuList = [
  {
    socialIcon: <FaFacebookF />,
    socialUrl: "https://facebook.com",
  },
  {
    socialIcon: <FaInstagram />,
    socialUrl: "https://instagram.com",
  },
  {
    socialIcon: <FaTwitter />,
    socialUrl: "https://twitter.com",
  },
];

class SocialNav extends React.Component {
  render() {
    return (
      <nav id="social-nav" className="social-nav">
        <ul>
          {menuList.map((menuItem) => (
            <li key={menuItem.socialUrl}>
              <NavLink exact activeClassName="active" to={menuItem.socialUrl}>
                {menuItem.socialIcon}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default SocialNav;
