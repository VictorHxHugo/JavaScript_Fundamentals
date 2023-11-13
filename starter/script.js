/*
`use strict`;

let hadDriversLicense = false;
const passTest = true;

if (passTest) hadDriversLicense = true;
if (hadDriversLicense) console.log(`I can drive :D`);

// const interface = `audio`;
// const private = 534;
*/

/*
function logger() {
    console.log(`My names is Victor`);
}
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declaration
function calcAge1(birthyear) {
    return 2037 - birthyear;
}
const age1 = calcAge1(1999);

// Function expression
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}
const age2 = calcAge2(2001);

console.log(age1, age2);

// Arrow Function
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, `jonas`));
console.log(yearsUntilRetirement(1999, `victor`));
*/

/*
// Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice
}
console.log(fruitProcessor(2, 3));
*/

/*
// Function Exercicse
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let koalasAverage = calcAverage(65, 54, 49);
let dolphinsAverage = calcAverage(44, 23, 71);

console.log(koalasAverage);
console.log(dolphinsAverage);


const checkWinner = function (koalasAverage, dolphinsAverage) {

    if (koalasAverage >= 2 * dolphinsAverage) {
        console.log(`Koalas wins(${koalasAverage}vs${dolphinsAverage})`);
    } else if (dolphinsAverage >= 2 * koalasAverage) {
        console.log(`Dolphins wins(${dolphinsAverage}vs${koalasAverage})`);
    } else {
        console.log(`NO TEAM WINS!`);
    }
}
checkWinner(koalasAverage, dolphinsAverage);
checkWinner(587, 110);

// Test 2
dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);
console.log(koalasAverage, dolphinsAverage);
checkWinner(koalasAverage, dolphinsAverage);
*/

/*
// Array Introduction

const friends = [`Felipe`, `Miguel`, `Renan`];
console.log(friends);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Vitinho`
console.log(friends);

const firstName = `Victor Hugo`;
const victor = [firstName, `Reis`, 2023 - 2000, `student`, friends];
console.log(victor);
console.log(victor.length);
*/

/*
// Array Introduction Exercise

const calcAge = function (birthyear) {
    return 2023 - birthyear;
}

const years = [2000, 2001, 2002, 2003, 2004]
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);
console.log(age1, age2, age3, age4, age5);

const ages = [calcAge(years[0]), calcAge(years[0]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])];
console.log(ages);
*/

/*
// Basic Array Operations (Methods)

const friends = [`Felipe`, `Miguel`, `Renan`];

// add elements
friends.push(`Rafael`);
console.log(friends);

friends.unshift(`Lucas`); //add first
console.log(friends);

// remove elements
friends.pop(); //last
console.log(friends);

friends.shift(); //remove first
console.log(friends);

console.log(friends.indexOf(`Miguel`)); //show position

console.log(friends.includes(`Miguel`));// return boolean position
console.log(friends.includes(`Bob`));

if (friends.includes(`Miguel`)) {
    console.log(`You have a friend call Miguel.`)
} else {
    console.log(`You don't have a friend call Miguel.`)
}
*/

/*
// Arrayy Exercise:
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return 0.15 * bill;
    } else {
        return 0.2 * bill;
    }
    // return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

/*
// Introduction to Objects

const victor = {
    firstName: `Victor`,
    lastName: `Alves`,
    age: 2023 - 1999,
    job: `programmer`,
    friends: [`Felipe`, `Miguel`, `Renan`]
};
console.log(victor);
*/

/*
// Dot vs. Bracket Notation

console.log(victor.lastName);
console.log(victor[`lastName`]);

const nameKey = `Name`;
console.log(victor[`first` + nameKey]);
console.log(victor[`last` + nameKey]);

const interestedIn = prompt(`What do you want to know about Victor? Choose between firstName, LastName, age, job and friends`);

if (victor[interestedIn]) {
    console.log(victor[interestedIn]);
} else {
    console.log(`Wrong request? Choose between firstName, LastName, age, job and friends`);
}

victor.location = `Santos`;
victor[`twitter`] = `@victorhxhugo`
console.log(victor);

console.log(`${victor.firstName} has ${victor.friends.length} friends, and hist best friends is called ${victor.friends[0]}`);
*/

/*
// Object Methods

const victor = {
    firstName: `Victor`,
    lastName: `Alves`,
    birthYear: 1991,
    job: `programmer`,
    friends: [`Felipe`, `Miguel`, `Renan`],
    hasDriversLicense: true,


    // calcAge: function (birthYear){
    //  return 2037 - birthYear;
    // }

    // calcAge: function(){
    //  return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} drivers license.`
    },
};

console.log(victor.calcAge());
console.log(victor.getSummary());
*/

/*
// Coding Challenge

//Let's go back to Mark and John comparing their BMIs! This time, let's use //objects to
//implement the calculations! Remember: BMI = mass / height ** 2 = mass
//    / (height * height)(mass in kg and height in meter)
//Your tasks:
//1. For each of them, create an object with properties for their full //name, mass, and
//height(Mark Miller and John Smith)
//2. Create a 'calcBMI' method on each object to calculate the BMI(the same
//method on both objects).Store the BMI value to a property, and also //return it
//from the method
//3. Log to the console who has the higher BMI, together with the full name //and the
//respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
//Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and //is 1.95 m
//tall.
//

const markMiller = {
    firstName: `Mark`,
    lastName: `Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        return this.mass / (this.height * this.height);
    },
};

const johnSmith = {
    firstName: `John`,
    lastName: `Smith`,
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        return this.mass / (this.height * this.height);
    },
};

if (markMiller.calcBMI() >= johnSmith.calcBMI()) {
    console.log(`${markMiller.firstName}'s BMI(${markMiller.calcBMI()} is higher than ${johnSmith.firstName}'s(${johnSmith.calcBMI()}))`);
} else {
    console.log(`${johnSmith.firstName}'s BMI(${johnSmith.calcBMI()} is higher than ${markMiller.firstName}'s(${markMiller.calcBMI()}))`);
}
*/

/*
// The for Loop

//console.log(`Lifiting weights repetition 1 🏋️‍♀️`);
//console.log(`Lifiting weights repetition 2 🏋️‍♀️`);
//console.log(`Lifiting weights repetition 3 🏋️‍♀️`);
//console.log(`Lifiting weights repetition 4 🏋️‍♀️`);
//console.log(`Lifiting weights repetition 5 🏋️‍♀️`);
//console.log(`Lifiting weights repetition 6 🏋️‍♀️`);
//console.log(`Lifiting weights repetition 7 🏋️‍♀️`);
//console.log(`Lifiting weights repetition 8 🏋️‍♀️`);
//console.log(`Lifiting weights repetition 9 🏋️‍♀️`);
//console.log(`Lifiting weights repetition 10 🏋️‍♀️`);

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifiting weights repetition ${rep} 🏋️‍♀️`);
}
*/

/*
// Looping Arrays, Breaking and Continuing

const victor = [
    `Victor`,
    `Alves`,
    1991,
    `programmer`,
    [`Felipe`, `Miguel`, `Renan`],
];
const types = [];

for (let i = 0; i < victor.length; i++) {
    // Reading victor array
    console.log(victor[i], typeof victor[i]);

    // Filling types array

    types.push(typeof victor[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log(`---ONLY STRINGS ---`)
for (let i = 0; i < victor.length; i++) {
    if (typeof victor[i] !== `string`) continue;

    console.log(victor[i], typeof victor[i]);
}

console.log(`---BREAK WITH NUMBER---`);
for (let i = 0; i < victor.length; i++) {
    if (typeof victor[i] === `number`) break;

    console.log(victor[i], typeof victor[i]);
}
*/

// Looping Backwards and Loops in Loops

const victor = [
    `Victor`,
    `Alves`,
    1991,
    `programmer`,
    [`Felipe`, `Miguel`, `Renan`],
];

for (let i = victor.length - 1; i >= 0; i--) {
    console.log(i, victor[i])
}

for (let exercise = 1; exercise < 5; exercise++) {
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}🏋️‍♀️`)
    }
}



























