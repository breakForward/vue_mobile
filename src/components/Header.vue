<template>
  <div class="header">
    <img src="@/assets/images/logo.png" class="logo" alt="">
    <van-icon @click="btnSearch" name="search" size=".6rem" color="#fff" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    btnSearch() {
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: .1rem .3rem;
  width: 100%;
  height: 1rem;
  z-index: 9;
  background-color: #31c27c;
  .logo {
    height: 100%;
  }
}
</style>
