# 每周总结可以写在这里

## Flex 排版

### 背景

早年 CSS 三大经典问题

- 垂直居中问题
- 两列等高问题
- 自适应问题

各种黑科技来解决问题

- 著名的 table 布局
- 负 margin
- float
- clear 等等

直到 Flex 布局被随着 CSS3 一起提出，可以说是解决了大问题

### 属性

- align-content
- align-items
- align-self
- flex

- flex-basis
- flex-direction
- flex-flow
- flex-grow

- flex-shrink
- flex-wrap
- justify-content
- order

### 主轴与交叉轴

- Main Axis / Cross Axis
  - flex-direction: row
  - Main: width x left right
  - Cross: height y top bottom

- Cross Axis / Main Axis
  - flex-direction: column
  - Main: height y top bottom
  - Cross: width x left right

### 步骤

#### 第一步：收集元素进行(hang)

分行

- 根据主轴尺寸，把元素分行
- 若设置了 `no-wrap` ，则强行分配进第一行

#### 第二步：计算主轴

- 计算主轴方向
  - 找出所有的 `Flex` 元素
  - 把主轴方向的剩余尺寸按比例分配给这些元素
  - 若剩余空间为负数，所有 `Flex` 元素为0，等比压缩剩余元素

#### 第三步：计算交叉轴

- 计算交叉轴方向
  - 根据每一行中最大元素尺寸计算行高
  - 根据行高 `flex-align` 和 `item-align` ,确定元素具体位置

## 重学 CSS

### 第一步：CSS 语法的研究

CSS 的标准比较分散，目前没有相对系统的 CSS 标准

CSS 2.1

### 第二步：CSS @规则的研究

> At-rules  
> [@charset](https://www.w3.org/TR/css-syntax-3/)  
> [@import](https://www.w3.org/TR/css-cascade-4/)  
> [@media](https://www.w3.org/TR/css3-conditional/)  
> [@page](https://www.w3.org/TR/css-page-3/)  
> [@counter-style](https://www.w3.org/TR/css-counter-styles-3)  
> [keyframes](https://www.w3.org/TR/css-animations-1/)  
> [fontface](https://www.w3.org/TR/css-fonts-3/)  
> [supports](https://www.w3.org/TR/css3-conditional/)  
> [namespace](https://www.w3.org/TR/css-namespaces-3/)  

### 第三步：CSS 规则的结构

#### CSS 规则

- Selector
  - [Selector-3](https://www.w3.org/TR/selectors-3/)
  - [Selector-4](https://www.w3.org/TR/selectors-4/)
- Key
  - Properties
  - [Variables](https://www.w3.org/TR/css-variables/)
- [Value](https://www.w3.org/TR/css-values-4/)

### 第四步：初建 CSS 知识体系

- CSS 知识体系 <https://shimo.im/mindmaps/xWpqGTJpRGRXYWvG>

#### 实验 收集标准

- [CSS 标准收集](/week07/css-standards.json)

##### 实验 收集 CSS 属性相关标准

## 参考文档

- [Flex 布局语法教程 | 菜鸟教程](https://www.runoob.com/w3cnote/flex-grammar.html)
- [A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
- [CSS Flexible Box Layout | W3C](https://www.w3.org/TR/css-flexbox/#box-model)
