// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;

Vue.use(SuiVue);

Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});


// We register an event bus
window.EventBus = new Vue({});


window.axios = require('axios');

// We load classes
import Player from './classes/Player/Player';
window.Player = Player;
