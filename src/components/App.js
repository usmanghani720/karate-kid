import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from "./pages/home";
import Members from "./pages/members";
import Principles from "./pages/principles";
import BeltRequirements from "./pages/belt-requirements";
import CalendarSchedule from "./pages/calendar-schedule";
import Gallery from "./pages/gallery";

import AboutUs from "./pages/about-us";
import Program from "./pages/program";
import Team from "./pages/team";
import ContactUs from "./pages/contact-us";

import Error from "./pages/error";
import BannerSection from "./pages/sections/banner-section";

function App() {
  return (
		<Router>
			<Header />
			<main id="main">
				<div className="container">
					<Switch>
						<Route exact path="/"><Home /></Route>
						<Route exact path="/members"><Members /></Route>
						<Route exact path="/principles"><Principles /></Route>
						<Route exact path="/belt-requirements"><BeltRequirements /></Route>
						<Route exact path="/calendar-schedule"><CalendarSchedule /></Route>
						<Route exact path="/gallery"><Gallery /></Route>

						<Route exact path="/about-us"><AboutUs /></Route>
						<Route exact path="/program"><Program /></Route>
						<Route exact path="/team"><Team /></Route>
						<Route exact path="/contact-us"><ContactUs /></Route>

						<Route exact path="*"><Error /></Route>
					</Switch>
				</div>
			</main>
			<Footer />
		</Router>
  );
}

export default App;