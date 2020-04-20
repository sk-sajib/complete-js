var obj = {
    a: 20,
    b: 30,
    c: 50

}

var keysOfObj = Object.keys(obj)
var valuesOfObj = Object.values(obj)
var x = Object.entries(obj)

// console.log(keysOfObj)
// console.log(valuesOfObj)

// console.log(x)

var obj2 = Object.assign({},obj)

obj2.b = 590

console.log(obj2)
console.log(obj)