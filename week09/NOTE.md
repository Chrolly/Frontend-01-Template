# 每周总结可以写在这里

## 重学 CSS - 动画与绘制

### 动画 Animation

- @keyframes 定义
- animation 使用

```js
@keyframes mykf{
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

div {
  animation: mykf 5s infinite; //无线循环
}

```

- 帧的定义
  - 游戏 60帧
  - 无任何操作 48帧也可以
  - 李安导演电影 120帧

- 属性
  - animaiton-name 时间曲线
  - animation-duration 动画的时长
  - animation-timing-function 动画的时间曲线
  - animation-delay 动画开始前的延迟
  - animation-iteration-count 动画的播放次数
  - animation-direction 动画的方向

```js
@keyframes mykf{
  0% {top: 0; transition: top ease}
  50% {top: 30px; transition: top ease-in}
  75% {top: 10px; transition: top ease-out}
  100% {top: 0; transition: top linear}
}

```

### 绘制 Transition

- 属性
  - transition-property 要变换的属性
  - transition-duration 变换的时长
  - transition-timing-function 时间曲线
  - transition-delay 延迟

- cubic-bezier

### 重学 CSS - 渲染与颜色

主要了解渲染的颜色、渲染的形状

- 颜色
  - CYMK
  - RGB
  - HSL
  - HSV 重点
    - 一个按钮颜色的例子
- 形状
  - border
  - box-shadow
  - border-radius
  - data uri+svg

### 打开一个空白页面，找到它的 body，把它的 ComputedStyle 取出来，会得到大概 280 个属性。把这些属性进行归类，用脑图的方式写到学习总结里

- CSS property
  - layout
    - dispaly
    - position
  - render
  - interactive
  - svg
  - other

```js
getComputedStyle(document.body);
getComputedStyle(document.body).length; //280个属性

```

- svg特有的单独挑出来

## 重学 HTML

### HTML 定义：XML 与 SGML

- [Tim Berners-Lee](#fragment)
- SGML 用DTD：以实体的方式去定义
- XML 用namespace

- namespace 代替 DTD

## 参考链接

- [cubic-bezier](https://cubic-bezier.com/#.17,.67,.83,.67)
- <https://zh.wikipedia.org/wiki/貝茲曲線>
