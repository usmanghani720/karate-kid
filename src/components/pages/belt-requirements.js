import React from 'react';

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


const beltRequirementsList = [
	{
		beltIcon: imageW2g,
		beltTitle: "White to Gold"
	},
	{
		beltIcon: imageG2o,
		beltTitle: "Gold to Orange"
	},
	{
		beltIcon: imageO2g,
		beltTitle: "Orange to Green"
	},
	{
		beltIcon: imageG2p,
		beltTitle: "Green to Purple"
	},
	{
		beltIcon: imageP2b,
		beltTitle: "Purple to Blue"
	},
	{
		beltIcon: imageB2b,
		beltTitle: "Blue to Red"
	},
	{
		beltIcon: imageR2b,
		beltTitle: "Red to Brown"
	},
	{
		beltIcon: imageBr2b,
		beltTitle: "Brown to BL.Stripe"
	},
	{
		beltIcon: imageS2p,
		beltTitle: "BL.Stripe to Black"
	},
	{
		beltIcon: imageB2d,
		beltTitle: "Black to 2nd Degree"
	}
];

const beltPromoteList = [
	{
		beltIcon: imageChild,
		beltTitle: "Childeren"
	},
	{
		beltIcon: imageAdult,
		beltTitle: "Adult"
	}
];

const beltFormList = [
	{
		beltIcon: imagePencil,
		beltTitle: "Student Information (Single Sided)"
	},
	{
		beltIcon: imagePencil,
		beltTitle: "Student Information (Double Sided)"
	},
	{
		beltIcon: imagePencil,
		beltTitle: "Guest Pass"
	}
];



class BeltRequirements extends React.Component {
	render() {
		return (
			<div id="belt-requirements" className="belt-requirements">
				<GallerySection />

				<div className="belt-section">
					<h2>Belt Requirements</h2>
					<ul>
						{
							beltRequirementsList.map(beltRequirementsItem => (
								<li key={beltRequirementsItem.beltIcon}>
									<div className="belt-list-holder">
										<div className="belt-icon-holder">
											<img src={beltRequirementsItem.beltIcon} />
										</div>
										<h5>{beltRequirementsItem.beltTitle}</h5>
									</div>
								</li>
							))
						}
					</ul>
				</div>

				<div className="intent-section">
					<h2>Intent to Promote</h2>
					<ul>
						{
							beltPromoteList.map(beltPromoteItem => (
								<li key={beltPromoteItem.beltIcon}>
									<div className="belt-list-holder">
										<div className="belt-icon-holder">
											<img src={beltPromoteItem.beltIcon} />
										</div>
										<h5>{beltPromoteItem.beltTitle}</h5>
									</div>
								</li>
							))
						}
					</ul>
				</div>

				<div className="form-section">
					<h2>form</h2>
					<ul>
						{
							beltFormList.map(beltFormItem => (
								<li key={beltFormItem.beltIcon}>
									<div className="belt-list-holder">
										<div className="belt-icon-holder">
											<img src={beltFormItem.beltIcon} />
										</div>
										<h5>{beltFormItem.beltTitle}</h5>
									</div>
								</li>
							))
						}
					</ul>
				</div>
			</div>
		);
	}
}
export default BeltRequirements;