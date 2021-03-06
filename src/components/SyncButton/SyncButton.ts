import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import Sync from '@/icons/Sync.vue';

@Component({
	components: {
		Sync,
	},
})
export default class SyncButton extends Vue {
	@Action
	syncJobs: () => void;

	@State('fetching')
	isFetching: boolean;
}
