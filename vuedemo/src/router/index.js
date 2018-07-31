import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Page404 from '@/pages/Page404'
import DataList from '@/pages/demo/DataList'
import Summary from '@/pages/demo/Summary'
const ArrayList = () => import('@/pages/bug/ArrayList')

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
                    component: DataList
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
