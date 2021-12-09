// 数组考虑性能原因没有用 defineProperty 对数组的每一项进行拦截，而是选择对 7 种数组（push,shift,pop,splice,unshift,sort,reverse）方法进行重写(AOP 切片思想)

// 所以在 Vue 中修改数组的索引和长度是无法监控到的。需要通过以上 7 种变异方法修改数组才会触发数组对应的 watcher 进行更新

// 保留数组原型
const arrayProto = Array.prototype;

// 将arrayMethods继承自数组原型
// 面向切片编程(AOP) 不破坏封装的前提的下, 动态动态扩展功能
export const arrayMethods = Object.create(arrayProto);

let methodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "reverse",
  "sort",
];

methodsToPatch.forEach((method) => {
  arrayMethods[method] = function (...args) {
    // 保留原型方法的执行结果
    const result = arrayProto[method].apply(this, args);

    // this代表的就是数据本身

    const ob = this._ob_;

    // 代表数组有新增操作
    let inserted;
    switch (method) {
      case "push":
      case "unshift":
        inserted = args;
        break;
      case "splice":
        inserted = args.slice(2);

      default:
        break;
    }

    if (inserted) {
      ob.observerArray(inserted);
    }
    return result;
  };
});
