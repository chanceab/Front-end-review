const value = 12000000.11;

// 方法一
function format1(value: string | number): string {
  if (typeof value == "number") {
    value = value.toString();
  }
  return value && value.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}

console.log(format1(value));

// 方法二
function format2(value: string | number) {
  if (typeof value == "string") {
    value = parseFloat(value);
  }

  return Intl.NumberFormat().format(value);
}

console.log(format2(value));

// 方法三
function format3(value: string | number) {
  if (typeof value == "string") {
    value = parseFloat(value);
  }

  return value.toLocaleString("en");
}

console.log(format3(value));

export {};
