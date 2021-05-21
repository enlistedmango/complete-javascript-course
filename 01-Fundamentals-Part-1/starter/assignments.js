// Lecture: Values & Variables
const country = "Scotland";
console.log(country);

const continent = "Europe";
console.log(continent);

let population = 5000454;
console.log(population);


// Lecture: Data Types
const isIsland = false;
// isIsland = true;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
// console.log(typeof language);

language = 'English';
console.log(language);

//Lecture: Basic Operators
let finland = 6000000
console.log(population / 2); // 2500227
population++;
console.log(population);
console.log(population > finland);
console.log(population < 33000000);

let description =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description);

console.log(`${country} is in ${continent} and it's ${population} million people speak ${language}`);


//Lecture: Taking Decisions
if (population > 33000000) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33000000 - population} million below average`)
};

//Lecture: Type Conversion & Coercion
console.log('9' - '5'); //95 //Actual Answer was 4 (converted the strings to numbers)
console.log('19' - '13' + '17'); //1930 //Actual answer was 617 (converted strings to numbers + string)
console.log('19' - '13' + 17); //191317 //Actual Answer was 23 (converted strings to numbers + number)
console.log('123' < 57); //true //Actual Answer was false (converted string to number, which is more)
console.log(5 + 6 + '4' + 9 - 4 - 2); //2442 //Actual Answer was 1143 (I cannot figure this one out)