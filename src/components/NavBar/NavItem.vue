<style lang="scss" scoped>
.nav-main-wrap {
  height: 100%;

  display: flex;
  align-items: center;

  .nav-item {
    margin-right: 10px;

    a {
      height: 100%;
      white-space: nowrap;

      color: #fff;
      color: black;

      text-decoration: none;
    }
  }
}
</style>

<template>
  <li class="nav-main-wrap">
    <span class="nav-item"><router-link :to="link">{{title}}</router-link></span>
  </li>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: {
      type: String,
    },
    link: {
      type: String,
      default: "/"
    }
  },

}
</script>