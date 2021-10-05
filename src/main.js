import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/js/response'
import '@/assets/css/reset.css'

import '@/vant'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
