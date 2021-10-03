<template>
  <div class="header">
      <van-icon @click="routerGo" class="goback" name="arrow-left" size=".5rem" color="#fff" />
      <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  methods: {
    routerGo() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  padding: .1rem .3rem;
  width: 100%;
  height: 1rem;
  border-bottom: 1px solid #ccc;
  background-color: #31c27c;
  h2 {
    text-align: center;
    font-size: .4rem;
    color: #fff;
    line-height: .8rem;
  }
  .goback {
    position: absolute;
    left: .3rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>