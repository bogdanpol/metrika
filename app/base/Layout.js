import React from "react";
import Link from "next/link";

class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section>
				<header>
					<h1>
						<Link href="/">Metrika</Link>
					</h1>
					<ul>
						<li>
							<Link href="/experiments">Experiments</Link>
						</li>
					</ul>
				</header>
				<hr/>
				{this.props.children}
			</section>
		);
	}
}

export default Layout;
