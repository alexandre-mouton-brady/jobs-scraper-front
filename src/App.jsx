import { Component } from 'inferno';
import { Loading } from './components/Loading';
import { Company } from './components/Company';
import { Modal } from './components/Modal';

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

		return companies ? (
			<div>
				<h1 class="my-8 text-center">Alex's Job Listing</h1>

				{companies.map(company => (
					<Company company={company} key={company.name} />
				))}
				<Modal />
			</div>
		) : (
			<Loading />
		);
	}
}
