<style lang="scss" scoped>
.nav-img-wrap {
  height: 100%;

  display: flex;
  align-items: center;

  .nav-item {
    margin: 0 0.5rem;
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
  <li class="nav-img-wrap">
    <span class="nav-item">
      <router-link :to="to">
        <img :src="require(`@/${src}`)">
      </router-link>
    </span>
  </li>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    src: {
      type: String,
    },
    to: {
      type: String,
      default: "/"
    }
  },

}
</script>