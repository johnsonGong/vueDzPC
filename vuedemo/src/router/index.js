import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Error404 from '@/pages/404'

Vue.use(Router)

/**
 * 网站路由.
 * ps: 注意 路由层次结构.
 *
 * @author gonglong-20180710
 */
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/*',
            name: 'Error404',
            component: Error404
        }
    ]
})
