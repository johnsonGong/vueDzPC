/**
 * 用户 数据交互api.
 *
 */
import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

// TODO -- axios 拦截器 -20180722

export default {
    /**
   * 示范 POST请求.
   *
   * @param {Function} cb     回调函数
   *
   */
    initPage: function (cb) {
        axios({
            method: 'post',
            url: '/mock/initPage.json',
            responseType: 'json',
            data: qs.stringify({userName: 'johnson'})
        }).then(function (response) {
            cb(response)
        }).catch(function (error) {
            cb(error)
        })
    },
    /**
   * 示范 get请求.
   *
   * @param {Function} cb     回调函数
   *
   */
    testGetReq: function (cb) {
        axios({
            method: 'get',
            url: '/mock/getUserInfo.json',
            responseType: 'json',
            // params: {}
            params: {userName: 'johnson', age: 18}
        }).then(function (response) {
            cb(response)
        }).catch(function (error) {
            cb(error)
        })
    },
    /**
   * 示范 form 提交 -- TODO.
   *
   * @param {Function} cb     回调函数
   *
   */
    testSubmitForm: function (cb) {
        axios({
            method: 'post',
            url: '/mock/submitForm.json',
            responseType: 'json',
            // params: {}
            params: {userName: 'johnson', age: 18}
        }).then(function (response) {
            cb(response)
        }).catch(function (error) {
            cb(error)
        })
    },
    /**
     * 通用 POST 请求.
     *
     * @param {Object} opts
     * @param {Object} opts.url 接口地址
     * @param {Object} opts.data 接口地址
     * @param {function} cbSuccess 回调函数-成功
     * @param {function} cbFail    回调函数-失败
     */
    commPOST (opts, cbSuccess, cbFail) {
        axios({
            method: 'post',
            url: opts.url,
            responseType: 'json',
            data: qs.stringify(opts.data)
        }).then(function (response) {
            cbSuccess(response)
        }).catch(function (errorObj) {
            if (typeof cbFail === 'function') {
                cbFail(errorObj)
            }
        })
    }
}
