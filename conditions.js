let condition = true
// Simple If statement
if (condition) {
    console.log("That's ok");
}

// if ... else ...
if (condition) {
    console.log("That's ok");
} else {
    console.log("No good, man");
}

let age = 5
// if ... else if ... else
if (age < 14) {
    console.log('Baby');
} else if (age < 18) {
    console.log('Teenager');
} else {
    console.log('Adult')
}

let gender = 'Female'
// Nested conditions:
if (age > 17) {
    if (gender == 'Female') {
        console.log('Mrs.');
    } else {
        console.log('Mr.');
    }
} else {
    if (gender == 'Female') {
        console.log('girl');
    } else {
        console.log('boy');
    }
}

// Logical AND
if (age > 17 && gender == 'Female') {
    console.log('Mrs.');
}
if (age > 17 && gender == 'Male') {
    console.log('Mr.');
}
if (age <= 17 && gender == 'Female') {
    console.log('girl');
}
if (age <= 17 && gender == 'Male') {
    console.log('boy');
}

// Thernar operator
const greeting = (age > 17 && gender == 'Female') ? 'Mrs.' : 'Goodbye'

const message = (gender == 'alian' || gender == 'marsian') ? 'Zak-zak' : 'Hello'

const greetingMan = (age > 17) 
    ? (gender == 'Female') ? 'Mrs.' : 'Mr.'
    : (gender == 'Female') ? 'girl' : 'boy'