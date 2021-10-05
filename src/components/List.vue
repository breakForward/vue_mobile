<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <slot :listArr="listArr"></slot>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { getInfoClass, getBanner, getArticle } from '@/api/myAxios'

export default {
  name: "List",
  props: {
    myType: { type: String, default: '' }
  },
  data() {
    return {
      cid: '',
      page: 0,
      listArr: [],
      // 是否处于上拉加载状态，加载过程中不触发load事件
      loading: false,
      // 是否已加载完成，加载完成后不再触发load事件
      finished: false,
      // 是否处于下拉加载中状态
      refreshing: false,
    }
  },
  components: {
    // BannerList
  },
  methods: {
    async onLoad() {
      if (this.refreshing) {
        this.listArr = []
        this.refreshing = false
      }
      if(this.page === 0) {
        this.listArr = []
      }
       // 页数加一
      this.page++
      if(!this.cid && (this.myType === '分类')) {
        // 获取分类导航数据
        const { data } = await getInfoClass('/infoClass.php')
        this.cid = data[0].id
      }
      let data = []
      if(this.myType === '灵感') {
        // 获取灵感数据
        const item = await getBanner('/getList.php', { page: this.page })
        data = item.data
      } else if(this.myType === '分类') {
        // 获取分类数据
        const item = await getBanner('/getList.php', { page: this.page, cid: this.cid })
        data = item.data
      } else if(this.myType === '文章') {
        // 获取文章数据
        const item = await getArticle('/getArticle.php', { page: this.page })
        data = item.data
      }
      this.listArr = [...this.listArr, ...data]
      // 加载完成
      this.loading = false
      // 如果返回的数据为空，则表示数据已加载全部
      if (data.length === 0) {
        this.finished = true
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
::v-deep .van-list__finished-text {
  font-size: .3rem;
  line-height: 1rem;
}
</style>