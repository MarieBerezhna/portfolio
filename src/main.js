import Vue from 'vue';
import App from './App.vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Vuex from 'vuex';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faFontAwesome);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app');
