import { Component } from 'inferno';
import { injectGlobal, css } from 'emotion';
import { Loading } from './components/Loading';
import { Company } from './components/Company';
import { Modal } from './components/Modal';
import { textCenter } from './styles/utils';

injectGlobal`
	:root {
		--dark: #1e272e;
		--lighter-dark: #485460;
		--light: #fafafa;
		--baseSize: 16px;
	}

	* {
		box-sizing: border-box;
	}

 	body {
		font-family: monospace;
		margin: 0;
		color: var(--light);
		background-color: var(--dark);
		font-size: var(--baseSize);
  	}
`;

export class App extends Component {
	state = {
		data: {},
		loading: true,
	};

	componentDidMount() {
		this.getJobs();
	}

	getJobs = _ => {
		fetch('http://localhost:3000/api/jobs')
			.then(r => r.json())
			.then(data => this.setState({ data }))
			.catch(console.error);
	};

	render() {
		const { companies } = this.state.data;

		if (companies) {
			return (
				<div>
					<h1 class={textCenter}>Alex's Job Listing</h1>
					{companies.map(company => (
						<Company company={company} key={company.name} />
					))}
					<Modal />
				</div>
			);
		} else {
			return <Loading />;
		}
	}
}
