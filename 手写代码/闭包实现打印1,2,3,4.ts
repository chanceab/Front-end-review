// for (var i = 1; i < 5; i++) {
//   (function (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

// let 块级作用域

for (let i = 1; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
