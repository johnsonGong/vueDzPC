<template lang="html">
  <div>
      <p>面包屑-导航</p>
  </div>
</template>

<script>
/**
 * 面包屑导航.
 * 默认展示: 根据注册的路由信息, 展示当前路由层级、页面名称。
 * 可手动强制设置 导航内容.
 *
 * @author gonglong-2018/07/22 19:30
 *
 */
export default {
    name: 'EleBreadcrumbNav',
    data () {
        return {
        }
    },
    props: {
        // true: (默认)使用已注册的路由信息; false: 使用用户自定义参数
        useRoutesInfo: {
            type: Boolean,
            default: function () {
                return true
            }
        },
        // 当 useRoutesInfo 为 false, 使用本数据.
        navConfig : {
            type: Array,
            default: function () {
                // pageName: 为页面title, routeName: 为路由跳转参数。
                // ps: this.$router.push({name: routeName})
                // [{pageName: '', routeName:''}]
                return []
            }
        },
        // '字符串'分隔符
        separator: {
            type: String,
            default: function () {
                return '/'
            }
        },
        /**
         * '图标'分隔符, separator-class
         * ps: 优先级高于 ['字符串'分隔符], elementUI会自动覆盖 separator, 使其失效.
         *
         */
        separatorClass: {
            type: String,
            default: function () {
                return 'el-icon-arrow-right'
            }
        }
    }
}
</script>

<style lang="css">
</style>
