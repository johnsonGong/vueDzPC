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

            <div class="content">
                <div class="search-line">
                    <el-input class="search-word" clearable v-model="searchWord" placeholder="关键词" size="small"></el-input>
                    <el-button type="primary" size="small" @click="handleSearch">搜索</el-button>
                </div>
                <el-table v-loading="loadingFlg" ref="tblFirst" :data="tableData"
                          @selection-change="handleSelectionChange"
                          class="tbl-tmp" row-key="id">
                    <el-table-column type="selection" width="55" reserve-selection :selectable="handleSelectable">
                    </el-table-column>
                    <el-table-column prop="date" label="日期" width="180"></el-table-column>
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>

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
                // 搜索关键词
                searchWord: '',
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
                let tmpDataIn = {
                    currentPage: this.pagerConf.currentPage,
                    pageSize: this.pagerConf.pageSize,
                    searchWord: this.searchWord
                }
                this.API.commPOST({
                        url: '/demo/getTblList',
                        data: {
                            ...tmpDataIn
                        }
                    },
                    result => {
                        let dataObj = result.data.content
                        let pageNum = this.pagerConf.currentPage
                        this.pagerConf.total = dataObj.pagerConf.total
                        let tmpList = [...dataObj.list]
                        // TODO-这里是模拟数据，需要修改 id,name; 真实环境不需要
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
                this.selData = [...selection]
            },
            /**
             * 判定当前行，是否可以勾选.
             * 仅对 type=selection 的列有效.
             *
             * @param {Object} row 当前行的数据
             * @param {Number} index 序号
             *
             * @return {boolean} true: 可以勾选; false: 不可勾选
             */
            handleSelectable (row, index) {
                return !row.disabled
            },
            /**
             * 编辑数据.
             *
             * @param {Number} idx 序号
             * @param {Object} row 当前行的数据
             */
            handleEdit (idx, row) {
                let tmpData = {
                    idx,
                    ...row
                }
                console.log('handleEdit:' + JSON.stringify(tmpData))
            },
            /**
             * 执行搜索.
             *
             */
            handleSearch () {
                console.log('执行搜索 --> handleSearch:' + JSON.stringify({
                    searchWord: this.searchWord,
                    trimWord: this.searchWord.trim()
                }))
                // 去掉两端 空格.
                this.searchWord = this.searchWord.trim()
                this.handlePagerChange(1)
            }
        }
    }
</script>

<style lang="less">
    .page-tbl {
        .tbl-tmp {
            margin-bottom: 10px;
        }
        .search-line {
            position: relative;
            margin-bottom: 10px;
            .search-word {
                position: relative;
                width: 200px;
            }
        }
        .demo-tmp-pager {
            background-color: #ffffff;
            text-align: center;
        }
    }
</style>
