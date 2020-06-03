# 作业

## 随堂练习

请写出下面选择器的优先级

```text
div#a.b .c[id=x]
#a:not(#b)
*.a
div.a
```

> 四元组表示  [行内 Style, ID, Class, Element]  
> [0,1,3,1]  
> [0,2,0,0] :not对优先级没有影响  
> [0,0,1,0]  
> [0,0,1,1]

参考：[CSS Specifishity](https://specifishity.com/)

## 思考题

### 为什么first-letter 可以设置 float 之类的，而 first-line 不行呢

- ::first-line pseudo-element
  - font properties
  - color property
  - background properties
  - word-spacing
  - letter-spacing
  - text-decoration
  - text-transform
  - line-height

- ::first-letter pseudo-elements
  - font properties
  - color property
  - background properties
  - text-decoration
  - text-transform
  - letter-spacing
  - word-spacing (when appropriate)
  - line-height
  - float
  - vertical-align(only if ‘float’ is ‘none’)
  - 盒模型系列
    - margin properties
    - padding properties
    - border properties

> first-letter 比 first-line 多了 float、vertical-align、盒模型：margin\padding\border.  
> the ::first-line pseudo-element can only have an effect when attached to a block-like container such as a block box, inline-block, table-caption, or table-cell.  
> the first line of the p in this fragment: <\p><\br>First... doesn't contain any letters  
> if the first letter(s) of the block are not at the start of the line (for example due to bidirectional reordering), then the UA need not create the pseudo-element(s).

### first-line 为什么可以改字体

first-line 在排版的过程中，直接把样式加到文字上，所有的属性都是作用于文字的，没有作用于盒的，first-line在排版的时候可以一个个应用到文字上

## 编写一个match函数

```js
function match(selector, element){
    baseElement = document.getElementById("element");
    let selectors = [];
    selectors = selector.split(' ');
    if (baseElement.firstElementChild.className == selectors[2]) {
        if (baseElement.parentNode.localName == selectors[0]) {
            console.log("true");
        }
    } else {
        console.log("false");
    }
}

match("div #id.class", document.getElementById("id"));
```

> 思路：写一下selector的逻辑，提示正则也可以写出来；  
> 主要考查Node.js的使用和selector

## 我们如何写字
