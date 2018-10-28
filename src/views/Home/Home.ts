import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { SlideXRightTransition } from 'vue2-transitions';
import anime from 'animejs';

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

	public enter(el: HTMLElement, done: () => void) {
		const delay = (Number.parseInt(el.dataset.index || '0', 10) + 1) * 150;

		anime({
			targets: el,
			opacity: [0, 1],
			translateX: ['100%', 0],
			duration: 500,
			delay,
			easing: 'easeInOutCubic',
			elasticity: 500,
			complete: done,
		});
	}

	public leave(el: HTMLElement, done: () => void) {
		const delay = Number.parseInt(el.dataset.index || '0', 10) * 150;

		anime({
			targets: el,
			opacity: 0,
			translateX: '-100%',
			duration: 500,
			delay,
			easing: 'easeInOutCubic',
			elasticity: 500,
			complete: done,
		});
	}
}
