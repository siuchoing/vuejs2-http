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
Vue.http.options.root = 'https://vuejs2-http-7e7ef.firebaseio.com/';
// Vue.http.options.root = 'http://127.0.0.1:8080/api/v1';

// Change request method globally by adding interceptor on each request
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';   // where PUT method without id in Firebase server, and new input data will cover the old one
  }
  // override the response.json method on all your request globally
  next(response => {
    // extract the response body, and assign 'messages' as ID for looping PUT response body
    response.json = () => { return { messages: response.body } }
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})
