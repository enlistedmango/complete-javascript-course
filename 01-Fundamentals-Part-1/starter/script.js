/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30; // let can be changed down the line from initial value
age = 31; // mutated the variable

const birthYear = 1991; // const cannot be changed. They also cannot be empty
// birthYear = 1990;
// const job;

var job = 'Programmer'; //Similar to let, but older. Never use it
job = 'teacher';

lastName = 'Schmedtmann'; //Never write a variable like this. Always declare it properly.
console.log(lastName);


// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assigment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = X - 1
x--; // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, y = 10, so x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);



const firstName = 'Jamie';
const job = 'Tech Ops';
const birthYear = 1989;
const year = 2021;

const jamie = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jamie);

// Template script
const jamieNew = `I'm ${firstName}, a ${year- birthYear} year old ${job}!`;
console.log(jamieNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
with
multiple
lines`);



const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :-)`)
};

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Type Conversaion
const inputYear = '1991'; // marked as a string
console.log(Number(inputYear)); // changes string to number
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); // we will get back NaN (not a number)
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
// JavaScript will convert strings to number automatically
console.log('I am ' + 23 + ' years old'); // + operator converts numbers to strings
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3); // - operator converts strings to numbers
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1; // 11
n = n - 1; // 10
console.log(n);