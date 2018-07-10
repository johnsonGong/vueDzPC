<template>
    <div class="comm-header">
        <div class="header-body g_txt_hover">comm-header</div>
    </div>
</template>

<script>
    /**
     * 网站顶部header
     *
     * @author gonglong-20180710
     */
    export default {
        name: 'Header'
    }
</script>

<style lang="less">
    @headerH: 100px;
    .comm-header {
        position: relative;
        top: 0px;
        left: 0px;
        width: 100%;
        height: @headerH;
        background-color: yellow;
        .header-body {
            position: relative;
            width: 1200px;
            height: 100%;
            line-height: @headerH;
            margin: 0 auto;
            background-color: #ffffff;
            text-align: center;
        }
    }
</style>
