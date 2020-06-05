import Vue from 'vue'
import App from './App.vue'
import router from './router'


import api from './api/http'
Vue.prototype.$api = api  // 全局变量，可在所有页面使用

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
