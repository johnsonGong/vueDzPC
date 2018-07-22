<template>
  <div class="page-404">
    <h1 class="info-txt">您访问的页面不存在!</h1>
      <img src="static/404.jpg" class="info-img">
  </div>
</template>

<script>
export default {
    name: 'Page404'
}
</script>

<style lang="less">
.page-404 {
    position: relative;
    text-align: center;
    .info-txt {
        font-size: 30px;
        text-shadow: 0px 0px 5px #607d8b;
        color: #ffffff;
    }
    .info-img {
        position: relative;
    }
}
</style>
