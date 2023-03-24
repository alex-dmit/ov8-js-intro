// @ts-check

let user = 'John'
let user2
//...
user2 = 'Jane'

const user3 = 'Bob'
// user3 = 'Alice'
var user4
user4 = 'Shannon'

let string = 'Hello world'
let num = 21
let boolean = false // false
let Null = null
let Undefined = undefined
let symbol = Symbol('First symbol')
// let symbol2 = Symbol('First symbol')

if (num > 20) {
    console.log('The num is more than 20')
} else if (num > 10) {
    console.log('The num is more than 10')
} else {
    console.log('The num is less than 10')
}

let age = 35 
// < 16 boy
// 16 < 21 young man
// 21 < Mr.
let gender = 'Male' // 'Female'


let prefix // boy | Mr. | girl | Mrs.
// man
// men
// woman
// women

// if ((age > 18) && (gender == 'Male')) {
//     prefix = 'Mr.'
// } else if ((age > 18) && (gender == 'Female')) {
//     prefix = 'Mrs.'
// } else if ((age <= 18) && (gender == 'Male')) {
//     prefix = 'boy'
// } else if ((age <= 18) && (gender == 'Female')) {
//     prefix = 'girl'
// } 

if (age > 18) {
    if (gender == 'Male') {
        prefix = 'Mr.'
    } else {
        prefix = 'Mrs.'
    }
} else {
    if (gender == 'Male') {
        prefix = 'boy'
    } else {
        prefix = 'girl'
    }
}
console.log(prefix);