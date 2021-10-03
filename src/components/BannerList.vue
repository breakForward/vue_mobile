<template>
  <div class="banner-list">
    <ListContent v-for="item in bannerArr" :key="item.id">
      <img slot="img" :src="item.picurl" alt="">
      <p slot="content">{{ item.title }}</p>
    </ListContent>
  </div>
</template>

<script>
import ListContent from './ListContent.vue'

export default {
  name: 'Bannerlist',
  data() {
    return {
      bannerArr: []
    }
  },
  components: {
    ListContent
  },
  async created() {
    const { data } = await this.$axios.get('/getRecom.php', { params: { num: 10 } })
    this.bannerArr = data
  }
}
</script>

<style lang="less" scoped>
.banner-list {
  margin-top: .2rem;
  padding: 0 .15rem;
  // 多列布局
  column-count: 2; // 列数
  column-gap: .15rem; // 列之间的间隔
}
</style>