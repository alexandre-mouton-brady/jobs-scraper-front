import { Component, Vue } from 'vue-property-decorator';
import ScraperJob from '@/components/ScraperJob/ScraperJob.vue';
import Modal from '@/components/Modal/Modal.vue';
import { State } from 'vuex-class';
import { Job } from '@/models/Job';

@Component({
	components: {
		ScraperJob,
		Modal,
	},
})
export default class Home extends Vue {
	@State
	jobs: Job[];
	@State
	modal: boolean;
}
