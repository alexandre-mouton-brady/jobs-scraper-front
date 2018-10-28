import Vue from 'vue';
import Component from 'vue-class-component';
import VueSocketio from 'vue-socket.io';
import VueVirtualScroller from 'vue-virtual-scroller';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import './assets/styles/tailwind.css';

Vue.config.productionTip = false;
Vue.use(VueSocketio, 'http://localhost:3000');
Vue.use(VueVirtualScroller);

// Register the router hooks with their names
Component.registerHooks(['socket']);

/* tslint-disable */
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
