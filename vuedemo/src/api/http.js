/**
 * 用户 数据交互api.
 *
 */
import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.common['Authorization'] = 'test-token-001'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response
}, function (error) {
    // Do something with response error
    return Promise.reject(error)
})

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
            setTimeout(() => {
                // TODO -- 模拟响应等待。
                cbSuccess(response)
            }, 900)
        }).catch(function (errorObj) {
            if (typeof cbFail === 'function') {
                cbFail(errorObj)
            }
        })
    }
}
