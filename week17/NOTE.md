# 每周总结可以写在这里

工具链 | 整体理解一个工具链的设计(一)

## 前端开发中常用的工具链：从开发的角度去看

vue-cli 介绍与使用

```node
npm install -g @vue/cli
vue --version
// 4.4.6
vue create my-project
cd my-project
npm run serve
```

![image-20200815110225521](E:\program\docsify\docs\asset\image-20200815110225521.png)

[reactjs 介绍](https://react.docschina.org/docs/create-a-new-react-app.html)

```node
npx create-react-app my-app
cd my-app
npm start
```

![image-20200815110301701](E:\program\docsify\docs\asset\image-20200815110301701.png)

angulatjs 介绍

```node
npm install -g @angular/cli
ng new my-app
```

![image-20200815110148360](E:\program\docsify\docs\asset\image-20200815110148360.png)

初始化工具决定了开发/调试、测试、发布等工具的使用。

## yeoman 介绍

[yeoman 介绍](https://yeoman.io/)

```js
madir generator-winter
cd generator-winter
npm init
npm install yeoman-generator
npm link
```

![image-20200815113047277](E:\program\docsify\docs\asset\image-20200815113047277.png)

## 课程新增内容

函数式编程

```js
(g) =>
  ((f) => f(f)((self) => g((...args) => self(self).apply(this.args))))(
    (self) => {
      return (n) => (n > 0 ? self(n - 1) + n : 0);
    },
  )(100);
// 5050
```

![image-20200815112123448](E:\program\docsify\docs\asset\image-20200815112123448.png)
