import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element.js';
import './assets/css/global.css';

import axios from 'axios';
// 配置基本路径
axios.defaults.baseURL = 'http://127.0.0.1:8080/app/';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
