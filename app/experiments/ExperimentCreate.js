import React from "react";

class ExperimentCreate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			steps: [{
				id: "1",
				name: "",
			}]
		};

		this.addStep = this.addStep.bind(this);
		this.removeLastStep = this.removeLastStep.bind(this);
	}

	addStep(e) {
		e.preventDefault();

		this.setState((prevState) => ({
			steps: prevState.steps.concat({
				id: prevState.steps.length + 1,
				name: "",
			})
		}))
	}

	removeLastStep(e) {
		e.preventDefault();

		this.setState((prevState) => ({
			steps: prevState.steps.slice(0,-1)
		}))
	}

	render() {
		const {steps} = this.state;
		return (
			<form>
				<div>
					<label>
						Experiment name
						<input type="text"/>
					</label>
				</div>
				<div>
					<h5>Steps</h5>
					<div>
						<button onClick={this.addStep}>+ Add new step</button>
						{steps && steps.length > 1 &&
						<button onClick={this.removeLastStep}>- Remove last step</button>
						}
					</div>
					{steps.map((step) => {
						return (
							<div key={step.id}>
								<label>
									<input type="text" defaultValue={step.id}/>
								</label>
							</div>
						)
					})}
				</div>

				<button type="submit">Save</button>
			</form>
		);
	}
}

export default ExperimentCreate;
