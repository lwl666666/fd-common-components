## 介绍

针对 `fd-common-components` 组件的详细说明，该组件为前端相关通用Vue组件库。在每个组件的参考文档中，不仅对每个组件中具体属性、方法、事件等提供了详细说明，还给出了每个组件的使用 Demo（有效代码片段），帮助开发者快速理解并使用对应的组件，提高编码效率

## 安装
推荐使用 npm 安装

```
   npm i fd-common-components --save 
```

## 使用
在应用程序的任何位置使用该组件，请使用全局注册方法。在 `main.js` 文件中导入 Vue 和 fd-common-components，并将其注册为Vue对象中的插件

```
import Vue from "vue";
import FdCommonComponents from "fd-common-components";
Vue.use(FdCommonComponents);
```