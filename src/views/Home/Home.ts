import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import { Job } from '@/models/Job';
import Modal from '@/components/Modal/Modal.vue';
import SyncButton from '@/components/SyncButton/SyncButton.vue';
import ScraperJob from '@/components/ScraperJob/ScraperJob.vue';

@Component({
	components: {
		ScraperJob,
		Modal,
		SyncButton,
	},
})
export default class Home extends Vue {
	@State
	jobs: Job[];

	@State
	modal: boolean;
}
