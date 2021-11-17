// 1
function Foo() {
  getName = function () {
    console.log(1);
  };

  return this;
}

// 2
Foo.getName = function () {
  console.log(2);
};

// 3
Foo.prototype.getName = function () {
  console.log(3);
};

// 4
var getName = function () {
  console.log(4);
}

// 5
function getName() {
  console.log(5);
}

/*  变量/函数提升 */
// var 关键字会被提前声明
// function 关键字会被提前声明加定义
// 1 声明定义 -> 4 声明 -> 5 重写定义 4
// 5 被 4 重写

// 函数执行阶段
// 注意 4 只声明过未被定义
// 1 声明定义 -> 4 声明 -> 5 重写定义 4 -> 2 向 1 添加属性 -> 3 向 1 原型添加属性 -> 4 被定义
// 结果
// function Foo() {
//   getName = function () {
//     console.log(1);
//   };

//   return this;
// }

// // 
// getName: function => 4

// Foo.getName => 2
// Foo.prototype.getName => 3


Foo.getName(); // 2
getName();  // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3
