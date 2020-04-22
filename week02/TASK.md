一、随堂练习
* 编写带括号的四则运算产生式
<Number> = "0" | "1" | "2" | ... | "9"

<DecimalNumber> = "0" | (("1" | "2" | ... | "9" ) <Number>* )

<PrimaryExpression> = <DecimalNumber> |
    "(" <LogicalExpression> ")"

<MutiplicativeExpression> =   <DecimalNumber> |
    <MutiplicativeExpression> "* " <DecimalNumber>
    <MutiplicativeExpression> "/" <DecimalNumber>

<AdditiveExpression> = <DecimalNumber> |
    <AdditiveExpression> "+" <MutiplicativeExpression>
    <AdditiveExpression> "-" <MutiplicativeExpression>

<LogicalExpression> = <AdditiveExpression> |
    <LogicalExpression> "||" <AdditiveExpression>
    <LogicalExpression> "&&" <AdditiveExpression>    

* 尽可能寻找你知道的计算机语言，尝试把它们分类
0- 型文法（无限制文法或短语结构文法）：
包括所有的文法。

1- 型文法（上下文相关文法）：
JavaScript语言
Python语言

2- 型文法（上下文无关文法）：
C/C++语言
C#语言
PHP语言
Java语言
Ruby语言
Go语言
Scala语言
Swift语言

3- 型文法（正规文法）：
无

二、小作业:
* 写一个正则表达式 匹配所有 Number 直接量
Number 直接量分为十进制、二进制、八进制、十六进制四种类型。
<!-- 整数 -->
var pattern = /^\-{0,1}[0-9]{1,}$/,
	str = '789';
console.log(pattern.test(str));
<!-- 浮点数 -->
var pattern = /^[-]?[0-9]+(\.[0-9]+)?$/,
	str = '3.14';
console.log(pattern.test(str));
<!-- 二进制 -->
var pattern = /^[0,1]+$/,
	str = '1110000';
console.log(pattern.test(str));
<!-- 八进制 -->
新版的八进制写法是0o开头
var pattern = /^(0o)[0-7]+$/,
	str = '';
console.log(pattern.test(str));
<!-- 十六进制 -->
var pattern = /^(0x|0X)[0-9A-Fa-f]+$/,
	str = '0xff';
console.log(pattern.test(str));
<!-- 匹配所有 Number 直接量 -->
var pattern = //^\-{0,1}[0-9]{1,}|^[-]?[0-9]+(\.[0-9]+)?|^[0,1]+$|^(0o)[0-7]+|^(0x|0X)[0-9A-Fa-f]+$/,
	str = '';
console.log(pattern.test(str));

* 写一个 UTF-8 Encoding 的函数
function utf8Encoding(str){
  let res = '';
  for(let s of str){
    res += s.charCodeAt().toString(16);
  }
  return ('\\u'+res);
}
utf8Encoding('严')

* 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
<!-- Unicode -->
/^[\u4E00-\u9FFF]+$/
<!-- ASCII -->
/^\\u00[2-7][1-9A-E]$/
<!-- 单引号 -->
/\'(.* )\'/
<!-- 双引号 -->
/\"(.* )\"/
<!-- 所有字符串直接量 -->
/\"(.* )\"|\'(.* )\'|^\\u00[2-7][1-9A-E]|^[\u4E00-\u9FFF]+$/
