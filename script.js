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

// if (num > 20) {
//     console.log('The num is more than 20')
// } else if (num > 10) {
//     console.log('The num is more than 10')
// } else {
//     console.log('The num is less than 10')
// }

// let age = 15
// // < 16 boy
// // 16 < 21 young man
// // 21 < Mr.
// let gender = 'Female'


// let prefix // boy | Mr. | girl | Mrs.
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

// if (age > 18) {
//     if (gender == 'Male') {
//         prefix = 'Mr.'
//     } else {
//         prefix = 'Mrs.'
//     }
// } else {
//     if (gender == 'Male') {
//         prefix = 'boy'
//     } else {
//         prefix = 'girl'
//     }
// }
// prefix = (age > 18)
//     ? (gender == 'Male') ? 'Mr.' : 'Mrs.'
//     : (gender == 'Male') ? 'boy' : 'girl'
// console.log(prefix);

let price
let city = 'Moscow'

switch (city) {
    case 'Moscow':
        price = 11
        break
    case 'Berlin':
        price = 9
        break
    case 'Paris':
        price = 8
        break
    default:
        price = 15
        break
}
// console.log(`Price (${city}): $ ${price}`);

// let counter = 0
// while (counter < 11) {
//     console.log(counter);
//     counter++
// }
// for (let i = 0; i < 11; i++) {
//     console.log(i);
// }
// let maxAge = 26 // 1 2 3 ... 25 26
// let numOfChild = 0
// let numOfAdult = 0
// // For + If
// for (let age = 1; age <= maxAge; age++) {
//     if (age < 18) {
//         numOfChild++
//     } else {
//         numOfAdult++
//     }
// }
// let age = 1
// while (age <= maxAge) {
//     if (age < 18) {
//         numOfChild++
//     } else {
//         numOfAdult++
//     }
//     age++
// }

// console.log('Num of Child: ' + numOfChild);
// console.log('Num of Adult: ' + numOfAdult);

// let numOfChild = 0
// let numOfAdult = 0
// let arrayOfAge = [13, 12, 7, 28, 45, 63, 2]
// for (let index = 0; index < arrayOfAge.length; index++) {
//     let age = arrayOfAge[index]
//     if (age < 18) {
//         numOfChild++
//     } else {
//         numOfAdult++
//     }
// }

// console.log('Num of Child: ' + numOfChild);
// console.log('Num of Adult: ' + numOfAdult);

// let array = []
// array.push(6)
// array.push(12)
// array.push(2)
// array.push(7)
// console.log(array);
// for (let index = 0; index < array.length; index++) {
//     array[index] = array[index] * 2
// }
// console.log(array); // [2, 4, 6, 8, 10, 12, 14]

// let arrayOfAge = []
// // Add to array 10 random integer numbers
// for (let i = 0; i < 10; i++) {
//     let random = Math.floor(Math.random() * 29 + 1)
//     arrayOfAge.push(random)
// }
// console.log(arrayOfAge);
// // Filter by age
// let filteredAdultArr = []
// for (let i = 0; i < arrayOfAge.length; i++) {
//     let age = arrayOfAge[i]
//     if (age > 17) {
//         filteredAdultArr.push(age)
//     }
// }
// console.log(filteredAdultArr);

// DZ - home work
let originArr = [1, 2, 3, 4, 5]
// for (let i = originArr.length - 1; i >= 0; i--)
let revertArr = [] // [5, 4, 3, 2, 1]


let arr = [1, 2, 3, 4, 5]
// arr.forEach(function (value, index) {
//     arr[index] = value * 5
// })
// console.log(arr);
let newArr = arr.map(function (value, index) {
    return value * 5
})
console.log(arr);
console.log(newArr)
