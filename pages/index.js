import React from "react";
import moment from "moment";

import Layout from "../app/base/Layout";

const initial_state = {
	start: null,
	steps: [],
	maxSteps: 7,
};

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = initial_state
	}

	startExperiment = (id) => {
		this.setState({
			start: moment().utc()
		});
	};

	nextStep = () => {
		this.setState((prevState) => ({
			...prevState,
			steps: prevState.steps.concat([moment().utc()])
		}));
	};

	endExperiment = () => {
		/**
		 * todo: submit and clean
		 */
		this.setState(initial_state)
	};

	render() {
		const { start, steps, maxSteps } = this.state;
		return (
			<Layout>
				<h3>Latest experiment</h3>

				{!start && <button onClick={this.startExperiment}>Run again</button>}
				{start && (
					<div>
						<button onClick={this.endExperiment}>End Experiment</button>
						{steps.length !== maxSteps &&
							<button onClick={this.nextStep}>Next Step</button>
						}
					</div>
				)}

				<table>
					<thead>
						<tr>
							<th/>
							<th>Home</th>
							<th>Schonleinstrasse</th>
							<th>U8</th>
							<th>Hermannplatz</th>
							<th>U7</th>
							<th>Adenauerplatz</th>
							<th>Office</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{start && moment(start).format('L')}</td>
							{steps.map((step) => (
								<td key={step}>{moment(step).format('LTS')}</td>
							))}
						</tr>
						<tr>
							<td>04/07/2018</td>
							<td>08:37</td>
							<td>08:41</td>
							<td>08:45</td>
							<td>08:47</td>
							<td>08:51</td>
							<td>09:09</td>
							<td>09:15</td>
						</tr>
					</tbody>
				</table>
				<h5>Notes</h5>
				<p>- stopped for ciggaretes</p>
				<hr/>
			</Layout>
		);
	}
}

export default App;
