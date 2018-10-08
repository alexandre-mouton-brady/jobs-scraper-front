import { Job } from './Job';

export function Company({ company }) {
	const { jobs, name, count } = company;

	const jobsList = jobs.map(job => (
		<Job key={job.id} company={name} job={job} />
	));

	return <section class="container">{jobsList}</section>;
}
