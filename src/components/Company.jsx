import { cx, css } from 'emotion';
import { Job } from './Job';

const styles = css`
	& h2 {
		text-align: center;
		padding: 0.5rem 0;
		background-color: var(--lighter-dark);
	}

	& div {
		padding: 0 1rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
	}
`;

export function Company({ company }) {
	const { jobs, name, count } = company;

	const jobsList = jobs.map(job => <Job key={job.id} job={job} />);

	return (
		<section class={styles}>
			<h2>
				{name} ({count})
			</h2>

			<div>{jobsList}</div>
		</section>
	);
}
