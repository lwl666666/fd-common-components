/*
 * @Author: liwulin
 * @Date: 2022-08-15 10:12:50
 * @LastEditors: liwulin
 * @LastEditTime: 2022-08-25 09:34:05
 * @Description: 
 * @FilePath: \fd-common-components\docs\.vuepress\enhanceApp.js
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default async ({ Vue, options, router, siteData, isServer }) => {
    if (!isServer) {
        await import('element-ui').then(ElementUI => {
            Vue.use(ElementUI);
        });
        import('fd-common');
    }
};