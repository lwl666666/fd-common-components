<!--
 * @Author: liwulin
 * @Date: 2022-07-22 10:36:27
 * @LastEditors: liwulin
 * @LastEditTime: 2022-08-25 09:33:47
 * @Description: 
 * @FilePath: \fd-common-components\docs\.vuepress\components\fd-select.vue
-->
<template>
    <el-select
        v-bind="$attrs"
        v-on="$listeners"
        :filterable="filterable"
        :filter-method="filterMethod"
        @visible-change="visibleChange"
    >
        <slot>
            <el-option
                v-for="(item,index) in selectOilOptions"
                :key="generateKey(item,index)"
                :label="item[labelProp]"
                :value="item[valueProp]"
                :disabled="item.disabled===undefined?disabledMethod(item,index):item.disabled"
            >
                <slot name="option" :option="item"></slot>
            </el-option>
        </slot>
        <template slot="prefix">
            <slot name="prefix"></slot>
        </template>
        <template slot="empty">
            <slot name="empty"></slot>
        </template>
    </el-select>
</template>

<script>
const DEFAULT_LABEL_PROP = "label"; //默认label字段
const DEAULT_VALUE_PROP = "value";//默认value字段

export default {
    name: "FdSelect",
    props: {
        //选项数据
        options: {
            type: Array,
            required: true
        },
        //下拉选项名称属性
        labelProp: {
            type: String,
            default: DEFAULT_LABEL_PROP
        },
        //下拉选项值属性
        valueProp: {
            type: String,
            default: DEAULT_VALUE_PROP
        },
        //禁用回调方法
        disabledMethod: {
            type: Function,
            default: () => {
                return false;
            }
        },
        //是否开启过滤
        filterable: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            filterValue: "" //过滤的值
        }
    },
    computed: {
        /**
         * 下拉选项
         * --------------------------------------------
         */
        selectOilOptions() {
            const { filterValue, options, labelProp } = this;
            let _selectOilOptions;
            //未空直接返回全部下拉
            if (filterValue === "") {
                _selectOilOptions = this.options;
            } else {
                //返回匹配的数组
                _selectOilOptions = options.filter(option => {
                    return option[labelProp].matchPY(filterValue);
                });
            }
            return _selectOilOptions;
        }
    },
    methods: {
        /**
         * 生成Key
         * --------------------------------------------
         * @param {*} item
         * @param {*} index
         */        
        generateKey(item, index) {
            return `${item[this.labelProp]}_${item[this.valueProp]}_${index}`
        },
        /**
         * @description: 根据拼音搜索油种
         * @param {*} val 传入的拼音
         */
        filterMethod(val) {
            this.filterValue = val;
        },
        /**
         * @description: 保证油种选择下拉选项每次出现都是全量值，避免出现是上次过滤的值
         * @param {*} val 出现则为 true，隐藏则为 false
         * @return {*}
         */
        visibleChange(val) {
            this.$emit("optionsVisibleChange", val);
            if (!val) {
                //在一定时间间隔后，下拉选项隐藏后再重置过滤，
                let st = setTimeout(() => {
                    this.filterValue = "";
                    clearTimeout(st);
                    st = null;
                }, 100)
            }
        },
    }
}
</script>
