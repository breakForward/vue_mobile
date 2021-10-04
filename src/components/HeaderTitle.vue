<template>
  <div class="header">
    <h2>
      <van-icon @click="routerGo" class="goback" name="arrow-left" size=".5rem" color="#fff" />
      <span>{{ title }}</span>
    </h2>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  z-index: 2;
  border-bottom: 1px solid #ccc;
  background-color: #31c27c;
  h2 {
    position: relative;
    padding: .1rem .7rem .1rem 1rem;
    height: 100%;
    text-align: center;
    font-size: .4rem;
    color: #fff;
    line-height: .8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goback {
    position: absolute;
    left: .3rem;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>