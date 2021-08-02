import React from "react";
import { NavHashLink } from "react-router-hash-link";

import sidebarIcon1 from "../../../images/about-icon.svg";
import sidebarIcon2 from "../../../images/program-icon.svg";
import sidebarIcon3 from "../../../images/team-icon.svg";
import sidebarIcon4 from "../../../images/contact-icon.svg";
import sidebarIcon5 from "../../../images/sunrise-icon.svg";
import sidebarIcon6 from "../../../images/parkland-icon.svg";
import ParkLand from "./parkland";
import SunRise from "./sunrise";

const sidebarMenuTopList = [
  {
    sidebarIcon: sidebarIcon1,
    sidebarTitle: "About Us",
    sidebarUrl: "#about-section",
  },
  {
    sidebarIcon: sidebarIcon2,
    sidebarTitle: "Programs",
    sidebarUrl: "#training-section",
  },
  {
    sidebarIcon: sidebarIcon3,
    sidebarTitle: "Our Team",
    sidebarUrl: "#meet-section",
  },
  {
    sidebarIcon: sidebarIcon4,
    sidebarTitle: "Contact Us",
    sidebarUrl: "#information-section",
  },
];

const sidebarMenuBottomList = [
  {
    sidebarIcon: sidebarIcon5,
    sidebarTitle: "Sunrise",
  },
  {
    sidebarIcon: sidebarIcon6,
    sidebarTitle: "ParkLand",
  },
];

class Sidebar extends React.Component {
  state = {
    showModal: "",
  };
  changeShowModal = (value) => {
    this.setState({ showModal: value });
  };
  render() {
    return (
      <aside id="sidebar" className="sidebar">
        {this.state.showModal === "ParkLand" ? <ParkLand /> : null}
        {this.state.showModal === "Sunrise" ? <SunRise /> : null}
        <div className="sidebar-top">
          <ul>
            {sidebarMenuTopList.map((sidebarMenuTopItem) => (
              <li key={sidebarMenuTopItem.sidebarTitle}>
                <NavHashLink
                  to={sidebarMenuTopItem.sidebarUrl}
                  activeClassName="selected"
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                >
                  <div className="sidebar-menu-item">
                    <img
                      src={sidebarMenuTopItem.sidebarIcon}
                      alt={sidebarMenuTopItem.sidebarTitle}
                    />
                    <h3>{sidebarMenuTopItem.sidebarTitle}</h3>
                  </div>
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-bottom">
          <ul>
            {sidebarMenuBottomList.map((sidebarMenuBottomItem) => (
              <li key={sidebarMenuBottomItem.sidebarTitle}>
                {sidebarMenuBottomItem.sidebarUrl ? (
                  <NavHashLink
                    to={sidebarMenuBottomItem.sidebarUrl}
                    activeClassName="selected"
                    scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                  >
                    <div className="sidebar-menu-item">
                      <img
                        src={sidebarMenuBottomItem.sidebarIcon}
                        alt={sidebarMenuBottomItem.sidebarTitle}
                      />
                      <h3>{sidebarMenuBottomItem.sidebarTitle}</h3>
                    </div>
                  </NavHashLink>
                ) : (
                  <div
                    className="sidebar-menu-item"
                    style={{ cursor: "pointer" }}
                    onClick={this.changeShowModal.bind(
                      this,
                      sidebarMenuBottomItem.sidebarTitle
                    )}
                  >
                    <img
                      src={sidebarMenuBottomItem.sidebarIcon}
                      alt={sidebarMenuBottomItem.sidebarTitle}
                    />
                    <h3>{sidebarMenuBottomItem.sidebarTitle}</h3>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    );
  }
}
export default Sidebar;
