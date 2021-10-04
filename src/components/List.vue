<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="list">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <BannerList :bannerArr="bannerArr" />
    </van-list>
  </van-pull-refresh>
</template>

<script>
import BannerList from '@/components/BannerList.vue'

import { getInfoClass, getBanner } from '@/api/myAxios'

export default {
  name: "List",
  data() {
    return {
      cid: '',
      page: 0,
      bannerArr: [],
      // 是否处于上拉加载状态，加载过程中不触发load事件
      loading: false,
      // 是否已加载完成，加载完成后不再触发load事件
      finished: false,
      // 是否处于下拉加载中状态
      refreshing: false,
    }
  },
  components: {
    BannerList
  },
  methods: {
    async onLoad() {
      if (this.refreshing) {
        this.bannerArr = []
        this.refreshing = false
      }
      this.page++
      if(!this.cid) {
        // 获取分类导航数据
        const { data } = await getInfoClass('/infoClass.php')
        this.cid = data[0].id
      }
      // 获取推荐数据
      const { data } = await getBanner('/getList.php', { page: this.page, cid: this.cid })
      this.bannerArr = [...this.bannerArr, ...data]
      // 加载完成
      this.loading = false
      // 如果返回的数据为空，则表示数据已加载全部
      if (data.length === 0) {
        this.finished = true
        // 页数重置为 0
        this.page = 0
      }
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.page = 0
      this.onLoad()
    },
  },
}
</script>

<style lang="less" scoped>
</style>