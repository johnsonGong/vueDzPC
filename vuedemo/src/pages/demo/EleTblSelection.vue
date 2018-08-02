<template>
    <div class="comm-page page-tbl">
        <div class="desc-msg">
            <h3 class="title">
                演示: Element 表格多选功能;
            </h3>
            <div class="content">
                <p>1. 以前项目踩过坑;</p>
                <p>2. 反选当前页;</p>
                <p>3. 页码切换后, 渲染本页之前选中的数据;</p>
            </div>
        </div>
        <div class="desc-msg">
            <h3 class="title">
                翻页, 反选. 参考资料: http://element-cn.eleme.io/#/zh-CN/component/table
            </h3>
            <el-table :data="tableData" class="tbl-tmp">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>

            <div class="content">
                <el-pagination class="demo-tmp-pager"
                    background
                    layout="total, prev, pager, next"
                    :page-size="pagerConf.pageSize"
                    :current-page="pagerConf.currentPage"
                    @current-change="handlePagerChange"
                    :total="pagerConf.total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * element 表格多选.
     *
     * @author gonglong-2018/08/02
     */
    export default {
        name: 'EleTblSelection',
        data () {
            return {
                tableData: [],
                pagerConf: {
                    total: 100,
                    currentPage: 1,
                    pageSize: 10
                }
            }
        },
        created: function () {
            this.initPage()
        },
        methods: {
            initPage () {
                console.log('111')
                this.getTblList()
            },
            getTblList () {
                this.API.commPOST({
                        url: '/demo/getTblList',
                        data: {
                            ...this.pagerConf
                        }
                    },
                    result => {
                        console.log('getTblList --> ')
                        let dataObj = result.data.content
                        let pageNum = this.pagerConf.currentPage
                        this.pagerConf.total = dataObj.pagerConf.total
                        let tmpList = [...dataObj.list]
                        tmpList.forEach((item, idx) => {
                            item.name += pageNum
                        })
                        this.tableData = [...tmpList]
                    },
                    errorObj => {}
                )
            },
            /**
             * 注册: 翻页事件.
             *
             * @param {number} pageNum 当前页
             *
             */
            handlePagerChange (pageNum) {
                this.pagerConf.currentPage = pageNum
                this.getTblList()
            }
        }
    }
</script>

<style lang="less">
    .page-tbl {
        .tbl-tmp {
            margin-bottom: 10px;
        }
        .demo-tmp-pager {
            background-color: pink;
            text-align: center;
        }
    }
</style>
