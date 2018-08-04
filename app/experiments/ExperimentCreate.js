import React from "react";

class ExperimentCreate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			steps: [{
				id: "1",
				name: "",
			}]
		};

		this.addStep = this.addStep.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onNameChange = this.onNameChange.bind(this);
		this.onStepChange = this.onStepChange.bind(this);
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

	onNameChange(e) {
		e.preventDefault();

		this.setState({
			name: e.target.value
		});
		console.log(this.state)
	}

	onStepChange(e, fieldName) {
		e.preventDefault();

		// this.setState((prevState) => ({
		// 	steps: [
		// 		...prevState.steps,
		// 		[fieldName]: e.target.value
		// 	]
		// }));
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(this.state)
	}

	render() {
		const {name, steps} = this.state;
		return (
			<form onSubmit={this.onSubmit}>
				<div>
					<label>
						Experiment name
						<input value={name} onChange={this.onNameChange}
							   placeholder="Type in experiment name" type="text"/>
					</label>
				</div>
				<div>
					<h5>Steps</h5>
					<div>
						<a onClick={this.addStep}>+ Add new step</a>
						{steps && steps.length > 1 &&
						<a onClick={this.removeLastStep}>- Remove last step</a>
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

				{JSON.stringify(this.state)}
			</form>
		);
	}
}

export default ExperimentCreate;
