// 当context未传入时设置window
Function.prototype.myCall = function (context = window) {
  // 判断调用函数
  if (typeof context !== "function") {
    throw new TypeError("Type Error")
  }

  // 获取参数
  let args = [...arguments].slice(1), result = null;

  // 将调用函数设置为对象的方法
  context.fn = this;

  // 调用函数
  result = context.fn(...args);

  // 将属性删除
  delete context.fn;

  return result

}