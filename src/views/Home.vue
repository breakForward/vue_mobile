<template>
  <div class="home">
    <Header />
    <Scroll>
      <Swiper :swiperArr="swiperArr" />
      <BannerList :bannerArr="bannerArr" />
      <ArticleList :articleArr="articleArr" />
    </Scroll>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BannerList from '@/components/BannerList.vue'
import Scroll from '@/components/Scroll.vue'
import ArticleList from '@/components/ArticleList.vue'
import Swiper from '@/components/Swiper.vue'

import { getBanner, getArticle } from '@/api/myAxios'

export default {
  name: 'Home',
  data() {
    return {
      swiperArr: [],
      bannerArr: [],
      articleArr: []
    }
  },
  components: {
    Header,
    BannerList,
    Scroll,
    ArticleList,
    Swiper
  },
  async created() {
    // 获取轮播数据
    const item1 = await getBanner('/getList.php', { tejian: true })
    this.swiperArr = item1.data
    // 获取推荐数据
    const item2 = await getBanner('/getList.php', { num: 10 })
    this.bannerArr = item2.data
    // 获取文章数据
    const item3 = await getArticle('/getArticle.php')
    this.articleArr = item3.data
  }
}
</script>
<style lang="less" scoped>
.home {
  background-color: #f6f6f6;
}
</style>
