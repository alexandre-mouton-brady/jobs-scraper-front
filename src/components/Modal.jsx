import { connect } from 'inferno-fluxible';
import { css, cx } from 'emotion';

const base = css`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 20px;
	background-color: var(--light);
	color: var(--dark);
	z-index: 50;
	opacity: 0;
	overflow: auto;
	transform: scale3d(1, 0, 1);
	transition: all 300ms ease-in-out;

	& h1 {
		text-align: center;
	}

	& p {
		white-space: pre-wrap;
		width: 100%;
		max-width: 740px;
		margin: 0 auto;
	}

	& button {
		position: absolute;
		top: 20px;
		right: 20px;
		background-color: var(--dark);
		color: var(--light);
		height: 2rem;
		width: 2rem;
		font-size: 1.5rem;
		border-radius: 50%;
		border-width: 0;
		cursor: pointer;
	}
`;

const open = css`
	opacity: 1;
	transform: scale3d(1, 1, 1);
`;

function ModalComponent({ show, job, closeModal }) {
	return (
		<div class={cx(base, { [open]: show })}>
			<button onClick={closeModal}>&times;</button>
			<h1>{job.title}</h1>
			<p>{job.description}</p>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		show: state.showModal,
		job: state.selectedJob,
	};
}

const mutations = {
	closeModal(store) {
		document.body.removeAttribute('style');
		store.updateStore({ showModal: false });
	},
};

export const Modal = connect(
	mapStateToProps,
	mutations,
)(ModalComponent);
