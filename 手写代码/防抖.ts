// interface

// function debounce(fn, wait = 300) {
//   let timer: any = null;
//   let _this: any = this:debounce;
//   // return function () {
//   //   let _this = this;
//   //   let args = arguments;

//   //   if (timer) {
//   //     clearTimeout(timer);
//   //   }
//   //   timer = setTimeout(function () {
//   //     fn.apply(_this, args);
//   //   }, wait);
//   // };

//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     }

//     timer = setTimeout(() => {
//       fn .apply(_this, arguments);
//       timer = null;
//     }, wait);
//   };
// }

// function debounce(
//   func: Function,
//   delay: number = 200,
//   immediate: boolean = false
// ): Function {
//   let timer: any;

//   return function (this: any, ...args: any[]) {
//     if (immediate) {
//       func.apply(this, args); // 确保引用函数的指向正确，并且函数的参数也不变
//       immediate = false;
//       return;
//     }

//     if (timer) {
//       clearTimeout(timer);
//     }

//     timer = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// }

// const debounce = (fn: Function, debTime: number = 200): Function => {
//   let timer: any = null;

//   return (...args: any[]) => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, ...args);
//       timer = null;
//     }, debTime);
//   };
// };
const debounce = (
  func: Function,
  delay: number = 1000,
  immediate: boolean = false
): Function => {
  let timer: any;
  // let that: any = this;

  return (...args: any) => {
    if (immediate) {
      func.apply(this, args); // 确保引用函数的指向正确，并且函数的参数也不变
      immediate = false;
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

function test() {
  console.log("@@");
}

// 执行返回的函数
debounce(test)();
debounce(test)();
debounce(test)();
debounce(test)();
debounce(test)();
debounce(test)();

export { debounce };
