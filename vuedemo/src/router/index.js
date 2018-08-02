import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Page404 from '@/pages/Page404'
import PageDataList from '@/pages/demo/PageDataList'
import Summary from '@/pages/demo/Summary'

const ArrayList = () => import('@/pages/bug/ArrayList')
const TestIframe = () => import('@/pages/demo/TestIframe')
const EleForm = () => import('@/pages/demo/EleForm')
const EleTblSelection = () => import('@/pages/demo/EleTblSelection')
const EleTree = () => import('@/pages/demo/EleTree')

Vue.use(Router)

/**
 * 网站路由.
 * ps: 注意 路由层次结构.
 *
 * @author gonglong-20180710
 */
 let router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect: {name: 'Summary'},
            children: [
                {
                    path: 'demo-datalist',
                    name: 'DataList',
                    meta: {title: 'demo一览'},
                    component: PageDataList
                },
                {
                    path: 'demo-summary',
                    name: 'Summary',
                    meta: {title: 'demo简介'},
                    component: Summary
                },
                {
                    path: 'bug-arrylist',
                    name: 'ArrayList',
                    meta: {title: '数组引用'},
                    component: ArrayList
                },
                {
                    path: 'bug-iframe',
                    name: 'TestIframe',
                    meta: {title: '使用iframe'},
                    component: TestIframe
                },
                {
                    path: 'demo-ele-form',
                    name: 'EleForm',
                    meta: {title: 'element表单提交'},
                    component: EleForm
                },
                {
                    path: 'demo-ele-tbl',
                    name: 'EleTblSelection',
                    meta: {title: 'element表格多选功能'},
                    component: EleTblSelection
                },
                {
                    path: 'demo-ele-tree',
                    name: 'EleTree',
                    meta: {title: 'element树形组件'},
                    component: EleTree
                }
            ]
        }, {
            path: '/*',
            name: 'Page404',
            component: Page404
        }
    ]
})

router.beforeEach((to, from, next) => {
    if ('title' in to.meta) {
        // 设置标题
        // ps: 判断特定[对象]中是否存在 key
        document.title = to.meta.title
    }
    next()
})

export default router
