<template>
<div class="comm-page bug-arraylist">
<div class="stu-item" v-for="(stuItem, idx) in studentList" :key="'stu_' + idx">
    <span>name:{{stuItem.name}}</span>
    <span>money:{{stuItem.money}}</span>
    <div @click="handlSelFruit(fruitItem)" class="tmp-fruit" :class="{'sel-fruit': fruitItem['active']}"
         v-for="(fruitItem, jdx) in stuItem.fruitlist" :key="'fruit_' + jdx">
        <span>fruitName: {{ fruitItem.name }}</span>
        <span>fruitMoney: {{ fruitItem.money }}</span>
    </div>
</div>
</div>
</template>

<script>
    /**
     * 调查BUG.
     * 关键词： 数组引用.
     *
     * @author gonglong-[2018/07/31 09:50]
     *
     */
    import _Num from 'lodash/Number'
    // import _Lang from 'lodash/Lang'

    const stuName = ['伯牙', '子期', '子贡', '子桓', '仲达', '叔达']
    const fruitName = ['苹果', '梨子', '香蕉', '西瓜', '葡萄', '榴莲1']

    export default {
        name: 'ArrayList',
        data () {
            return {
                // 学生列表
                studentList: [],
                // 水果列表
                fruitList: []
            }
        },
        created: function () {
            this.initpage()
        },
        methods: {
            initpage: function () {
                this.initData()
                this.recombineData()
            },
            initData: function () {
                let stuLen = stuName.length - 1
                let fruitLen = fruitName.length - 1

                for (let i = 0, len = 5; i < len; i++) {
                    this.studentList.push({
                        name: stuName[_Num.random(0, stuLen)] + '-' + i,
                        money: _Num.random(50, 95.00),
                        fruitlist: []
                    })
                    this.fruitList.push({
                        name: fruitName[_Num.random(0, fruitLen)],
                        money: _Num.random(5, 12.00),
                        active: false
                    })
                }
                console.log('studentList: \n' + JSON.stringify(this.studentList))
            },
            recombineData: function () {
                let tmpData = [...this.fruitList]
                this.studentList.forEach((stuItem, idx) => {
                    // TODO -- gonglong
                    stuItem.fruitlist = [...tmpData]
                    // stuItem.fruitlist = _Lang.cloneDeep(tmpData)
                })
            },
            /**
             * 选中水果.
             *
             */
            handlSelFruit: function (item) {
                console.log('handlSelFruit-->\n' + JSON.stringify(item))
                item.active = !item.active
            }
        }
    }
</script>

<style lang="less">
.bug-arraylist {
    position: relative;

    .stu-item {
        position: relative;
        background-color: yellow;
        padding: 0 20px;
        .tmp-fruit {
            position: relative;
            background-color: pink;
            cursor: pointer;
            margin-bottom: 5px;
            &:hover {
                background-color: palegoldenrod;
            }
        }
        .sel-fruit {
            background-color: greenyellow;
        }
    }
}
</style>
