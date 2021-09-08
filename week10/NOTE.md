# 每周总结可以写在这里

## 重学浏览器API | 其他API，总结

一个问题：把一个元素所有的子元素逆序

| 排序前 | 排序后 |
| ------ | ------ |
| 1      | 5      |
| 2      | 4      |
| 3      | 3      |
| 4      | 2      |
| 5      | 1      |

```html
<div id="a">
  <span>1</span>
  <p>2</p>
  <a>3</a>
  <div>4</div>
</div>
```
1. 方法一

```js
<script>
  // 该方法导致的重排非常厉害
  let element = document.getElementById("a");

  function reverseChildren(element){
    let children = element.childNodes;
    for(len = children.length - 1; len--; len > 0){
      element.appendChild(children[len]);
    }
  }

  reverseChildren(element);
</script>
```
> [appendChild()](https://www.runoob.com/jsref/met-node-appendchild.html) 方法可向节点的子节点列表的末尾添加新的子节点。
> 
> [Node.appendChild()](https://www.runoob.com/jsref/met-node-appendchild.html) 方法将一个节点附加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么 appendChild() 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）。

2. 方法二

```js
  // 常用的方法
  let element = document.getElementById("a");

  function reverseChildren(element){
    var l = element.childNodes.length;
    while(l-- > 0){
      element.appendChild(children[l]);
    }
  }

  reverseChildren(element);
```

3. 方法三

```js
  // 满分代码
  let element = document.getElementById("a");

  function reverseChildren(element){
    let range = new Range();
    range.selectNodeContents(element); // 使 Range 包含某个节点的内容

    let fragment = range.extractContents(); // 把 Range 的内容从文档树移动到一个文档片段中

    var l = fragment.childNodes.length;
    while(l-- > 0){
      fragment.appendChild(fragment.childNodes[l]);
    }

    element.appendChild(fragment)
  }

  reverseChildren(element);

  // 两者结合使用，非常强大
  var fragment = range.extractContents()
  range.insertNode(document.createTextNode("aaaa"))
```



### 回顾知识点

| 导航类操作      | 导航类操作             |
| --------------- | ---------------------- |
| parentNode      | parentElement          |
| chilNodes       | children               |
| firstChild      | firstElementChild      |
| lastChild       | lastElementChild       |
| nextSibling     | nextElementSibling     |
| previousSibling | previousElementSibling |

修改操作 |
---------|
 appendChild |
 insertBefore |
 removeChild |
 replaceChild |

Range API (属于[DOM API](https://developer.mozilla.org/zh-CN/docs/Web/API/Range) 的一部分)。以下是常用的方法。

```js
var range = new Range()
range.setStart(element, g) // 设置 Range 的起点。
range.setEnd(element, 4) // 设置 Range 的终点。
var range = document.getSelection().getRangeAt()

range.setStartBefore // 以其它节点为基准，设置 Range 的起点。
range.setEndBefore
range.setStartAfter // 以其它节点为基准，设置 Range 的起点。
range.setEndAfter
range.selectNode
range.selectNodeContents
Range.extractContents() // 把 Range 的内容从文档树移动到一个文档片段中。
```

### 课程代码

```js
<div id="a">123456789</div>

<script>
  let element = document.getElementById("a");
  let range = new Range();
  range.setStart(element, 0);
  range.setEnd(element, 1);
</script>
```

```js
<div id="a">123<span style="background-color: pink">456789</span>0123456789</div>

<script>
  let range = new Range();
  // 从span的第3个元素开始到后面4的元素开始切
  range.setStart(document.getElementById("a").childNodes[1].childNodes[0], 3);
  range.setEnd(document.getElementById("a").childNodes[2], 3);
</script>

// 输出结果 
// 1234563456789
```

### 重学前端 | CSSOM

- document.styleSheets
  - 案例

```js
//方法一
<style title="Hello">
.a{
  color: red;
}
</style>

//方法二
<link rel="stylesheet" title="x" href="data:text/css,p%7Bcolor:blue%7D">
```

- CSSStyleSheet
- CSSStyleSheet.prototype

- document.styleSheets[0].cssRules
- document.styleSheets[0].insertRule("p{color: pink;}", 0)
- document.styleSheets[0].removeRule(0)

- Rule

- CSSStyleRule
  - selectorText string
  - style K-V结构
- CSSCharsetRule
- CSSImportRule
- CSSMediaRule
- CSSFontFaceRule
- CSSPageRule
- CSSNamespaceRule
- CSSKeyframesRule
- CSSKeyframeRule
- CSSSupportsRule
- ...

- getComputedStyle
  - windows.getComputedStyle(elt, pseudoElt);
    - elt 想要获取的元素
    - pseudoElt 可选，伪元素

## 重学前端 | 所有API

- 窗口API 由CSSOM决定
  - windows.scrollx
  - windows.scrolly
  - windows.scrollBy

- windows.innerHeight
- windows.innerWidth
- windows.outerHeight
- windows.outerWidth
- windows.outerWidth - windows.innerWidth
- window.devicePixelRatio
  - 安卓机 2
- document.documentElement.getBoundingClientRect()

## 作业

- [把所有的 API 画进脑图里](./apis.html)
- [看完第 10 周第 2 节课程，完成 TicTacToe 的练习](./TicTacToe/4.html)
- 根据第 10 周第 2 节课程内容，自己完成一个五子棋的游戏编程（选做）

## 参考链接

- <https://spec.whatwg.org/>
