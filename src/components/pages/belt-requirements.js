import React from "react";

import GallerySection from "./gallery-section";

import imageW2g from "../../images/wg.svg";
import imageG2o from "../../images/go.svg";
import imageO2g from "../../images/og.svg";
import imageG2p from "../../images/gp.svg";
import imageP2b from "../../images/pb.svg";
import imageB2b from "../../images/blue-belt.svg";
import imageR2b from "../../images/rb.svg";
import imageBr2b from "../../images/bb.svg";
import imageS2p from "../../images/sp.svg";
import imageB2d from "../../images/bd.svg";
import imageChild from "../../images/children.svg";
import imageAdult from "../../images/adult.svg";
import imagePencil from "../../images/pencil.svg";
import whiteToGold from "../../pdf/whitetogoldworksheet.pdf";
import goldToOrange from "../../pdf/goldtoorange.pdf";
import orangeToGreen from "../../pdf/orangetogreenworksheet.pdf";
import greenToPurple from "../../pdf/greentopurpleworksheet.pdf";
import purpleToBlue from "../../pdf/purpletoblueworksheet.pdf";
import blueToRed from "../../pdf/bluetoredworksheet.pdf";
import redToBrown from "../../pdf/redtobrownworksheet.pdf";
import brownToBStripe from "../../pdf/WORKSHEETBROWNTOBSTRIPE.pdf";
import blackStripeToBlack from "../../pdf/blackstripetoblack.pdf";
import secondDegree from "../../pdf/2nddegree.pdf";
import children from "../../pdf/Intent_to_Promote_TONY.pdf";
import adults from "../../pdf/adult_intent_to_promote.pdf";
import studInfo from "../../pdf/studinfo.pdf";
import guest from "../../pdf/guestpass.pdf";

const beltRequirementsList = [
  {
    beltIcon: imageW2g,
    beltTitle: "White to Gold",
    pdfDocument: whiteToGold,
  },
  {
    beltIcon: imageG2o,
    beltTitle: "Gold to Orange",
    pdfDocument: goldToOrange,
  },
  {
    beltIcon: imageO2g,
    beltTitle: "Orange to Green",
    pdfDocument: orangeToGreen,
  },
  {
    beltIcon: imageG2p,
    beltTitle: "Green to Purple",
    pdfDocument: greenToPurple,
  },
  {
    beltIcon: imageP2b,
    beltTitle: "Purple to Blue",
    pdfDocument: purpleToBlue,
  },
  {
    beltIcon: imageB2b,
    beltTitle: "Blue to Red",
    pdfDocument: blueToRed,
  },
  {
    beltIcon: imageR2b,
    beltTitle: "Red to Brown",
    pdfDocument: redToBrown,
  },
  {
    beltIcon: imageBr2b,
    beltTitle: "Brown to BL.Stripe",
    pdfDocument: brownToBStripe,
  },
  {
    beltIcon: imageS2p,
    beltTitle: "BL.Stripe to Black",
    pdfDocument: blackStripeToBlack,
  },
  {
    beltIcon: imageB2d,
    beltTitle: "Black to 2nd Degree",
    pdfDocument: secondDegree,
  },
];

const beltPromoteList = [
  {
    beltIcon: imageChild,
    beltTitle: "Children",
    pdfDocument: children,
  },
  {
    beltIcon: imageAdult,
    beltTitle: "Adults",
    pdfDocument: adults,
  },
];

const beltFormList = [
  {
    beltIcon: imagePencil,
    beltTitle: "Student Information",
    pdfDocument: studInfo,
  },
  {
    beltIcon: imagePencil,
    beltTitle: "Guest Pass",
    pdfDocument: guest,
  },
];

class BeltRequirements extends React.Component {
  render() {
    return (
      <div id="belt-requirements" className="belt-requirements">
        <GallerySection />

        <div className="belt-section">
          <h2>Belt Requirements</h2>
          <ul>
            {beltRequirementsList.map((beltRequirementsItem) => (
              <a href={beltRequirementsItem.pdfDocument} target="_blank">
                <li key={beltRequirementsItem.beltTitle}>
                  <div className="belt-list-holder">
                    <div className="belt-icon-holder">
                      <img
                        src={beltRequirementsItem.beltIcon}
                        alt={beltRequirementsItem.beltTitle}
                      />
                    </div>
                    <h5>{beltRequirementsItem.beltTitle}</h5>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>

        <div className="intent-section">
          <h2>Intent to Promote</h2>
          <ul>
            {beltPromoteList.map((beltPromoteItem) => (
              <a href={beltPromoteItem.pdfDocument} target="_blank">
                <li key={beltPromoteItem.beltTitle}>
                  <div className="belt-list-holder">
                    <div className="belt-icon-holder">
                      <img
                        src={beltPromoteItem.beltIcon}
                        alt={beltPromoteItem.beltTitle}
                      />
                    </div>
                    <h5>{beltPromoteItem.beltTitle}</h5>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>

        <div className="form-section">
          <h2>Forms</h2>
          <ul>
            {beltFormList.map((beltFormItem) => (
              <a href={beltFormItem.pdfDocument} target="_blank">
                <li key={beltFormItem.beltTitle}>
                  <div className="belt-list-holder">
                    <div className="belt-icon-holder">
                      <img
                        src={beltFormItem.beltIcon}
                        alt={beltFormItem.beltTitle}
                      />
                    </div>
                    <h5>{beltFormItem.beltTitle}</h5>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default BeltRequirements;
