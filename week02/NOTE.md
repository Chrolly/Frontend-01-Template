# 每周总结可以写在这里


小作业:
* 写一个正则表达式 匹配所有 Number 直接量
Number 直接量分为十进制、二进制、八进制、十六进制四种类型。
<!-- 整数-->
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
