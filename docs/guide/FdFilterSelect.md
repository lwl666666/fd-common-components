## 介绍
fd-filter-select组件是基于element-ui的Select组件，集成了汉语拼音检索的功能，同时简化了Select的配置，可以更快的编写下拉组件

## 案例

### 基础用法
options必传，下拉即可实现拼音检索

:::demo 

```html
<template>
  <fd-filter-select v-model="value" :options="options" placeholder="请选择"></fd-filter-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### 指定label和value

可指定label和value对应字段

:::demo 

```html
<template>
  <fd-filter-select 
    v-model="value" 
    :options="options" 
    labelProp="name" 
    valueProp="id" 
    placeholder="请选择">
  </fd-filter-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
            id: 1,
            name: '王小虎',
          }, {
            id: 2,
            name: '王大虎',
          }, {
            id: 3,
            name: '李小虎',
          }, {
            id: 4,
            name: '张小虎',
          }],
        value: ''
      }
    }
  }
</script>
```
:::

### 禁用下拉选项

设置disabledMethod方法禁用option

:::demo
```html
<template>
  <fd-filter-select 
    v-model="value" 
    :options="options"
    :disabledMethod="disabledMethod"
    placeholder="请选择">
  </fd-filter-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    methods:{
        disabledMethod(option,index){
            const {label} = option;
            return label === "双皮奶"||index===3;
        }
    }
  }
</script>
```
:::

### 自定义option内容


:::demo 

```html
<template>
  <fd-filter-select v-model="value" :options="options" placeholder="请选择">
    <div slot="option" slot-scope="scope">
        <i class="el-icon-star-off"></i>
        <span>{{scope.option.label}}</span>
    </div>
  </fd-filter-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### el-select属性

el-selectfd组件的属性可在fd-filter-select组件中使用

:::demo 设置clearable属性，则可将选择器清空

```html
<template>
  <fd-filter-select v-model="value" :options="options" placeholder="请选择" clearable></fd-filter-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

## 属性

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | 下拉选项   | Array  |   必填           |    —     |
| labelProp    | 下拉选项显示名称对应属性名称   | String    |   —  |    label   |
| valueProp     | 下拉选项值对应属性名称   | String    | — |  value  |
| disabledMethod    | 设置禁用状态，参数为当前项，要求返回Boolean   | Function(option,index)| — | false   |
| filterable     | 是否开启过滤   | boolean    | — | true   |
| 更多属性     | 参考 [el-select](https://element.eleme.cn/#/zh-CN/component/select#select-attributes "el-select") 属性  |

## 事件

| 事件名称   | 说明     | 回调参数   |
|---------- |--------  |-------- |
| visible   | 下拉框出现/隐藏时触发，为select原来的visible-change事件 | 出现则为 true，隐藏则为 false |

## Slots

| 名称      | 说明     |
|---------- |--------  |
| option   | 每个option的内容 |
| 更多Slot   | 参考 [el-select](https://element.eleme.cn/#/zh-CN/component/select#select-slots "el-select") Slots |