# 每周总结可以写在这里
## 课程总结
+ JavaScript
- Atom
- Expression
- Statement
- Structure
- Program/Module

+ Atom
- Grammar
- 简单语句
- 组合语句
- 声明
  - FunctionDeclaration
  - GeneratorDeclaration
  - AsyncFunctionDeclaration
  - AsyncGeneratorDeclaration
  - VariableStatement
  - ClassDeclaration
  - LexicalDeclaration

+ Runtime
- Completion Record
- Lexical Environment

+ Completion Record
```
[[type]]:normal,break,continue,return,throw
[[value]]:types
[[target]]:label
```

+ 简单语句
- ExpressionStatement
- EmptyStatement
- DebuggerStatement
- ThrowStatement
- ContinueStatement
- BreakStatement
- ReturnStatement

+ 复合语句
- BlockStatement
- IfStatement
- SwitchStatement
- IterationStatement
  - while()
  - do...while();
  - for(;;){}
  - for( in ){}
  - for( of ){}
- WithStatement
- LabelStatement
- TryStatement
  ```
  try{

  }catch(){

  }finally{

  }
  ```
- 预处理
- 作用域

## 课程代码
```
function cls1(s){
  console.log(s);
}
function cls2(s){
  console.log("2",s);
}
new new cls2("good");
// 2 good
```
```
function convertStringToNumber(){
  var chars = string.split('');
  var number = 0;
  for(var i=0; i<chars.length; i++){
    number += chars[i].codePointAt(0) - '0'.codePointAt(0)
  }
}
```

```
function sleep(d){
  return new Promise(reslove => setTimeout(reslove, d));
}
async function* foo(){
  var i=0;
  while(true){
    yield i++;
    await sleep(1000);
  }
}
void async function(){
  var g = foo();
  console.log(await g.next());
  console.log(await g.next());
  console.log(await g.next());
  console.log(await g.next());
  console.log(await g.next());
}();

void async function(){
  var g = foo();
  for await(let e of g){
    console.log(e);
  }
}();
```
```
var x=0;
function foo(){
  var o={x:1};
  x=2;
  with(o){
    x=3;
  }
  console.log(x);
}
foo()
console.log(x);
```
