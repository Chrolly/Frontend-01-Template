# 每周总结可以写在这里

## 学习笔记

## 作业

- 完成课上代码，并为轮播组件添加鼠标操作

## 参考链接

### 课程一参考链接

- 安装 webpack： <https://webpack.js.org/concepts/>
- <https://babeljs.io/docs/en/babel-plugin-transform-react-jsx/>
- <https://github.com/babel/babel-loader>
- <https://facebook.github.io/jsx/>

### 课程二

#### 课程二参考链接

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
