<template>
  <router-view/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class App extends Vue {
	@Action
	fetchJobs: () => void;

	public created() {
		this.fetchJobs();
	}
}
</script>
