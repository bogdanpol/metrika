import React from "react";
import {Link, Route} from "react-router-dom";

import ExperimentsList from "./ExperimentsList";
import ExperimentCreate from "./ExperimentCreate";

class ExperimentsPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {match} = this.props;
		return (
			<section>
				<div>
					<h3>Experiments</h3>
					<Link to={`${match.url}/create`}>make a new experiment</Link>
				</div>
				<div>
					<Route exact path={match.path} component={ExperimentsList} />
					<Route path={`${match.path}/create`} component={ExperimentCreate} />
				</div>
			</section>
		);
	}
}

export default ExperimentsPage;
