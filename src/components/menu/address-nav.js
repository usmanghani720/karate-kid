import React from "react";
import { IoMdCall, IoIosPin, IoIosMail } from "react-icons/io";

const menuList = [
  {
    addressIcon: <IoIosPin />,
    addressName: "6702 Parkside Drive Parkland, FL 33067",
    addressUrl:
      "https://www.google.com/maps?f=q&source=embed&hl=en&geocode&q=6702+parkside+drive+parkland,+fl+33067&aq&sll=26.310735,-80.222466&sspn=0.047933,0.104628&vpsrc=0&ie=UTF8&hq&hnear=6702+Parkside+Dr,+Parkland,+Florida+33067&z=14&ll=26.310735,-80.222466",
  },
  {
    addressIcon: <IoIosPin />,
    addressName: "4317 North Pine Island Road Sunrise, FL 33351",
    addressUrl:
      "https://www.google.com/maps/place/4317+N+Pine+Island+Rd,+Sunrise,+FL+33351,+USA/@26.178251,-80.267782,14z/data=!4m5!3m4!1s0x88d9060427b90bb5:0xee77fc05a71cc606!8m2!3d26.1775979!4d-80.269171?hl=en",
  },
  {
    addressIcon: <IoMdCall />,
    addressName: "+9547964911",
    addressUrl: "tel:9547964911",
  },
  {
    addressIcon: <IoMdCall />,
    addressName: "+9545727970",
    addressUrl: "tel:9545727970",
  },
];

class AddressNav extends React.Component {
  render() {
    return (
      <nav id="address-nav">
        {menuList.map((menuItem) => (
          <dl key={menuItem.addressName}>
            <dt>{menuItem.addressIcon}</dt>
            <dd>
              <a exact activeClassName="active" href={menuItem.addressUrl} target="_blank"> 
                {menuItem.addressName}
              </a>
            </dd>
          </dl>
        ))}
      </nav>
    );
  }
}
export default AddressNav;
