<template>
  <div class="article-item" @click="viewDetails">
    <img :src="articleObj.picurl" alt="" v-lazy="articleObj.picurl">
    <div class="item">
      <h3 class="title">{{ articleObj.title }}</h3>
      <p class="time-watch">
        <span class="time">
          <van-icon name="clock-o" />
          {{ Moment }}
        </span>
        <span class="watch">
          <van-icon name="eye-o" />
          {{ Hits }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ArticleItem',
  props: {
    articleObj: {
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
          id: this.articleObj.id,
          cid: this.articleObj.classid,
          type: 'list'
        }
      })
    }
  },
  computed: {
    Hits() {
      // 处理观看次数
      let hits = this.articleObj.hits
      hits = hits >= 1000 ? (hits / 1000).toFixed(1) + 'k' : hits
      return hits
    },
    Moment() {
      // 处理时间戳
      const posttime = parseInt(this.articleObj.posttime) * 1000
      return moment(posttime).format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="less" scoped>
.article-item {
  display: flex;
  margin-bottom: .2rem;
  height: 1.6rem;
  border: 1px solid #e8e8e8;
  img {
    width: 2.5rem;
    height: 100%;
  }
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: .1rem .15rem;
    overflow:hidden;
    .title {
      font-size: .28rem;
      font-weight: 700;
    }
    .time-watch {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      span {
        font-size: .28rem;
      }
    }
  }
}
</style>