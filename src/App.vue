<template>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	sockets: {
		job(job) {
			this.$store.commit('addJob', job);
		},
		fetchStart() {
			this.$store.commit('clearJobs');
		},
	},

	created() {
		this.$store.dispatch('fetchJobs');
	},
};
</script>

