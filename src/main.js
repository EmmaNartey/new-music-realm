// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'

import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'

Vue.config.productionTip = false;

Vue.use(SuiVue);

Vue.use(VueAxios, axios);

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

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

/**
 * First, we load the Player class
 */
import Player from './classes/Player/Player';
window.Player = Player;

/**
 * Next, we add the playlist manager
 * Available Methods:
 * all() - gets all the playlists
 * get(name) - gets a playlist by name
 * add(name, songs = []) - adds a playlist
 * remove(name) - removes a playlist by name
 * update(name, songs) - Updates a playlist by name
 */
import PlaylistManager from './classes/Playlist/PlaylistManager';
window.Playlists = new PlaylistManager;
