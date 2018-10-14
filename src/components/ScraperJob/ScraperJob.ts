import { Component, Vue, Prop } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import ChevronDown from '@/icons/ChevronDown/ChevronDown.vue';
import { Job } from '@/models/Job';

@Component({
	components: {
		ChevronDown,
	},
})
export default class ScraperJob extends Vue {
	@Prop(Object)
	job: Job;

	@Action
	showJobDetails: (job: Job) => void;
}
