import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('@/views/Home.vue')
const MySearch = ()=> import('@/views/MySearch.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'MySearch',
    component: MySearch
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
