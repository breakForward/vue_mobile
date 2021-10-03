<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#31c27c">
    <van-swipe-item v-for="item in swiperArr" :key="item.id">
      <img :src="item.picurl" alt="图片">
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  name: 'Swiper',
  props: {
    swiperArr: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="less" scoped>
.my-swipe {
    margin: .1rem 0;
    background-color: #fff;
    img {
      width: 100%;
      height: 4.5rem;
      border-radius: .15rem;
      transform: scale(.95);
      vertical-align: middle;
    }
  }
</style>
