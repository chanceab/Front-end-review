function foo() {
  getName = () => {
    console.log("11332");
  }
  return this
}

var getName = () => {
  console.log("@@@");
}

foo().getName();

