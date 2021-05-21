///////////////////////////////
// Coding Challenge #1

/*

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables

2. Calculate both their BMIs using the formula (you can even implement both
versions)

3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

*/

///////////// MY SOLUTION
// Data Set 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
console.log(markBMI);

let johnBMI = johnMass / johnHeight ** 2;
console.log(johnBMI);

// let markHigherBMI = true;
// console.log(markHigherBMI > johnBMI);

// Actual solution to the above
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

//////////////
// Data Set 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76

let markBMI2 = markMass / markHeight ** 2;
console.log(markBMI2);

let johnBMI2 = johnMass / johnHeight ** 2;
console.log(johnBMI2);

// let markHigherBMI2 = true;
// console.log(markHigherBMI2 > johnBMI2);

// Actual Solution to the above
let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);



////////////////// 
// Course Soluton

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);


///////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement �

GOOD LUCK � 
*/

///////////////
// MY SOLUTION
if (johnBMI2 > markBMI2) {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's BMI (${markBMI2})!`)
} else {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's BMI (${johnBMI2})`)
};