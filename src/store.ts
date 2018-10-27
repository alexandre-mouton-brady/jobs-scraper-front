import Vue from 'vue';
import Vuex from 'vuex';
import { Job } from './models/Job';

Vue.use(Vuex);

// TODO: Add types
export default new Vuex.Store({
	state: {
		jobs: [] as Job[],
		selectedJob: {} as Job,
		modal: false,
		overlay: false,
		error: null,
		fetching: false,
	},
	mutations: {
		startFetching(store) {
			store.fetching = true;
		},
		stopFetching(store) {
			store.fetching = false;
		},
		addJob(store, job: Job) {
			store.jobs.unshift(job);
		},
		setJobs(store, jobs) {
			store.jobs = jobs;
		},
		setError(store, error) {
			store.error = error;
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
		clearJobs(store) {
			store.jobs.length = 0;
		},
		cleanError(store) {
			store.error = null;
		},
	},
	actions: {
		async fetchJobs({ commit }) {
			const url = `http://localhost:3000/api/jobs`;
			const jobs = await fetch(url).then(r => r.json());
			commit('setJobs', jobs);
		},
		async syncJobs({ commit }) {
			commit('startFetching');

			const url = `http://localhost:3000/api/sync`;
			const response = await fetch(url).then(r => r.json());
			if (!response.success) commit('setError', response.error);

			commit('stopFetching');
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
