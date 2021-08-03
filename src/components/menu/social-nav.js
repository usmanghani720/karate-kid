import React from "react";
import { FaFacebookSquare, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const menuList = [
  {
    socialIcon: <FaFacebookSquare />,
    socialUrl: "https://www.facebook.com/EvolutionMartialArtsEMA",
  },
  {
    socialIcon: <FaYoutube />,
    socialUrl: "https://www.youtube.com/channel/UCegvzRRvSOKT_Z1Mf60lfQw",
  },
  {
    socialIcon: <FaInstagram />,
    socialUrl: "https://www.instagram.com/evolution_martial_arts/",
  },
  {
    socialIcon: <FaTwitter />,
    socialUrl: "https://twitter.com/emakarateschool",
  },
];

class SocialNav extends React.Component {
  render() {
    return (
      <nav id="social-nav" className="social-nav">
        <ul>
          {menuList.map((menuItem) => (
            <li key={menuItem.socialUrl}>
              <a
                exact
                activeClassName="active"
                href={menuItem.socialUrl}
                target="_blank"
              >
                {menuItem.socialIcon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
export default SocialNav;
