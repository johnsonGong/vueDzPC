<template>
  <div id="app" ref="appRoot" class="app-root">
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
    name: 'App',
    created: function () {
        console.log('App->created.')
    },
    destroyed: function () {
        console.log('App->destroyed.')
    },
    mounted: function () {
        // window.screen.availHeight ==> 屏幕可用工作区高度
        // window.screen.height ==> 屏幕分辨率的高
        // window.innerHeight
        // let screenH = window.innerHeight
        // this.$refs.appRoot.style.minHeight = screenH + 'px'
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
