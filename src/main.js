import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/api'
import '@/assets/js/response'
import '@/assets/css/reset.css'
import { Icon, Swipe, SwipeItem, Search, Tabbar, TabbarItem  } from 'vant'

Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Search)
Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
