<template>
  <div class="banner-list">
    <ListContent 
      v-for="item in bannerArr" 
      :key="item.id"
      :bannerObj="item"
    />
  </div>
</template>

<script>
import ListContent from './ListContent.vue'

export default {
  name: 'Bannerlist',
  props: {
    bannerArr: { 
      type: Array, 
      default() {
       return []
      }
    }
  },
  components: {
    ListContent
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