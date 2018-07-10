<template>
<div class="comm-page page-datalist">
    <h1>表格, 翻页, 搜索框</h1>
</div>
</template>

<script>
    import TOOL from '@/assets/Tool'
/**
 * 数据列表.
 *
 */
export default {
    name: 'DataList',
    data () {
        return {
            listPager: {
                count: 100,
                page: 1,
                pageSize: 15
            },
            pageList: []
        }
    },
    created () {
        console.log('[数据列表] --> DataList!')
        this.initPage()
        // TOOL.demoGetFruitList()
    },
    methods: {
        /**
         * 初始化页面(加载数据, 绑定事件,,,等)
         *
         */
        initPage () {
            this.getFruitList()
        },
        /**
         * 获取[水果]数据列表.
         *
         * @return {Array} list 水果数据.
         */
        getFruitList () {
            // /mock/getFruit
            this.API.commPOST(
                {
                    url: '/demo/getFruit',
                    data: this.listPager
                },
                result => {
                    // this.pageList = result.data.content.list
                    this.pageList = TOOL.demoGetFruitList()
                }, errorObj => {
                    console.log('水果数据--失败!')
                })
        }
    }
}
</script>

<style lang="less">

</style>
