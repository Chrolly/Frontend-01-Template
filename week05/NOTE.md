# 每周总结可以写在这里

## 浏览器工作原理

## 浏览器工作原理 | HTTP协议+语法与词法分析（一）

### 前端面试题：从输入url到浏览器呈现页面内容，中间发生了什么

- 从浏览器的角度看：
  - 输入URL   发起HTTP请求
  - 拿到HTML代码  parse解析
  - DOM树 css属性   computing
  - DOM with CSS  layout排版：流排版、flash、css API等，课程中仅涉及最基础的部分
  - DOM with position   render渲染
  - Bitmap 在内存中的一张图片

## 基础知识

- ISO-OSI七层网络模型
  - 应用
  - 表示
  - 会话  以上三层常混在一起 HTTP //require("http")
  - 传输  TCP UDP 加密传输与非加密传输 //require("net")
  - 网络  Internet IP协议
  - 数据链路  
  - 物理层 以上两层 4G/5G/WIFI （WIFI也有5G的概念）
  
- 浏览器在TCP层的上面，理解层之间的关系；
  - 采用require("net")去理解浏览器工作原理，而不是直接使用require("http")

## TCP与IP的一些基础知识

- TCP
  - 流 //流式传输
  - 端口
  - require('net');
- IP
  - 包
  - IP地址
  - libnet/libpcap
- wireshark

- HTTP
  - Request
  - Response

- 准备Node.js环境

## 浏览器工作原理 | HTTP协议+语法与词法分析（二）

- 熟悉前端Node.js环境
  - Node.js怎么实现http

- HTTP精简版由三部分组成
  - Request line
    - method
      - GET //通过地址栏访问页面的都是GET方法
      - POST  //表单提交产生POST方法
      - HEAD  //跟GET类似，仅返回请求头，多数由JavaScript发起
      - PUT //添加资源
      - DELETE  //删除资源
      - CONNECT  //现在多用于 HTTPS 和 WebSocket
      - OPTIONS  //一般用于调试，多数线上服务都不支持
      - TRACE   //一般用于调试，多数线上服务都不支持
  - headers
  - body

## Content-Type四种类型

- application/x-www-form-urlencoded
- multipart/form-data
- text/xml
- text/json

## 关于换行符CR(CARRIAGE RETURN)和LF(Line Feed)区别

- CR(CARRIAGE RETURN)：最初表示焦点转移到第一列
- LF(Line Feed)：表示打印的纸张转移到下一行
- EOL(End of Line)：是CR和LF的组合，表示到下一行并把焦点移到第一列。现在的windows系统，用CR+LF的组合表示换行。

参考资料：

- [HTTP 1.1](tools.ietf.org/html/rfc2616/)
- [HTTP协议概述](https://shimo.im/docs/XHxyjY3tCXvydtCC)
- [HTML解析代码与DOM树构建](https://shimo.im/docs/cW66cGQ6kGQDRq8x)
