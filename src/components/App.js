import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Gallery from "./Gallery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
		<Router>
			<Header />
			<main id="main">
				<Switch>
					<Route exact path="/"><div>Home</div></Route>
					<Route path="/members"><div>members</div></Route>
					<Route path="/principles"><div>principles</div></Route>
					<Route path="/belt-requirements"><div>belt-requirements</div></Route>
					<Route path="/calendar-schedule"><div>calendar-schedule</div></Route>
					<Route path="/gallery"><Gallery /></Route>
					<Route path="*"><div>Error</div></Route>
				</Switch>
			</main>
			<Footer />
		</Router>
  );
}

export default App;













