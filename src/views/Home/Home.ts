import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { SlideXRightTransition } from 'vue2-transitions';

import { Job } from '@/models/Job';
import Modal from '@/components/Modal/Modal.vue';
import SyncButton from '@/components/SyncButton/SyncButton.vue';
import ScraperJob from '@/components/ScraperJob/ScraperJob.vue';
import Error from '@/components/Error/Error.vue';

@Component({
	components: {
		SlideXRightTransition,
		ScraperJob,
		Modal,
		SyncButton,
		Error,
	},
})
export default class Home extends Vue {
	@State
	jobs: Job[];

	@State
	error: any;

	@State
	modal: boolean;
}
