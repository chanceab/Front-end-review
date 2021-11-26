function mySetInterval(fn: Function, timer = 200) {

  // 设置控制器
  const tcontroller = {
    flag: true
  }

  // 递归
  function interval() {
    if (tcontroller.flag) {
      fn();
      setTimeout(interval, timer)
    }
  }

  // 启动定时器
  setTimeout(interval, timer);

  // 返回控制器
  return tcontroller;
}

function show() {
  console.log("@@@");

}

mySetInterval(show, 200)