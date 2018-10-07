import { connect } from 'inferno-fluxible';
import { css } from 'emotion';
import { textCenter } from '../styles/utils';

const base = css`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;

	& button {
		margin: auto 0;
	}
`;

const btn = css`
	border-width: 0;
	padding: 0.5rem 1rem;
	background-color: var(--lighter-dark);
	cursor: pointer;
	color: var(--light);
`;

function JobComponent({ job, openModal }) {
	return (
		<article class={base}>
			<h3 class={textCenter}>{job.title}</h3>

			<button class={btn} onClick={_ => openModal(job)}>
				Show More
			</button>
		</article>
	);
}

const mutations = {
	openModal(store, selectedJob) {
		document.body.style.overflow = 'hidden';
		store.updateStore({ showModal: true, selectedJob });
	},
};

export const Job = connect(
	null,
	mutations,
)(JobComponent);
