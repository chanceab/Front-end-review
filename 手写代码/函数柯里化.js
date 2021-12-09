// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

  // func 是要转换的函数
  return function curried(...args) {
    if (args.length >= func.length) { // (1)
      return func.apply(this, args);
    } else {
      return function pass(...args2) { // (2)
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6，仍然可以被正常调用
console.log(curriedSum(1)(2, 3)); // 6，对第一个参数的柯里化
console.log(curriedSum(1)(2)(3)); // 6，全柯里化