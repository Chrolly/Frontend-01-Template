# 渲染流程

## HTML、CSS 和 JavaScript 是如何变成页面的

### 了解相关流程能帮助"你"看透页面是如何工作的，解决一系列相关的问题

- 熟练使用开发者工具
- 理解开发者工具里面大部分项目的含义
- 优化页面卡顿问题
- 使用 JavaScript 优化动画流程
- 通过样式表来防止强制同步布局
- ...

### HTML、CSS 和 JavaScript 关系图

![HTML、CSS 和 JavaScript 关系图](/week09/HTML、CSS%20和%20JavaScript%20关系图.png)

> 从上图可以看出，HTML 的内容是由标记和文本组成。标记也称为标签，每个标签都有它自己的语义，浏览器会根据标签的语义来正确展示 HTML 内容。比如上面的< p>标签是告诉浏览器在这里的内容需要创建一个新段落，中间的文本就是段落中需要显示的内容  
> 如果需要改变 HTML 的字体颜色、大小等信息，就需要用到 CSS。CSS 又称为层叠样式表，是由选择器和属性组成，比如图中的 p 选择器，它会把 HTML 里面< p>标签的内容选择出来，然后再把选择器的属性值应用到< p>标签内容上。选择器里面有个 color 属性，它的值是 red，这是告诉渲染引擎把< p>标签的内容显示为红色  
> 至于 JavaScript（简称为 JS），使用它可以使网页的内容“动”起来，比如上图中，可以通过 JavaScript 来修改 CSS 样式值，从而达到修改文本颜色的目的

思考：

减少重绘、重排是一种很好的优化方式

通过 JavaScript 或者 CSS 修改元素的几何位置属性会导致重排，重排会触发浏览器重新布局，解析之后一系列子阶段；
修改了元素的背景颜色的样式属性，重绘会跳过Layout、Layer阶段，进入到绘制阶段，然后执行之后的一系列子阶段；

而且，重排必然带来重绘，但是重绘未必带来重排

比如，改变某个元素的背景，这个就不涉及元素的几何属性，所以只发生重绘

从这样的角度出发，减少重绘、重排是一种很好的优化方式

减少重排重绘, 方法很多：

1. 使用 class 操作样式，而不是频繁操作 style
2. 避免使用 table 布局
3. 批量dom 操作，例如 createDocumentFragment，或者使用框架，例如 React
4. Debounce window resize 事件
5. 对 dom 属性的读写要分离
6. will-change: transform 做优化

```js
var bar = {
  myName:"time.geekbang.com",
  printName: function () {
    console.log(myName)
    }
  }

function foo() {
  let myName = "极客时间"
  return bar.printName
}

let myName = "极客邦"
let _printName = foo()
_printName()
bar.printName()
```
