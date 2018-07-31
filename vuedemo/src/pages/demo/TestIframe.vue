<template>
    <div class="comm-page page-summary">
        <h2>
            测试-获取 内嵌iframe.
        </h2>
        <span>
            备注-参考方案: https://blog.csdn.net/tuoxinquyu/article/details/54093167
        </span>
        <!--<iframe id="demoIframe" height="300" width="500" src="/static/temp.html"></iframe>-->
        <!--<iframe id="demoIframe" height="300" width="500" src="http://localhost:8080/static/temp.html"></iframe>-->
        <iframe id="demoIframe" height="300" width="500" src="http://api-edu.tcampus.test/index.html#/home"></iframe>
    </div>
</template>

<script>
    export default {
        name: 'TestIframe',
        mounted: function () {
            console.log('TestIframe-->mounted!')
            setTimeout(() => {
                var iframeObj = document.getElementById('demoIframe').contentDocument
                iframeObj.body.style.backgroundColor = 'yellow'
                var links = iframeObj.getElementsByTagName('a')
                console.log('links len:' + links.length)
            }, 1000)
        }
    }
</script>

<style lang="less">

</style>
