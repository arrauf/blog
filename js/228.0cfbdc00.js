(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{883:function(n,e){n.exports='### title\n\n实现 strStr() 函数。\n\n给定一个 haystack 字符串和一个 needle 字符串, 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从 0 开始)。如果不存在, 则返回  -1。\n\n示例 1:\n\n输入: haystack = "hello", needle = "ll"\n输出: 2\n示例 2:\n\n输入: haystack = "aaaaa", needle = "bba"\n输出: -1\n说明:\n\n当 needle 是空字符串时, 我们应当返回什么值呢？这是一个在面试中很好的问题。\n\n对于本题而言, 当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。\n\n### analyze\n\n后面需要改。\n\n```js\n/**\n * @param {string} haystack\n * @param {string} needle\n * @return {number}\n */\nvar strStr = function (haystack, needle) {\n  return haystack.indexOf(needle)\n};\n```'}}]);