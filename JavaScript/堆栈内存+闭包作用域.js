/* 第一题 */

// let a = {}, b = "0", c = 0;
// a[b] = "ho";
// a[c] = "shi";

// // a["0"] = "ho";
// // a[0] 中key 为数值会转换为字符串变为 a["0"] = "shi"
// // 重新为a["0"]赋值为 "shi"
// console.log(a[b]); // shi



/* 第二题 */

// let a = {},
//   b = Symbol("1"),
//   c = Symbol("1");
// a[b] = "Ho";
// a[c] = "Shi";

// // Symbol 唯一
// console.log(a[b]); // Ho




/* 第三题 */

// let a = {},
//   b = {
//     n: "1"
//   },
//   c = {
//     m: "2"
//   }

// a[b] = "Ho";
// a[c] = "Shi"

// // key为对象时会转换为字符串 [object Object]
// // a[c]对a[b]重新赋值

// console.log(a[b]); // Shi




/* 第四题 */

// var test = (function (i) {
//   return function () {
//     // alert(i *= 2);  // "4"
//     // js没有alert 用log代替
//     console.log(i *= 2);  // 4
//   }
// })(2)

// // 闭包作用域向上寻找
// // i = 2
// test(5); // 4


/* 第五题 */

// var a = 0,
//   b = 0;
// function A(a) {
//   A = function (b) {
//     // alert(a + b++)
//     console.log(a + b++)
//   };
//   // alert(a++)
//   console.log(a++);
// }


// // 首先创建 函数A
// // 函数A中 A被重写
// // A(1) 调用 a++ 
// // A(2) 再次对函数A还有引用 被重写的A不会销毁
// // A(2) 执行(2 + 1 ++)
// A(1); // 1
// A(2); // 4

