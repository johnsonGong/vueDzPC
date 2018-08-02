<template>
    <div class="comm-page page-tbl">
        <div class="desc-msg">
            <h3 class="title">
                演示: Element 表格多选功能;
            </h3>
            <div class="content">
                <p>1. 加载效果--loading;</p>
                <p>2. 仔细看官方文档-很重要!</p>
                <p>3. 页码切换后, 渲染本页之前选中的数据;</p>
                <p>4. row-key, 在mock阶段要保证此字段值的唯一性;</p>
            </div>
        </div>
        <div class="desc-msg">
            <h3 class="title">
                翻页, 反选. 参考资料: http://element-cn.eleme.io/#/zh-CN/component/table
            </h3>
            <el-table v-loading="loadingFlg" ref="tblFirst" :data="tableData"
                      @selection-change="handleSelectionChange"
                      class="tbl-tmp" row-key="id">
                <el-table-column type="selection" width="55" reserve-selection :selectable="handleSelectable">
                </el-table-column>
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

                <div class="">
                    <span>选中数据为:{{JSON.stringify(selData)}}</span>
                </div>
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
    import _Lang from 'lodash/Lang'

    export default {
        name: 'EleTblSelection',
        data () {
            return {
                tableData: [],
                pagerConf: {
                    total: 100,
                    currentPage: 1,
                    pageSize: 10
                },
                // 已选中数据
                selData: [],
                // loading标识
                loadingFlg: false
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
                this.loadingFlg = true
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
                            item.id += pageNum
                            item.name += ('-' + pageNum)
                        })
                        this.tableData = _Lang.cloneDeep(tmpList)
                        this.loadingFlg = false
                    },
                    errorObj => {
                        this.loadingFlg = false
                    }
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
            },
            /**
             * 当选择项发生变化时会触发该事
             *
             * @param {array} selection 当前选中的所有数据集
             *
             */
            handleSelectionChange (selection) {
                console.log('handleSelectionChange-->')
                this.selData = [...selection]
            },
            /**
             * 判定当前行，是否可以勾选.
             * 仅对 type=selection 的列有效.
             *
             * @return {boolean} true: 可以勾选; false: 不可勾选
             */
            handleSelectable (row, index) {
                return !row.disabled
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
            background-color: #ffffff;
            text-align: center;
        }
    }
</style>
