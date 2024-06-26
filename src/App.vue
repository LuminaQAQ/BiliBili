<template>
  <div id="app">
    <NavBar />
    <router-view />
    <bilibiliFooter></bilibiliFooter>
  </div>
</template>

<style lang="scss">
</style>


<script>
import bilibiliFooter from '../src/components/FooterBar/index.vue'
import NavBar from "./components/NavBar/"
export default {
  name: 'App',
  methods: {
    handleClick() {
      console.log('click')
    }
  },
  components: {
    bilibiliFooter,
    NavBar
  }

}
</script>
