import Vue from 'vue';
import VueSocketio from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './assets/styles/tailwind.css';

Vue.config.productionTip = false;
Vue.use(VueSocketio, 'http://localhost:3000');

/* tslint-disable */
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
