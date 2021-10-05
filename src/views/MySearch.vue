<template>
  <div class="search">
    <HeaderTitle title="搜索" />
    <van-search
      v-model.trim="keyword"
      shape="square"
      show-action
      background="#31c27c"
      placeholder="请输入搜索关键词"
    >
      <template #action>
        <div @click="onSearch(keyword)" class="search-button">搜索</div>
      </template>
    </van-search>
    <!-- 搜索历史 -->
    <div class="search-history">
      <h2>
        <span>搜索历史</span>
        <van-icon @click="deleteAll" name="delete-o" size=".5rem" />
      </h2>
      <ul>
        <li v-for="(item, index) in searchArr" :key="index">
          <span @click="onSearch(item)">{{ item }}</span>
          <van-icon @click="deleteSingle(item)" name="cross" size=".3rem" />
        </li>
      </ul>
    </div>
    <!-- 搜索列表 -->
    <div class="search-list">
      <p v-for="item in searchList" :key="item.id" @click="seeDetails(item)">
        {{ item.title }}
      </p>
    </div>
    <!-- 搜索提示 -->
    <van-empty image="search" description="描述文字" v-if="!searchList.length" />
  </div>
</template>

<script>
import HeaderTitle from "@/components/HeaderTitle.vue";
import { Notify, Toast } from "vant";
import { getSearchList } from "@/api/myAxios";

export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      searchList: [],
      searchArr: [],
    };
  },
  components: {
    HeaderTitle,
  },
  methods: {
    async onSearch(keyword) {
      if (!keyword) {
        // 警告通知
        return Notify("输入不能为空！");
      }
      this.keyword = ''
      const { data } = await getSearchList("/searchList.php", { keyword });
      this.searchList = data;
      // 保存搜索历史
      let bool = this.searchArr.find(item => {
        return item === keyword
      })
      if(!bool) {
        this.searchArr.push(keyword);
        const searchArr = JSON.parse(localStorage.getItem("searchArr"));
        searchArr.push(keyword);
        localStorage.setItem("searchArr", JSON.stringify(searchArr));
      }
    },
    seeDetails(data) {
      // 查看详情
      this.$router.push({
        path: "/detail",
        query: {
          id: data.id,
          cid: data.classid,
          type: data.hist ? "list" : "img",
        },
      });
    },
    deleteAll() {
      if(!this.searchArr.length) return Toast('历史已为空')
      // 清空历史搜索
      this.searchArr = [];
      localStorage.setItem("searchArr", "[]");
    },
    deleteSingle(title) {
      // 删除单个历史记录
      const searchArr = this.searchArr.filter((item) => {
        return item !== title;
      });
      this.searchArr = searchArr;
      localStorage.setItem("searchArr", JSON.stringify(searchArr));
    },
  },
  created() {
    const searchArr = localStorage.getItem("searchArr");
    if (searchArr) {
      this.searchArr = JSON.parse(searchArr);
    } else {
      localStorage.setItem("searchArr", "[]");
    }
  },
};
</script>

<style lang="less" scoped>
.search {
  height: calc(100vh - 2rem);
  overflow-y: auto;
}
.search-button {
  width: 1rem;
  border-radius: 2px;
  text-align: center;
  background-color: #fff;
}
.van-search__content {
  background-color: #fff;
}
.search-list {
  padding: 0 0.1rem .5rem;
  p {
    margin-top: 0.15rem;
    padding: 0.2rem;
    font-size: 0.3rem;
    color: #fff;
    border-radius: 0.1rem;
    background-color: rgb(49, 194, 124);
  }
}
.search-history {
  h2,
  li {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    span {
      flex: 1;
      margin-right: 1rem;
    }
  }
  h2 {
    padding: 0 0.2rem;
    height: 1rem;
    font-size: 0.4rem;
  }
  ul {
    max-height: 3.5rem;
    overflow-y: auto;
    li {
      margin: 0.2rem;
      padding: 0.2rem;
      font-size: 0.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-radius: 0.1rem;
      background-color: #f5f5f5;
    }
  }
}
</style>