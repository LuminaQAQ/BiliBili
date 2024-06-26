<template>
  <div id="app">
    <bilibiliFooter></bilibiliFooter>
    <router-view />
  </div>
</template>

<style lang="scss">
</style>


<script>
import bilibiliFooter from '../src/components/FooterBar/index.vue'
export default {
  name: 'App',
  methods: {
    handleClick() {
      console.log('click')
    }
  },
  components: {
    bilibiliFooter
  }

}
</script>
