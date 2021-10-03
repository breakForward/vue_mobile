<template>
  <div class="list-content" @click="viewDetails">
    <img :src="bannerObj.picurl" alt="">
    <p>{{ bannerObj.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'ListContent',
  props: {
    bannerObj: { 
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    viewDetails() {
      this.$router.push({
        path: '/detail', 
        query: {
          id: this.bannerObj.id,
          cid: this.bannerObj.classid,
          type: 'img'
        }
      })
    }
  }
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