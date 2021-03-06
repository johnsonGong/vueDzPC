// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import API from './api/http'

// 全局样式
import '@/assets/css/base.css'
import '@/assets/css/tmp-main.less'
import '@/assets/css/demo.less'
import '@/components/registElement'

Vue.config.productionTip = false
Vue.prototype.API = API
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
