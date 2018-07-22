<template>
    <div class="comm-header">
        <div class="header-body ">
            <img class="logo" src="@/assets/logo.png">
            <!-- <i class="el-icon-circle-plus el-icon"></i> -->
            <span> AND </span>
            <img class="logo" src="@/assets/elementUI-logo.svg" style="width:160px;">
            <span class="g_txt_hover">整合VUE+elementUI, PC端开发.</span>
        </div>
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
    @borderStyle: 1px solid #dddddd;
    .comm-header {
        position: relative;
        top: 0px;
        left: 0px;
        width: 100%;
        height: @headerH;
        // background-color: yellow;
        border-bottom: @borderStyle;
        box-sizing: border-box;
        .header-body {
            position: relative;
            width: 1000px;
            height: 100%;
            line-height: @headerH;
            margin: 0 auto;
            background-color: #ffffff;
            text-align: left;
            .logo {
                position: relative;
                width: 50px;
                height: 50px;
                vertical-align:middle;
            }
            .el-icon {
                font-size: 30px;
            }
        }
    }
</style>
