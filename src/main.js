import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import axios from 'axios';
import VueToast from 'vue-toast-notification';
import { VuejsDatatableFactory } from 'vuejs-datatable';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { setHeaderToken } from '../utils/auth'
import VueGoodTablePlugin from 'vue-good-table';
import VModal from 'vue-js-modal'
import Select2 from 'v-select2-component';
import VueApexCharts from 'vue-apexcharts'
import VueLoading from 'vue-loading-overlay';

import 'vue-good-table/dist/vue-good-table.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-toast-notification/dist/theme-sugar.css';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false

const token = localStorage.getItem('token');

if (token) { 
  setHeaderToken(token) 
} 

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueToast)
Vue.use(VuejsDatatableFactory)
Vue.use(VueGoodTablePlugin);
Vue.use(VModal)
Vue.use(VueApexCharts)
Vue.use(VueLoading);

Vue.component('Select2', Select2);
Vue.component('apexchart', VueApexCharts)

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost/siaptp_backend/public/api/';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
