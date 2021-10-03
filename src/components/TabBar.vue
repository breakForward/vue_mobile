<template>
  <div class="tab-bar">
    <van-tabbar v-model="active" active-color="#31c27c" inactive-color="#000" :border="true">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="diamond-o">灵感</van-tabbar-item>
      <van-tabbar-item icon="label-o">文章</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.van-tabbar {
  height: 1rem;
  border-top: 1px solid #e8e8e8;
}
.van-tabbar-item {
  font-size: 0.25rem;
}
::v-deep .van-tabbar-item__icon {
  font-size: .4rem;
}
</style>