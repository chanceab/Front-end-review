// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

function curryEs5(fn: Function, args = []) {
  // 获取参数长度
  let argLength = fn.length

  return function () {
    let subArgs = args.slice(0);


    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i])
    }

    // 判断参数长度是否已经满是函数所需要的长度

    if (subArgs.length >= argLength) {
      return fn.apply(this, subArgs)
    } else {
      return curryEs5.call(this, fn, subArgs);
    }
  }
}


function curryEs6(fn, ...args) {
  return fn.length <= args.length ?
    fn(...args) : curryEs6.bind(null, fn, ...args)
}