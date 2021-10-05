<template>
  <div class="article-list">
    <ArticleItem 
      v-for="item in articleArr" 
      :key="item.id" 
      :articleObj = item
    />
  </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue'

export default {
  name: 'ArticleList',
  props: {
    articleArr: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    ArticleItem
  }
}
</script>

<style lang="less" scoped>
.article-list {
  padding: .2rem .15rem;
  background-color: #fff;
}
</style>