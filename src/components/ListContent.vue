<template>
  <div class="list-content">
    <slot name="img"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'ListContent',
}
</script>

<style lang="less" scoped>
.list-content {
  margin-bottom: .2rem;
  padding: .15rem .15rem .2rem;
  // 决绝多列布局文字往上跑的问题
  break-inside: avoid;
  border-radius: .15rem;
  border: 1px solid #e8e8e8;
  background-color: #fff;
  img {
    width: 100%;
  }
  p {
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size: .3rem;
  }
}
</style>