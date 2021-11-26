const throttle = (fn: Function, delay = 200, immediate = false) => {
  let preTime = Date.now();

  return (...args: any) => {
    if (immediate) {
      fn.apply(this, args);
    }

    let nowTime = Date.now();
    console.log(preTime, nowTime);

    if (nowTime - preTime >= delay) {
      preTime = Date.now();
      return fn.apply(this, args);
    }
  };
};

const test = () => {
  console.log("@@@");
};

throttle(test)();

export { throttle };
