import { Component, Vue, Prop } from 'vue-property-decorator';
import { Job } from '@/models/Job';
import { State, Action } from 'vuex-class';

@Component
export default class ScraperJob extends Vue {
	@State('modal')
	showModal: boolean;

	@State('overlay')
	showOverlay: boolean;

	@State('selectedJob')
	job: Job;

	@Action
	dismissJobDetails: () => void;
}
