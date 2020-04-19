// what is string
// how to use in javascript

// there are 2 types string in js  
// 1. string literal  2. string constructor


// string literal/GENERAL STRING

// var  sk = "sajib"
// console.log(sk)

// STRING CONSTRUCTOR 
// we should use string constructor when we have change number type to string
// there are 3 methods in js to make number into string value

// var n = 10 + ""
// console.log(n)

// var n = 10
// var str = n.toString()
// console.log(str)

// var n = 10
// str = String(n)
// console.log(str)

//** ESCAPE NOTATION */

// var str = ' this is a \'String\' '
// console.log(str)

// var str = 'this is \nstring'
// console.log(str)

// var str = 'this is \tstring'
// console.log(str)




// ****** STRING COMPARISON **********
// JS uses Lexicographic system compare between strings

// biiger value start from - z to a = for small alphabetic letter
// bigger value start from - Z to A = for capital alphabetic letter

// var a = 'abc'
// var b = 'bcd'

// console.log(a<b)

// var a = 'aaaaaZ'
// var b = 'aaaaaz'

// console.log(a<b)

// console.log('001' == 1)



// *** String Methods Provided by Javascript *** //


// var a = 'I Am '
// var b = 'sajib khan '
// var c = a.concat(b)
// var d = c.substr(8, 2)
// console.log(d)
// console.log(c.charAt(6))
// console.log(c.startsWith('I am'))
// console.log(c.endsWith('ab '))

//console.log(a.toUpperCase())
//console.log(a.toLowerCase())

// console.log('   gdgdgfdd    '.trim())

// console.log(c.split(' '))



// ** How to Get Length of a String ** //


var str = ' we are bangladesh'

console.log('hshsgsfsgfss'.length)

// var length = ''

// while(true){
//     if (str.charAt(length)== ''){
//         break
//     } else{
//         length++
//     }
    
// }

// console.log(length)
