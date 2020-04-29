## 作业

### 根据课上讲师已写好的部分，补充写完函数 convertStringToNumber
- 课堂代码
```
function convertStringToNumber(string, x){
  var chars = string.split('');
  var number = 0;

  for(var i = 0; i < chars.length; i++){
    number = number * x;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
  }
  return number;
}
convertStringToNumber("100",2)
\\4
```
- 补充完善的代码（整数+小数部分代码）
```
function convertStringToNumber(string, x){
  if(arguments.length < 2){
    x = 10;
  }
  var chars = string.split('');
  var number = 0;

  var i = 0;
  while(i < chars.length && chars[i] != '.'){
    number = number * x;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }
  if(chars[i] == '.'){
    i++;
  }
  var fraction = 1;
  while(i < chars.length){
    fraction = fraction / x;
    number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
    i++;
  }
  return number;
}
convertStringToNumber("10.0123")
\\10.0123
```
- 科学计数法表示
```
//正则表达式
123e3
^-?[0-9]+
e-?[0-9]+

/^-?[0-9]+/.exec('123e3');
/e-?[0-9]+/.exec('123e3');
```
```
//科学计数法转换
function regExp(number){
  var integer_r = /^-?[0-9]+/.exec(number);
  console.log(integer_r);
  var fraction_r = /e-?[0-9]+/.exec(number);
  console.log(fraction_r);
  if(/-/.test(fraction_r)){
    fraction_r = /[0-9]+/.exec(fraction_r);
    console.log(fraction_r);
    var num_dec = Number(fraction_r);
    for(let i = 0; i < num_dec; i++){
      integer_r = integer_r / 10;
    }
  }
  else{
    fraction_r = /[0-9]+/.exec(fraction_r);
    console.log(fraction_r);    
    var num_plus = Number(fraction_r);
    for(let i = 0; i < num_plus; i++){
      integer_r = integer_r * 10;
    }
  }
  return integer_r;
}
regExp('123e6')
```
```
//完整代码
function regExp(number){
  var integer_r = /^-?[0-9]+/.exec(number);
  var fraction_r = /e-?[0-9]+/.exec(number);
  if(/-/.test(fraction_r)){
    fraction_r = /[0-9]+/.exec(fraction_r);
    var num_dec = Number(fraction_r);
    for(let i = 0; i < num_dec; i++){
      integer_r = integer_r / 10;
    }
  }
  else{
    fraction_r = /[0-9]+/.exec(fraction_r);
    var num_plus = Number(fraction_r);
    for(let i = 0; i < num_plus; i++){
      integer_r = integer_r * 10;
    }
  }
  return String(integer_r);
}
function convertStringToNumber(string, x){
  if(arguments.length < 2){
    x = 10;
  }
  if(/e/.test(string)){
    string = regExp(string);
    console.log(string);
  }
  var chars = string.split('');
  var number = 0;

  var i = 0;
  while(i < chars.length && chars[i] != '.'){
    number = number * x;
    number += chars[i].codePointAt(0) - '0'.codePointAt(0);
    i++;
  }
  if(chars[i] == '.'){
    i++;
  }
  var fraction = 1;
  while(i < chars.length){
    fraction = fraction / x;
    number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
    i++;
  }
  return number;
}
convertStringToNumber("123e-3");
convertStringToNumber("123e3");
convertStringToNumber("10.02");
//0.123
//123000
//10.02
```

* 函数 convertNumberToString
- 整数部分（课堂代码）
```
function convertNumberToString(number, x){
  var integer = Math.floor(number);
  var fraction = number - integer;
  var string = '';
  while(integer > 0){
    string = integer % x + string;
    integer = Math.floor(integer / x);
  }
  return string;
}
convertNumberToString(100,2)
```
- 实现总是返回一个数值的整数部分的函数
```
function ToInteger(x) {
  x = Number(x);
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}
```
- 完整代码
```
function regExp(number){
  var integer_r = /^-?[0-9]+/.exec(number);
  var fraction_r = /e-?[0-9]+/.exec(number);
  if(/-/.test(fraction_r)){
    fraction_r = /[0-9]+/.exec(fraction_r);
    var num_dec = Number(fraction_r);
    for(let i = 0; i < num_dec; i++){
      integer_r = integer_r / 10;
    }
  }
  else{
    fraction_r = /[0-9]+/.exec(fraction_r);
    var num_plus = Number(fraction_r);
    for(let i = 0; i < num_plus; i++){
      integer_r = integer_r * 10;
    }
  }
  return integer_r;
}

function ToInteger(x) {
  x = Number(x);
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}

function convertNumberToString(number, x){
  var integer = ToInteger(number);
  var fraction = number - integer;
  if(/e/.test(string)){
    string = regExp(string);
  }
  var string = '';
  var string_fract = '';
  while(integer > 0){
    string = integer % x + string;
    integer = Math.floor(integer / x);
  }
  while(fraction){
    fraction = fraction * x;
    string_fract += ToInteger(fraction);
    fraction = fraction - ToInteger(fraction);
    if(string_fract.length >10){
      break;
    }
  }
  if(string_fract)
    return string+'\.'+string_fract;
  else
    return string;
}
convertNumberToString(6.6,2)；
convertNumberToString(1e1,2)；
convertNumberToString(1e2,2)；

\\110.10011001100
\\1010
\\1100100
```

* 找出 JavaScript 标准里有哪些对象是我们无法实现出来的，都有哪些特性？
写一篇文章，放在学习总结里。
+ Object对象
- Object当作构造函数时：
- Object(value)表示将value转成一个对象；
- new Object(value)则表示新生成一个对象，它的值是value。
- Object.keys方法和Object.getOwnPropertyNames方法用来遍历不可枚举属性时：
- Object.keys方法只返回可枚举的属性；
- Object.getOwnPropertyNames方法还返回不可枚举的属性名。

- Boolean对象
```
if (new Boolean(false)) {
  console.log('true');
} // true
```

false对应的包装对象实例，布尔运算结果也是true。
```
Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true
```
+ Number对象
- toFixed()方法的参数为小数位数，有效范围为0到100，超出这个范围将抛出 RangeError 错误。
- toExponential方法的参数是小数点后有效数字的位数，范围为0到100，超出这个范围，会抛出一个 -RangeError 错误。
- Number.prototype.toPrecision()方法的参数为有效数字的位数，范围是1到100，超出这个范围会抛出 RangeError 错误。用于四舍五入时不太可靠，跟浮点数不是精确储存有关。
- Number.prototype.toLocaleString()方法如果使用浏览器不认识的地区码，会抛出一个错误。

+ String对象
String.fromCharCode方法不支持 Unicode 码点大于0xFFFF的字符，即传入的参数不能大于0xFFFF（即十进制的 65535）。

+ Math对象
- Math对象不是构造函数，不能生成实例，所有的属性和方法都必须在Math对象上调用

+ Date对象
- 其他对象求值的时候，都是默认调用.valueOf()方法，但是Date实例求值的时候，默认调用的是toString()方法。这导致对Date实例求值，返回的是一个字符串，代表该实例对应的时间。

+ JSON对象
- 属性值不能使用函数和日期对象。
- null、空数组和空对象都是合法的 JSON 值。
- 对于原始类型的字符串，转换结果会带双引号。
```
JSON.stringify('foo') === "foo" // false
JSON.stringify('foo') === "\"foo\"" // true
```
上面代码中，字符串foo，被转成了"\"foo\""。
- 如果对象的属性是undefined、函数或 XML 对象，该属性会被JSON.stringify过滤。
