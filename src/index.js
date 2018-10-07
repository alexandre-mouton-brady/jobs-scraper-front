import { render } from 'inferno';
import { initializeStore } from 'fluxible-js';
import { App } from './App.jsx';

initializeStore({
	initialStore: {
		showModal: false,
		selectedJob: {},
	},
});

render(<App />, document.getElementById('app'));
