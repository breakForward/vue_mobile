<template>
  <div class="inspiration">
    <Header />
    <div class="inspiration-list">
      <List myType="灵感">
        <template v-slot:default="slotProps">
          <BannerList :bannerArr="slotProps.listArr" />
        </template>
      </List>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import BannerList from '@/components/BannerList.vue'

export default {
  name: 'Inspiration',
  components: {
    Header,
    List,
    BannerList
  }
}
</script>

<style lang="less" scoped>
.inspiration-list {
  height: calc(100vh - 2rem);
  overflow-y: auto;
}
</style>