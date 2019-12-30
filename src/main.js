import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import VueScrollTo  from 'vue-scrollto';

Vue.use(VueResource);
Vue.use(VueScrollTo);


new Vue({
  el: '#app',
  render: h => h(App)
})
