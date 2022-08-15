/*
 * @Author: liwulin
 * @Date: 2022-08-15 09:38:08
 * @LastEditors: liwulin
 * @LastEditTime: 2022-08-15 14:16:51
 * @Description: 
 * @FilePath: \fd-common-components\fd-common-components\docs\.vuepress\config.js
 */
module.exports = {
    base: '/fd-common-components/',
    title: 'fd-common-components',
    description: '组件库文档',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            // 一级导航
            { text: '指南', link: '/guide/' },
            // 下拉列表导航
            {
                text: '了解更多',
                items: [
                    { text: 'github', link: 'https://github.com/ElemeFE/element', target: '_blank' },
                    { text: 'preview', link: 'https://element.eleme.cn/#/zh-CN', target: '_blank' }
                ]
            }
        ],
        // 禁用导航，与上面的配置是互斥行为。
        // navbar: false
        sidebar: {
            '/guide/': [
                ['', '快速开始'], // '' 等价于 /guide/
                {
                    title: '组件',
                    collapsable: false,
                    children: [
                        ['../guide/FdFilterSelect.md', 'FdFilterSelect'],
                    ]
                }
            ]
        }
    },
    plugins: [ 'demo-container','@vuepress/back-to-top']
}