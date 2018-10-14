import { connect } from 'inferno-fluxible';
import { ChevronDown } from '../icons/ChevronDown';

function JobComponent({ job, openModal }) {
	return (
		<article class="bg-whiter p-4 mt-5 rounded-lg flex items-center shadow">
			<div class="h-16 w-16 rounded-full bg-white" />

			<div class="m-5">
				<h3 class="text-black">{job.company.name}</h3>
				<h4 class="text-grey text-sm mt-3">{job.title}</h4>
			</div>

			<button
				onClick={_ => openModal(job)}
				class="h-8 w-8 border-purple border-2 rounded-full ml-auto bg-indigo text-whiter"
			>
				<ChevronDown className="h-full w-full fill-current" />
			</button>
		</article>
	);
}

const mutations = {
	openModal(store, selectedJob) {
		document.body.style.overflow = 'hidden';
		store.updateStore({ showModal: true, selectedJob }, _ =>
			console.log(store.getStore()),
		);
	},
};

export const Job = connect(
	null,
	mutations,
)(JobComponent);
