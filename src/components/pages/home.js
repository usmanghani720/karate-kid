import React from "react";

import GallerySection from "./gallery-section";
import InformationSection from "./sections/information-section";
import MeetSection from "./sections/meet-section";
import TrainingBoxSection from "./sections/training-box-section";
import TrainingSection from "./sections/training-section";
import WeOfferSection from "./sections/we-offer-section";
import AbooutBoxSection from "./sections/about-box-section";
import BannerSection from "./sections/banner-section";
import Sidebar from "./sections/sidebar-section";

class Home extends React.Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
      setTimeout(() => {
        this.setState({showModal: true})
      }, 3000);

  }
  render() {
    return (
      <div id="home">
        <Sidebar />
        <BannerSection />
        <GallerySection />
        <AbooutBoxSection />
        <WeOfferSection />
        <TrainingSection />
		{this.state.showModal ?
        	<TrainingBoxSection />
		: null}
        <MeetSection />
        <InformationSection />
      </div>
    );
  }
}
export default Home;
