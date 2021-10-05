import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=> import('@/views/Home.vue')
const Classify = ()=> import('@/views/Classify.vue')
const Inspiration = ()=> import('@/views/Inspiration.vue')
const Article = ()=> import('@/views/Article.vue')
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
    path: '/inspiration',
    name: 'Inspiration',
    component: Inspiration
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
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
