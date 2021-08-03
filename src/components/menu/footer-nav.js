import React from "react";
import { NavHashLink } from "react-router-hash-link";

const menuList = [
  { listName: "Home", listUrl: "/" },
  { listName: "About Us", listUrl: "#about-section" },
  { listName: "Program", listUrl: "#training-section" },
  { listName: "Team", listUrl: "#meet-section" },
  { listName: "Contact Us", listUrl: "#information-section" },
];

class FooterNav extends React.Component {
  render() {
    return (
      <nav id="footer-nav" className="footer-nav">
        <ul>
          {menuList.map((menuItem) => (
            <li key={menuItem.listName}>
              <NavHashLink
                exact
                activeClassName="selected"
                to={`/` + menuItem.listUrl}
                scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              >
                {menuItem.listName}
              </NavHashLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default FooterNav;
