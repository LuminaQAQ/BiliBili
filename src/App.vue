<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<style lang="scss">
</style>

<script>
import NavBar from './components/NavBar/';

export default {
  name: 'App',
  components: { NavBar },
  methods: {
    handleClick() {
      console.log('click')
    }
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;

  padding: 0;
  margin: 0;
}
</style>
