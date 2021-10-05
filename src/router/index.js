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
    component: Home,
    meta: { title: '首页' }
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify,
    meta: { title: '分类' }
  },
  {
    path: '/inspiration',
    name: 'Inspiration',
    component: Inspiration,
    meta: { title: '灵感' }
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
    meta: { title: '文章' }
  },
  {
    path: '/search',
    name: 'MySearch',
    component: MySearch,
    meta: { title: '搜索' }
  },
  {
    path: '/detail',
    name: 'DetailPage',
    component: DetailPage,
    meta: { title: '详情' }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
