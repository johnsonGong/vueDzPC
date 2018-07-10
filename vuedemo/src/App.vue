<template>
  <div id="app" class="app-root">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
/**
 * 项目[根组件]入口.
 *
 * @author gonglong-20180710
 */
export default {
    name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
