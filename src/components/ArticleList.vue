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
  data() {
    return {
      articleArr: []
    }
  },
  components: {
    ArticleItem
  },
  async created() {
    const { data } = await this.$axios.get('/getArticle.php')
    this.articleArr = data
  }
}
</script>

<style lang="less" scoped>
.article-list {
  margin-top: .2rem;
  padding: .2rem .15rem;
  background-color: #fff;
}
</style>