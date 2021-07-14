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
import Error from "./pages/error";

import AboutUs from "./pages/about-us";
import Program from "./pages/program";
import Team from "./pages/team";
import ContactUs from "./pages/contact-us";

function App() {
  return (
		<Router>
			<Header />
			<main id="main">
				<Switch>
					<Route exact path="/"><Home /></Route>
					<Route path="/members"><Members /></Route>
					<Route path="/principles"><Principles /></Route>
					<Route path="/belt-requirements"><BeltRequirements /></Route>
					<Route path="/calendar-schedule"><CalendarSchedule /></Route>
					<Route path="/gallery"><Gallery /></Route>

					<Route path="/about-us"><AboutUs /></Route>
					<Route path="/program"><Program /></Route>
					<Route path="/team"><Team /></Route>
					<Route path="/contact-us"><ContactUs /></Route>

					<Route path="*"><Error /></Route>
				</Switch>
			</main>
			<Footer />
		</Router>
  );
}

export default App;