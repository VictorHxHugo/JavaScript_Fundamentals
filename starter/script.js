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

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const koalasAverage = calcAverage(65, 54, 49);
const dolphinsAverage = calcAverage(44, 23, 71);

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
