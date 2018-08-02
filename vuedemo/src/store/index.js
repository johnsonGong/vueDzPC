import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import tblData from './modules/tblData'

Vue.use(Vuex)

// 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误
const debug = process.env.NODE_ENV !== 'production'
// const debug = true
console.log('%cstore --> debug:' + debug, 'background-color: yellow')
export default new Vuex.Store({
    modules: {
        userInfo,
        tblData
    },
    strict: debug
})
