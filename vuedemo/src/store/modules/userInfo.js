/**
 * 用户信息
 *
 */
export default {
    namespaced: true,
    state: {
        // 用户名
        userName: ''
    },
    mutations: {
        setUserName: function (state, payload) {
            state.userName = payload.val
        }
    },
    getters: {
        getUserName: function (state, getters) {
            return state.userName
        }
    }
}
