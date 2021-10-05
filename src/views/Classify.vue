<template>
  <div class="classify">
    <Header />
    <div class="left-nav">
      <van-sidebar v-model="activeKey"  @change="setActiveKey">
        <van-sidebar-item v-for="item in navArr" :key="item.id" :title="item.classname" />
      </van-sidebar>
    </div>
    <div class="right-list">
      <List ref="list" myType="分类">
        <template v-slot:default="slotProps">
          <BannerList :bannerArr="slotProps.listArr" />
        </template>
      </List>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import List from '@/components/List.vue'
import BannerList from '@/components/BannerList.vue'

import { getInfoClass } from '@/api/myAxios'

export default {
  name: "Classify",
  data() {
    return {
      activeKey: 0,
      navArr: [],
    }
  },
  components: {
    Header,
    List,
    BannerList
  },
  methods: {
    setActiveKey(index) {
      this.activeKey = index
      // 分类 ID
      this.$refs.list.cid = this.navArr[index].id
      // 页数重置
      this.$refs.list.page = 0
      this.$refs.list.finished = false
      this.$refs.list.onLoad()
    }
  },
  async created() {
    // 获取分类导航数据
    const { data } = await getInfoClass('/infoClass.php')
    this.navArr = data
  }
}
</script>

<style lang="less" scoped>
.classify {
  height: calc(100vh - 2rem);
  display: flex;
  .left-nav {
    height: 100%;
    border-right: 1px solid #e8e8e8;
    background-color: #f7f8fa;
  }
  .right-list {
    flex: 1;
    height: 100%;
    overflow-y: auto;
  }
}
// 侧边导航
.van-sidebar {
  width: 1.6rem;
  .van-sidebar-item {
    padding: 0;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
    text-align: center;
    &::before {
      width: 0.1rem;
      height: 0.5rem;
      background-color: #31c27c;
    }
  }
}
</style>