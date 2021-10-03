<template>
  <div id="app">
    <router-view />
    <TabBar />
  </div>
</template>
<script>
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>
<style lang="less" scoped>
#app {
  padding-top: 1rem;
}
</style>
