async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve: any) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});

console.log("script end");

// 宏任务: I/O setTimeout setInterval  requestAnimationFrame setImmediate(浏览器不支持, node支持)
// 微任务: MutationObserver  (Promise.then catch finally) process.nextTick(浏览器不支持, node支持)

/* 
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/
