import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/js/response'
import '@/assets/css/reset.css'
import { Icon, Swipe, SwipeItem, Search, Tabbar, TabbarItem, Sidebar, SidebarItem, List, PullRefresh } from 'vant'

Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Search)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(List)
Vue.use(PullRefresh)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
