import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import base from '../src/config/http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(ElementUI);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.$http = base


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
