<template>
    <div class="comm-footer">
        <div class="footer-body">
            <span class="g_txt_hover">中国-重庆 前端程序员: 龚龙。</span>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="less">
    @footerH: 80px;
    @borderStyle: 1px solid #dddddd;
    .comm-footer {
        position: relative;
        height: @footerH;
        width: 100%;
        border-top: @borderStyle;
        box-sizing: border-box;
        /*background-color: yellow;*/
        .footer-body {
            position: relative;
            width: 1000px;
            height: 100%;
            line-height: @footerH;
            margin: 0 auto;
            text-align: center;
            /*background-color: #99cd93;*/
        }
    }

</style>
