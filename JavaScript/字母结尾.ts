// 以 aeiou 结尾的字符串

function check(str: string) {
  // 正则
  // return /[aeiou]$/i.test(str);

  // 转小写
  const lastCode = str.charAt(str.length - 1).toLocaleLowerCase()
  const list = "aeiou"
  return list.includes(lastCode)
}

console.log(check("adssdfg"));
console.log(check("asdf"));
console.log(check("ewrwwe"));
console.log(check("eawfea"));
