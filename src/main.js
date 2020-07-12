import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.less";
import { spin, layout, affix } from "ant-design-vue";
// import "ant-design-vue/lib/spin/style";


import api from './api/http'
Vue.prototype.$api = api  // 全局变量，可在所有页面使用

Vue.config.productionTip = false

// Vue.use(Antd);
Vue.use(spin);
Vue.use(layout);
Vue.use(affix);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
