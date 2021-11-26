// 当context未传入时设置window
Function.prototype.myApply = function (context = window) {
  // 判断调用函数
  if (typeof context !== "function") {
    throw new TypeError("Type Error")
  }

  let result = null;

  // 将函数设置为对象的方法
  context.fn = this;

  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;

  return result;

}