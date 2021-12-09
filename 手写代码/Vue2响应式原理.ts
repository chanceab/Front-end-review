class Observer {
  constructor(value: any) {
    this.walk(value);
  }

  walk(data: any) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data(key);
      defineReactive(data, key, value);
    }
  }
}
function defineReactive(data: any, key: string, value: any) {
  // 递归关键
  observer(value);

  // 如果value是一个对象还会继续递归
  // 如果数据嵌套层级过深 性能会受到影响

  Object.defineProperty(data, key, {
    get() {
      console.log("获取值" + key);

      // 具体做依赖收集过程
      return value;
    },
    set(newValue) {
      if (newValue === value) {
        return;
      }
      console.log("设置值");

      // 需要做派发更新过程
      value = newValue;
    },
  });
}

export function observer(value: any) {
  if (
    Object.prototype.toString.call(value) === "[Object Object]" ||
    Array.isArray(value)
  ) {
    return new Observer(value);
  }
}
