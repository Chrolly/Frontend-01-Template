# 课程作业

## 使用状态机完成”abababx”的处理

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
    if (c === "a") {
        return foundA2;
    } else {
        return start(c);
    }
}

function foundA2(c) {
    if (c === "b") {
        return foundA3;
    } else {
        return start(c);
    }
}

function foundA3(c) {
    if (c === "a") {
        return foundB3;
    } else {
        return start(c);
    }
}

function foundB3(c) {
    if (c === "b") {
        return foundX;
    } else {
        return start(c);
    }
}

function foundX(c) {
    if (c === "x") {
        return end;
    } else {
        return foundA3(c);
    }
}

console.log(match("ababababx"));
```

## 挑战题目：如何用状态机处理完全未知的 pattern (选做)

## 跟上课堂内容，完成 DOM 树构建

[DOM 树构建](/week06/html-parse/1-splitFile/parser.js)

## 实现复合选择器，实现支持空格的 Class 选择器(选做)
