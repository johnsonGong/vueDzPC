<template>
<div class="page-home" ref="mainApp">
    <demo-header></demo-header>
    <!-- <nav-list></nav-list> -->
    <div class="comm-body" ref="mainBody">
        <router-view/>
    </div>
    <demo-footer></demo-footer>
</div>
</template>

<script>
/**
 * 网站主页 (首页).
 *
 * 默认布局介绍:
 * header: 固定(fixed)在顶端.
 * footer: 当body内容较少，不足以使页面呈现滚动状态(overflow: scroll;) footer 固定在 低端;
 *         当body内容较多 且撑出 是页面出现滚动条, footer 随页面高度动态变化并跟随滚动.
 *
 * @author gonglong-2018/07/10 09:00
 *
 */
import DemoHeader from '@/components/Header'
import DemoFooter from '@/components/Footer'

export default {
    name: 'Home',
    components: {
        'demo-header': DemoHeader,
        'demo-footer': DemoFooter
    },
    mounted () {
        this.updateSize()
        window.onresize = () => {
            this.updateSize()
        }
    },
    created: function () {
        console.log('Home->created.')
    },
    destroyed: function () {
        console.log('Home->destroyed.')
    },
    methods: {
        /**
         * 根据 浏览器大小, 设置页面最小高度.
         *
         */
        updateSize () {
            // 浏览器窗口的视口的高度(可用高度)
            // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerHeight
            let tmpH = window.innerHeight
            console.log('updateSize --> innerHeight:' + tmpH)
            if (tmpH < 500) {
                tmpH = 500
            }
            // header: 100px, footer: 80px;
            let contentH = tmpH - 100 - 80
            this.$refs.mainApp.style.minHeight = tmpH + 'px'
            this.$refs.mainBody.style.minHeight = contentH + 'px'
        }
    }
}
</script>

<style lang="less">
.page-home{
    position: relative;
    box-sizing: border-box;
    .comm-body {
        position: relative;
        box-sizing: border-box;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .btn-list {
        background-color: #ffffff;
    }

}
</style>
