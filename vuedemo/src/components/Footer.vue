<template>
    <div class="comm-footer">
        <div class="footer-body g_txt_hover">基于 VUE, ElementUI !</div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="less">
    @footerH: 80px;
    .comm-footer {
        position: relative;
        height: @footerH;
        width: 100%;
        background-color: yellow;
        .footer-body {
            position: relative;
            width: 1200px;
            height: 100%;
            line-height: @footerH;
            margin: 0 auto;
            text-align: center;
            background-color: #ffffff;
        }
    }

</style>
