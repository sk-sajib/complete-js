// What is object

// In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc


// var cup ={
//     color: blue,
//     weight: 2,
//     madeWith: silver

// }

/// Object Literal vs Constructor


var obj = {}
// console.log(typeof obj)

// obj.x =10
// console.log(obj)


// var man = {
//     name: "sajb khan",
//     profession: "student",
//     age : '24'

// }
// man.age = "22"
// console.log(man)

// Object Constructor used in OOP JS

// var obj = Object()
// obj.a = 10

// console.log(obj)

// var obj2 = new Object()
// obj2.b = 11

// console.log(obj2)


/// Accessing Object Properties in Javascript


// var obj = {
//     a : 10,
//     b : 20,
//     c : "sajib"

// }

// console.log(obj.a)
// console.log(obj.b)
// console.log(obj.a + obj.b)


// var show = 'c'
// console.log(obj[show])



//  Update Object Properties in Javascript


var obj = {
    a : 10,
    b : 20,
    c : "sajib"

}


// obj.a =20
// obj.c = 'sakib'
// //console.log(obj)


// obj ['b'] = 45

// var prop = 'c'
// obj[prop] = 'abir'

// console.log(obj)

// Remove Object Properties in Javascript

delete obj.b

console.log(obj)