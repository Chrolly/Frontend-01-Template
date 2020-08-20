# 每周总结可以写在这里

dev工具

server

- build: webpack babel vue jsx postcss......
- watch: fsevent
- mock: ......
- http: ws

client

- debugger
- source map

工具链 | 设计并实现一个单元测试工具(一)



根据测试结果，写代码进行检查

单元测试是基础库的代码

**重点内容：nyc**

**单元测试环境：mocha**

**检测单元测试用例和目标代码的覆盖程度**

单元测试概念

1. 自动化的结果评判
2. case要自动管理

node-canvas

90%以上通过很好

80%以下case基本没用

```js
mkdir test-demo
cd test-demo
npm init
// 安装mocha
$ npm install --save-dev mocha

mkdir test
mkdir src
open .

---
npm install nyc --save-dev

```

最好使用node最新版本：14.7.0

![image-20200820152324865](E:\program\docsify\docs\asset\image-20200820152324865.png)

mocha

ava

![image-20200820160932151](E:\program\docsify\docs\asset\image-20200820160932151.png)

ava配置文件

`npm install --save-dev @instanbuljs/nyc-config-babel`

```node
{
	"all": true,
	"include": [
		"src/*.js"
	],
	"extends": "@istanbuljs/nyc-config-babel"
}

---
{
	"presets": ["@babel/preset-env"],
	"plugins": ["babel-plugin-istanbul"]
}
```

jest