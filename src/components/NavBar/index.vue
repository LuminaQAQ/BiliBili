<style lang="scss" scoped>
.nav-main-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  width: 100%;
  max-width: 2560px;
  height: 64px;

  font-size: 14px;

  ul {
    display: flex;
    align-items: center;

    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    unicode-bidi: isolate;
  }

  .nav-list-wrap {
    padding: 0 24px;
  }

  .search-wrap {
    display: flex;
    align-items: center;
  }

  .user-fn-wrap {
    padding: 0 1rem;

    .user-avatar {
      margin-right: 0.75rem;
    }
  }
}
</style>

<template>
  <nav class="nav-main-wrap">
    <section class="nav-list-wrap">
      <ul>
        <NavItem
          v-for="(item, index) in navList"
          :key="index"
          :title="item.title"
          :link="item.link"
        />
      </ul>
    </section>

    <section class="search-wrap">
      <el-autocomplete
        v-model="keyword"
        @select="handleSelect"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
        ></el-button>
      </el-autocomplete>
    </section>

    <section class="user-fn-wrap">
      <ul>
        <el-avatar class="user-avatar">登陆</el-avatar>
        <NavImgItem
          v-for="(item, index) in navIconList"
          :key="index"
          :src="item.src"
          :to="item.link"
        />
      </ul>
    </section>
  </nav>
</template>

<script>
import NavImgItem from './NavImgItem.vue';
import NavItem from "./NavItem.vue";

export default {
  name: "Navbar",
  components: { NavItem, NavImgItem },
  data() {
    return {
      keyword: "",
      searchRes: [],
      navList: [
        {
          title: "首页",
          link: "/"
        },
        {
          title: "番剧",
          link: "/anime"
        },
        {
          title: "直播",
          link: "/live"
        },
        {
          title: "游戏",
          link: "/game"
        },
        {
          title: "会员购",
          link: "/show"
        },
        {
          title: "漫画",
          link: "/manga"
        },
      ],
      navIconList: [
        {
          src: "assets/NavBar/大会员.svg",
          link: "/account"
        },
        {
          src: "assets/NavBar/消息.svg",
          link: "/message"
        },
        {
          src: "assets/NavBar/动态.svg",
          link: "/dynamics"
        },
        {
          src: "assets/NavBar/收藏.svg",
          link: "/collect"
        },
        {
          src: "assets/NavBar/历史.svg",
          link: "/history"
        },
        {
          src: "assets/NavBar/创作中心.svg",
          link: "/creator"
        },
      ],
    }
  },
  methods: {
    querySearchAsync(queryString, cb) {
      const res = [
        { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
      ];

      cb(res)
    },
    handleSelect(item) {
      console.log(item);
    }
  }
}
</script>