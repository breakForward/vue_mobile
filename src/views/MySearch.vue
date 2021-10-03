<template>
  <div class="search">
    <HeaderTitle title="搜索" />
    <van-search
      shape="square"
      show-action
      background="#31c27c"
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <div @click="onSearch" class="search-button">搜索</div>
      </template>
    </van-search>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle.vue'

export default {
  name: 'Search',
  components: {
    HeaderTitle
  },
  methods: {
    onSearch() {
      console.log('搜索')
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  margin-top: -1rem;
}
.search-button {
  width: 1rem;
  border-radius: 2px;
  text-align: center;
  background-color: #fff;
}
.van-search__content {
  background-color: #fff;
}
</style>