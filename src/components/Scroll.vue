<template>
  <div class="scroll">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Scroll',
}
</script>

<style lang="less" scoped>
.scroll {
  height: calc(100vh - 2rem);
  overflow-y: auto;
}
</style>