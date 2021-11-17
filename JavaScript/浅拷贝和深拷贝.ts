const obj = {
  a: 100,
  b: [10, 20, 30],
  c: {
    x: 10
  },
  d: /^\d+$/
}

const arr = [10, [100, 200], {
  x: 10,
  y: 20
}]

function deepClone(obj: any):any {
  const newObj:any = Array.isArray(obj) ? [] : {};
  for (const newObjKey in obj) {
    if(obj.hasOwnProperty(newObjKey)) {
      if(typeof obj[newObjKey] === "object"){
        newObj[newObjKey] = deepClone(obj[newObjKey])
      } else {
        newObj[newObjKey] = obj[newObjKey]
      }
    }
  }
  return newObj
}

console.log(deepClone(arr))
