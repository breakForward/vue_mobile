<template>
  <div class="article">
    <Header />
    <List myType="文章">
      <template v-slot:default="slotProps">
        <ArticleList :articleArr="slotProps.listArr" />
      </template>
    </List>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'Article',
  components: {
    Header,
    List,
    ArticleList
  }
}
</script>

<style lang="less" scoped>
.article {
  height: calc(100vh - 2rem);
  overflow-y: auto;
}
</style>