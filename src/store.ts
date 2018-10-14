import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		jobs: [],
		selectedJob: {},
		modal: false,
		overlay: false,
	},
	mutations: {
		setJobs(store, jobs) {
			store.jobs = jobs;
		},
		toggleModal(store, action) {
			store.modal = action;
		},
		toggleOverlay(store, action) {
			store.overlay = action;
		},
		selectJob(store, job) {
			store.selectedJob = job;
		},
	},
	actions: {
		async fetchJobs({ commit }) {
			const url = `http://localhost:3000/api/jobs`;
			const jobs = await fetch(url).then(r => r.json());
			commit('setJobs', jobs);
		},
		showJobDetails({ commit }, job) {
			commit('toggleModal', true);
			commit('toggleOverlay', true);
			commit('selectJob', job);
			document.body.classList.add('overflow-hidden');
		},
		dismissJobDetails({ commit }) {
			commit('toggleModal', false);
			commit('toggleOverlay', false);
			commit('selectJob', {});
			document.body.removeAttribute('class');
		},
	},
});
