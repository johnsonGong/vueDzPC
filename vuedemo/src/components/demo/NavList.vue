<template>
<div class="page-navlist">
    <div class="btns-content">
        <el-button type="primary">登陆框</el-button>
        <el-button type="success">表格(翻页,搜索)</el-button>
    </div>
</div>
</template>

<script>
    /**
     * Demo 导航.
     *
     * @author gonglong-20180710
     */
    export default {
        name: 'NavList'
    }
</script>

<style lang="less">
.page-navlist {
    position: relative;
    // background-color: greenyellow;
    .btns-content {
        position: relative;
        width: 1000px;
        margin: 5px auto;

    }
}
</style>
