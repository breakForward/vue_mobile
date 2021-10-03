<template>
  <div class="detail-page">
    <HeaderTitle :title="detailItem.title" />
    <div class="detail-top">
      <h2>{{ detailItem.title }}</h2>
      <img :src="detailItem.picurl" alt="">
    </div>
    <p class="description">
      {{ detailItem.description }}
    </p>
    <div class="content" v-html="detailItem.content"></div>
    <div class="detaInfo">
      <p>分类：{{ detailItem.kuhangye }}</p>
      <p>阅读量：{{ detailItem.hits }}</p>
      <p>发布时间：{{ Moment }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import HeaderTitle from './HeaderTitle.vue';

export default {
  name: 'DetailPage',
  data() {
    return {
      detailItem: {}
    }
  },
  components: {
    HeaderTitle
  },
  computed: {
    Moment() {
      // 处理时间戳
      const posttime = parseInt(this.detailItem.posttime) * 1000
      return moment(posttime).format('YYYY-MM-DD')
    }
  },
  async created() {
    const { id, cid, type } = this.$route.query
    // 获取详情数据
    const { data } = await this.$axios.get('/getDetail.php', { 
      params: { id, cid, type } 
    })
    this.detailItem = data
  }
}
</script>

<style lang="less" scoped>
.detail-page {
  padding-bottom: .5rem;
  .detail-top{
    display: flex;
    padding: .2rem;
    border-bottom: 1px solid #e8e8e8;
    h2 {
      flex: 1;
      font-size: .45rem;
    }
    img {
      width: 2.2rem;
    }
  }
  .description {
    padding: .2rem;
    font-size: .28rem;
    line-height: .4rem;
    color: #999;
    text-align: justify;
    border-bottom: 1px solid #e8e8e8;
  }
  .content {
    padding: .2rem;
    border-bottom: 1px solid #e8e8e8;
  }
  .detaInfo {
    padding: .2rem;
    font-size: .3rem;
    color: #999;
    line-height: .5rem;
  }
}
::v-deep .van-tabbar {
  display: none;
}
</style>