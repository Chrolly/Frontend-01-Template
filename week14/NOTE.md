# 每周总结可以写在这里

## 组件化 | 为组件添加JSX语法

### 参考链接

1. 安装 webpack： <https://webpack.js.org/concepts/>
2. <https://babeljs.io/docs/en/babel-plugin-transform-react-jsx/>
3. <https://github.com/babel/babel-loader>
4. <https://facebook.github.io/jsx/>

### 参考代码

```js
 "@babel/core": "^7.10.4",
    "@babel/preset-env": "^7.10.4",
    "@babel/plugin-transform-react-jsx": "^7.10.4",
    "babel-loader": "^8.1.0",
    "webpack": "^4.43.0"
```

```js
let component = <Div id="a" cls="b" style="width:100px;height:100px;background-color:lightgreen">
        <Div></Div>
        <Div></Div>
        <Div></Div>
    </Div>
```

课程中讲解怎么去掉create错误

```js
React = {}；
React.createElement = function createElement(Cls, attributes){}
```

## 组件化 | 轮播组件

### 参考链接

```js
let data = [
" https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg ",
" https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg ",
" https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg ",
" https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg ",
];
```

#### 参考代码

```js
this.root.addEventListener("mousedown", event => {
  let startX = event.clientX, startY = event.clientY;
  let move = event => {
    console.log(event.clientX - startX, event.clientX - startY);
    };
  let up = event => {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
})

element.addEventListener("dragstart", event => event.preventDefault())
```
