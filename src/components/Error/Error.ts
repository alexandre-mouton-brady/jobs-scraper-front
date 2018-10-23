import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

@Component
export default class Error extends Vue {
	@State
	error: any;

	@Mutation
	cleanError: () => void;

	get timeLeft() {
		return this.error.data.timeLeft;
	}
}
