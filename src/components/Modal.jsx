import { connect } from 'inferno-fluxible';

function ModalComponent({ show, job, closeModal }) {
	return (
		<>
			<div
				class={`overlay ${show ? 'scale-1' : ''}`}
				onclick={closeModal}
			/>
			<div class={`modal ${show ? 'translateY-0' : ''}`}>
				<span class="modal-badge" />

				<div class="container flex flex-col relative h-full">
					<button class="modal-close" onclick={closeModal}>
						&times;
					</button>
					<h1 class="mt-16">{job.title}</h1>
					<h2 class="text-grey text-base mt-4">{job.location}</h2>

					<h3 class="text-sm text-grey mt-8">Qualifications</h3>

					<p class="h-full scrollbar overflow-auto text-black leading-loose font-semibold mt-2 pr-6">
						{job.description}
					</p>
				</div>
			</div>
		</>
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
