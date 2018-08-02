/**
 * 表格数据.
 *
 */
export default {
    namespaced: true,
    state: {
        tblData: []
    },
    mutations: {
        setTblData: function (state, payload) {
            state.tblData = [...payload.val]
        }
    },
    getters: {
        getTblData: function (state, getters) {
            return state.tblData
        }
    }
}
