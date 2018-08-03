import React from "react";

import ExperimentsPage from "../experiments/ExperimentsPage";

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

import "./App.css"

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<header>
					<h1>Metrika</h1>
					<ul>
						<li>
							<Link to="/experiments">Experiments</Link>
						</li>
					</ul>
				</header>
				<hr/>
				<Route exact path="/" component={ExperimentsPage} />
				<Route path="/experiments" component={ExperimentsPage} />

			</section>
		);
	}
}

export default App;
