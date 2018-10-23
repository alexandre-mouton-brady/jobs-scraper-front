<template>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	sockets: {
		connect: function() {
			console.log('socket connected');
		},
		job: function(job) {
			console.log({ job });
		},
	},

	created() {
		this.$store.dispatch('fetchJobs');
	},
};
</script>

