// const a = ? // 使得if条件成立

/*
* 参考 https://github.com/YvetteLau/Step-By-Step/issues/9
* */
// 方法一: toString()
// const a = {
//   i: 1,
//   toString() {
//     return this.i++;
//   },
// }

// 方法二: valueOf()
// const a = {
//   i: 1,
//   valueOf() {
//     return this.i++;
//   },
// }

// 方法三: [Symbol.toPrimitive]
// var a = {
//   i: 1,
//   [Symbol.toPrimitive]() {
//     return this.i++;
//   },
// }

// 方法四: Object.defineProperty()  在浏览器环境实现!
// var i = 1;
// Object.defineProperties(window, "a", {
//   get() {
//     return i++;
//   },
// });


// 方法五: 数组实现 [1, 2, 3]
// const a = [1, 2, 3];
// a.toString = a.shift;


// 方法六: 函数实现
// const a = (()=>{
//   let n=0;
//   let s = ()=>1;
//   s.toString = () => ++n; //这里还可以用valueOf ，Symbol.toPrimitive
//   return s;
// })();

// 方法七 生成器结合toString()
const generate = (function* () {
  let c = 0;
  while(true) yield ++c;
})();

const a = {
  toString() {
    return generate.next().value;
  },
}

if (a == 1 && a == 2 && a == 3) {
  console.log("@@");
}