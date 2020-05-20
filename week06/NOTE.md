# 每周总结可以写在这里

## 浏览器工作原理 | 有限状态机

### 有限状态机适合的场景

- 有限状态机处理字符串  
- 游戏应用 敌人的AI
- 学术界常用有限状态机描述一些算法
- 编译原理构建AST
- 正则表达式处理字符串

有限状态机特点

- 编程的思想
- 没有特定的接口
- 应用广泛

### 有限状态机概念

- 每一个状态都是一个机器
  - 在每一个机器里，我们可以做计算、存储、输出...  
  - 所有的这些机器接受的输入是一致的  
  - 状态机的每一个机器本身没有状态， 如果我们用函数来表示的话，它应该是纯函数（无副作用）
- 每一个机器知道下一个状态
  - 每个机器都有确定的下一个状态（Moore）  
  - 每个机器根据输入决定下一个状态（Mealy）

### 课堂练习

### 在一个字符串中，找到字符"a"

```js
var pattern = /\a/,
str = 'qwertasdfg';
console.log(pattern.test(str));
```

> 正则表达式实现

```C++
str = 'qwertasdfg';
function Stringmatch(str){
  for(int i = 0; i < str.length; i++){
  if('a' === str[i])
  break;
}
  return i+1; //返回字符a所在的位置
}
```

> 循环遍历实现

```js
function match(string){
  for(let c of string){
    if(c == "a")
      return true;
  }
}

match("I am grrot");
```

> 普通函数实现

### 在一个字符串中，找到字符"ab"

```js
function match(string){
  let foundA = false;
  for(let c of string){
    if(c == "a"){
      foundA = true;
    }
    else if(foundA && c == "b"){
      return true;
    }
    else{
      foundA = false;
    }
  }
  return false;
}
console.log(match("I amb agrraotab"));
```

> 普通函数实现

### 在一个字符串中，找到字符"abcdef"

```js
function match(string){
  let foundA = false;
  let foundB = false;
  let foundC = false;
  let foundD = false;
  let foundE = false;
  
  for(let c of string){
    if(c == "a"){
      foundA = true;
    }
    else if(foundA && c == "b"){
      foundB = true;
    }
    else if(foundB && c == "c"){
      foundC = true;
    }
    else if(foundC && c == "d"){
      foundD = true;
    }
    else if(foundD && c == "e"){
      foundE = true;
    }
    else if(foundE && c == "f"){
      return true;
    }
    else{
      foundA = false;
      foundB = false;
      foundC = false;
      foundD = false;
      foundE = false;
    }
  }
  return false;
}

console.log(match("I amb abcmdef"));
```

> 普通函数实现  
> 缺点：时间复杂度太大，`O(m*n)`

### JS中的有限状态机(Mealy)

```C++
//每个函数是一个状态
function state(input) //函数参数就是输入
{
//在函数中，可以自由地编写代码，处理每个状态的逻辑
  return next;//返回值作为下一个状态
}
//以下是调用
while(input) {
  //获取输入
  state = state(input); //把状态机的返回值作为下一个状态
}
```

> 如果`return next;`返回的是一个固定的值，就是Moore型状态机；  
> 如果返回值跟输入`input`有关，就是Mealy型状态机；

### 采用Mealy型状态机解决上述问题

```js
function match(string){
  let state = start;
  for(let c of string){
    console.log(c);
    state = state(c);
  }
  return state === end;
}

function start(c){
  if(c === "a"){
    return foundA;
  }
  else{
    return start;
  }
}

function end(c){
  return end;
}

function foundA(c){
  if(c === "b"){
    return foundB;
  }
  else{
    return start(c);
  }
}

function foundB(c){
  if(c === "c"){
    return foundC;
  }
  else{
    return start(c);
  }
}

function foundC(c){
  if(c === "d"){
    return foundD;
  }
  else{
    return start(c);
  }
}

function foundD(c){
  if(c === "e"){
    return foundE;
  }
  else{
    return start;
  }
}

function foundE(c){
  if(c === "f"){
    return end;
  }
  else{
    return start(c);
  }
}

console.log(match("aabc"));
```

### 如何用状态机处理诸如"abcabx"这样的字符串

```js
function match(string) {
    let state = start;
    for (let c of string) {
        console.log(c);
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if (c === "a") {
        return foundA;
    } else {
        return start;
    }
}

function end(c) {
    return end;
}

function foundA(c) {
    if (c === "b") {
        return foundB;
    } else {
        return start(c);
    }
}

function foundB(c) {
    if (c === "c") {
        return foundC;
    } else {
        return start(c);
    }
}

function foundC(c) {
    if (c === "a") {
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if (c === "b") {
        return foundB2;
    } else {
        return start(c);
    }
}

function foundB2(c) {
    if (c === "x") {
        return end;
    } else {
        return foundB(c);
    }
}

console.log(match("abcabcabx"));
```

## 浏览器工作原理 | HTTP协议+语法与词法分析(三)

[HTML 的解析笔记](/week06/HTMLParse.md)

## 浏览器工作原理 | CSS计算，排版，渲染，合成

[CSS 计算，排版，渲染，合成的笔记](/week06/CSSComputing.md)

## 参考链接

- [字符串KMP算法](https://www.cnblogs.com/zhangboy/p/7635627.html)
