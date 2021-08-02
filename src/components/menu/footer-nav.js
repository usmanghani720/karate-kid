import React from "react";
import { NavLink } from "react-router-dom";

const menuList = [
  { listName: "Home", listUrl: "/" },
  { listName: "About Us", listUrl: "/about-us" },
  { listName: "Program", listUrl: "/program" },
  { listName: "Team", listUrl: "/team" },
  { listName: "Contact Us", listUrl: "/contact-us" },
];

class FooterNav extends React.Component {
  render() {
    return (
      <nav id="footer-nav" className="footer-nav">
        <ul>
          {menuList.map((menuItem) => (
            <li key={menuItem.listName}>
              <NavLink exact activeClassName="active" to={menuItem.listUrl}>
                {menuItem.listName}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default FooterNav;
