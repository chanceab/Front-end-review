let callbacks = [];
let pending = false;
function flushCallbacks() {
  // 把标志还原为false
  pending = false;

  // 依次执行回调
  for (let i = 0; i < callbacks.length; i++) {
    callbacks[i]();
  }
}

// 定义异步方法 采用优雅降级
let timerFunc: Function;

if (typeof Promise !== "undefined") {
  // 如果支持Promise
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
  };
} else if (typeof MutationObserver !== "undefined") {
  // MutationObserver 主要是监听DOM 变化, 异步函数
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
}
// 主流浏览器不支持
// else if (typeof setImmediate !== "undefined") {
//   timerFunc = () => {
//     setImmediate(flushCallbacks);
//   }
// }
else {
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

export function nexttick(cb) {
  // 除了渲染watcher  还有用户自己手动调用的nextTick 一起被收集到数组
  callbacks.push(cb);

  // 如果多次调用nextTick  只会执行一次异步 等异步队列清空之后再把标志变为false
  if (!pending) {
    pending = true;
    timerFunc();
  }
}
