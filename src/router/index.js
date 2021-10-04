import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('@/views/Home.vue')
const Classify = ()=> import('@/views/Classify.vue')
const List = ()=> import('@/components/List.vue')
const MySearch = ()=> import('@/views/MySearch.vue')
const DetailPage = ()=> import('@/components/DetailPage.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/search',
    name: 'MySearch',
    component: MySearch
  },
  {
    path: '/detail',
    name: 'DetailPage',
    component: DetailPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
