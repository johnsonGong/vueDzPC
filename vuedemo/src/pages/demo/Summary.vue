<template lang="html">
<div class="comm-page page-summary">
    <h1> demo简介.</h1>
    <ul class="summ-list">
        <!--<li class="g_txt_hover">1. 使用elementUI表单 &#45;&#45; form.(TODO: 数据校验)</li>-->
        <li v-for="(targetItem, index) in pageTargetList" :key="'target_' + index"
            :class="{'g_txt_hover': targetItem.routName !== '', 'ready-item': targetItem['ready']}" :title="targetItem.lbl"
            @click="moveTo(targetItem.routName)"
            :data-idx="index">{{targetItem.lbl}}
        </li>
    </ul>
    <ul class="summ-list" style="list-style-type: upper-latin;">
        <li>熟悉 VUE Router </li>
        <li>熟悉 VUEX </li>
        <li> vue 常规用法(filter, component)</li>
        <li> 项目中遇到过的难点, 踩过的坑!</li>
    </ul>
</div>
</template>

<script>
/**
 * demo简介.
 *
 */

// 目标列表
const TARGET_LIST = [
        {
            lbl: '使用elementUI表单 -- form.(TODO: 数据校验)',
            routName: 'EleForm'
        },
        {
            lbl: '二次封装 elementUI树形控件--tree (TODO: 数据转换, 踩过坑)',
            routName: 'EleTree'
        },
        {
            lbl: '使用 elementUI 表格--table (TODO: 数据行多选, 踩过坑)',
            routName: 'EleTblSelection',
            ready: true
        },
        {
            lbl: '数组引用',
            routName: 'ArrayList',
            ready: true
        },
        {
            lbl: '使用Iframe, 获取内嵌html的 dom元素!',
            routName: 'TestIframe'
        }
    ]

export default {
    name: 'Summary',
    created: function () {
        console.log('Summary->created.')
    },
    computed: {
        /**
         * 目标内容列表.
         */
        pageTargetList: {
            get () {
                return TARGET_LIST
            }
        }
    },
    methods: {
        /**
         * 页面跳转.
         *
         * @param {String} routeName '路由注册参数--路由名称'
         */
        moveTo: function (routeName) {
            if (routeName !== '') {
                this.$router.push({name: routeName})
            } else {
                console.log('参数不完整, 无法执行页面跳转!')
            }
        }
    },
    destroyed: function () {
        console.log('Summary->destroyed.')
    }
}
</script>

<style lang="less">
.page-summary {
    .summ-list {
        position: relative;
        margin-top: 10px;
        padding-left: 20px;
        list-style-type: decimal;
        .ready-item {
            background-color: #cdfd83;
        }
        li {
            margin-bottom: 5px;
        }
    }
}
</style>
