#!/usr/bin/env sh
###
 # @Author: liwulin
 # @Date: 2022-08-15 14:17:07
 # @LastEditors: liwulin
 # @LastEditTime: 2022-08-16 08:40:56
 # @Description: 
 # @FilePath: \fd-common-components\deploy.sh
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO> 这里做出对应的替换
git push -f git@github.com:lwl666666/fd-common-components.git main:gh-pages

cd -