// 当context未传入时设置window
Function.prototype.myBind = function (context = window) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Type Error");
  }

  // 获取参数
  let args = [...arguments].slice(1),
    fn = this;

  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};
