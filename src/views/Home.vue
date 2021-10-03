<template>
  <div class="home">
    <Header />
    <Scroll>
      <Swiper :swiperArr="swiperArr" />
      <BannerList />
      <ArticleList />
    </Scroll>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BannerList from '@/components/BannerList.vue'
import Scroll from '@/components/Scroll.vue'
import ArticleList from '@/components/ArticleList.vue'
import Swiper from '../components/Swiper.vue'

export default {
  name: 'Home',
  data() {
    return {
      swiperArr: []
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
    const { data } = await this.$axios.get('/getRecom.php', { params: { num: 5 } })
    this.swiperArr = data
  }
}
</script>
<style lang="less" scoped>
.home {
  background-color: #f6f6f6;
}
</style>
