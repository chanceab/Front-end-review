function getMaxStr(str) {
  // 合法性判断
  if (!str) return;

  const newStr1 = str.trim().split(" ");
  let newStr2 = ""
  for (const item of newStr1) {
    newStr2 += item
  }

  const newStr3 = newStr2.split("")

  let strObj = {
    A: 1
  }

  newStr3.forEach((item) => {
    if (strObj[item]) {
      strObj[item]++
    } else {
      strObj[item] = 1
    }
  })

  let maxObj = { key: "key", value: 0 }

  Object.keys(strObj).forEach((k) => {
    if (strObj[k] > maxObj.value) {
      maxObj.key = k;
      maxObj.value = strObj[k];
    }
  })


  console.log(maxObj.key, maxObj.value);
}


getMaxStr(" 12345 678aEEvaHJY1 ;!2345 6781233,3 ")