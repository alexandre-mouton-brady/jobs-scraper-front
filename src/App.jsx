import { Component } from 'inferno';
import { Loading } from './components/Loading';
import { Company } from './components/Company';
import { Modal } from './components/Modal';
import { Job } from './components/Job';

export class App extends Component {
	state = {
		jobs: [],
		loading: true,
	};

	componentDidMount() {
		this.getJobs();
	}

	getJobs = _ => {
		fetch('http://localhost:3000/api/jobs')
			.then(r => r.json())
			.then(jobs => this.setState({ jobs, loading: false }))
			.then(_ => console.log(this))
			.catch(console.error);
	};

	render() {
		const { jobs, loading } = this.state;

		return loading ? (
			<Loading />
		) : (
			<div>
				<h1 class="my-8 text-center">Alex's Job Listing</h1>

				<div className="container">
					{jobs.map(job => (
						<Job job={job} key={job.id} />
					))}
				</div>

				<Modal />
			</div>
		);
	}
}
