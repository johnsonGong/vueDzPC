// import moment from 'moment'
// 按需加载--自助餐.
import _NUM from 'lodash/Number'
const FRUIT_DATA = [
    '苹果', '鸭梨', '葡萄', '香蕉', '西瓜',
    '火龙果', '樱桃', '哈密瓜', '石榴', '李子']

/**
 * 通用函数.
 *
 * @author gonglong-20180710
 */
export default {
    /**
     * 获取水果数据(mock数据)
     *
     * @return {Array} list 如: [{name: '苹果', price: '15.00'}]
     */
    demoGetFruitList: function () {
        let list = []
        for (let i = 0, len = 15; i < len; i++) {
            // 有工具函数(lodash)，就不要自己重复'造轮子'
            list.push({
                name: FRUIT_DATA[this.getRandomNum(0, 7)],
                // 小数点后两位
                // num.toFixed(2), OR Math.round()
                price: Math.round(_NUM.random(100, true) * 100) / 100
            })
        }
        // console.log('demoGetFruitList:' + JSON.stringify(list))
        return list
    },
    /**
     * 获取指定范围随机数（包括最大、最小值）.
     *
     * @param {number} min 最小值, 如: 0
     * @param {number} max 最大值, 如: 9
     *
     * @return {number} num 如: 6
     */
    getRandomNum: function (min, max) {
        // Math.floor, Math.round
        return Math.floor(min + Math.random() * (max - min))
    }
}
