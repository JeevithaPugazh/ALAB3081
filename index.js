// Part 1: Math Problems
let n1 = 10;
let n2 = 15;
let n3 = 12;
let n4 = 13;

//Checking the sum of four number is true
let sumCheck = n1 + n2 + n3 + n4 === 50;
console.log(`Is sum is 50?:${sumCheck}`);

// Checking at least two value is odd
let checkOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2);
let checkAtleastTwoValueIsOdd = checkOdd >= 2;
console.log(
  `Is at least two value is odd?: ${checkAtleastTwoValueIsOdd}`
);

// checking is all numbers are smaller than 25
let withInRange = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(
  `Is all numbers are smaller than 25? : ${withInRange}`
);

//Checking is all numbers are unique
let checkUnique =
  n1 !== n2 &&
  n1 !== n3 &&
  n1 !== n3 &&
  n1 !== n4 &&
  n2 !== n3 &&
  n2 !== n3 &&
  n2 !== n4 &&
  n3 !== n4;
console.log(`Is all numbers are unique?: ${checkUnique}`);

//Check all Values are divisible by 5
let areAllDivisibleBy5 =
  n1 % 5 === 0 &&
  n2 % 5 === 0 &&
  n3 % 5 === 0 &&
  n4 % 5 === 0;

console.log(
  `Is all numbers are divisible by 5?: ${areAllDivisibleBy5}`
);

//Check if the first number is larger than the last
let compareFirstNumAndLastNum = n1 > n4;
console.log(
  `Is first number is larger than the last?: ${compareFirstNumAndLastNum}`
);

//Arithmetic chain
//Subtract the first number from the second number.
let subFirstNumAndLastNum = n1 - n4;
console.log(
  `Result of subtracting First number from the second number: ${subFirstNumAndLastNum}`
);

//Multiply the result by the third number.
let multiplySubResultByThirdNumber =
  (subFirstNumAndLastNum *= n3);
console.log(
  `Result of multiplying the subraction result to third number: ${multiplySubResultByThirdNumber}`
);

// Find the remainder of dividing the result by the fourth number.
let divideMulResultByFourthNumber =
  multiplySubResultByThirdNumber / n4;
console.log(
  `Result of dividing the multiplication result by fourth number: ${divideMulResultByFourthNumber}`
);

//checking result are above 25 using isOver25
let isOver25 =
  subFirstNumAndLastNum > 25 ||
  multiplySubResultByThirdNumber > 25 ||
  divideMulResultByFourthNumber > 25;
console.log(`Is any number over 25?: ${isOver25}`);

// Part 2: Practical Math
let distance = 1500;
let fuellBudget = 175;
let fuelCost = 3;

let avgMilesPerHour = (55 + 60 + 75) / 3;

let avgGallonPerAvgMile = (30 + 28 + 23) / 3;

//How many gallons of fuel will you need for the entire trip?
let FuelNeedForEntireTrip = distance / avgGallonPerAvgMile;
console.log(
  `Total fuel needed: ${FuelNeedForEntireTrip.toFixed(2)}`
);

let costOfFuel = FuelNeedForEntireTrip * fuelCost;
console.log(`Total fuel cost: ${costOfFuel.toFixed(2)}$`);

// Will your budget be enough to cover the fuel expense?
let isBudgetCoverFuel = fuellBudget > costOfFuel;
console.log(
  `Is budget enough to cover the fuel expense?: ${isBudgetCoverFuel}`
);

// How long will the trip take, in hours?
let travelTime = distance / avgMilesPerHour;
console.log(
  `Total travel Time is: ${travelTime.toFixed(2)} hours`
);
