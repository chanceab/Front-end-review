function getType(value: any): string {
  // 为 null时
  if (value === null) {
    return "null";
  }

  // 为引用类型时
  if (typeof value === "object") {
    let valueClass: string = Object.prototype.toString.call(value),
      type = valueClass.split(" ")[1].split("");

    type.pop();

    return type.join("").toLowerCase();
  } else {
    return typeof value;
  }
}

const person = {
  name: "HoShi",
  age: 18,
};

console.log(getType(person));

export {};
