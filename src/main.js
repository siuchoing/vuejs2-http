import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

/******************************
 * Vue.use()    // To add a plugin to the core vuejs functionality
 */
Vue.use(VueResource);

/**************************** [https://github.com/pagekit/vue-resource/blob/develop/docs/api.md]
 * Global http config (http) && Local http config ($http)
 *
 * To configure the root route or the route URL of all our requests globally
 */
Vue.http.options.root = 'https://vuejs2-http-7e7ef.firebaseio.com/data.json';
// Vue.http.options.root = 'http://127.0.0.1:8080/api/v1';

new Vue({
  el: '#app',
  render: h => h(App)
})
