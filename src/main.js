import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store';

// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faLinkedinIn, faWhatsapp, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faFacebookF, faLinkedinIn, faWhatsapp, faInstagram, faGithub );

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app');
