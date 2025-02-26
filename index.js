// Part 1: Math Problems
console.log("--- > PART 1 < ---");
let n1 = 10;
let n2 = 15;
let n3 = 20;
let n4 = 5;

//Checking the sum of four number is true
let isSum50 = n1 + n2 + n3 + n4 === 50;


// Checking at least two value is odd
let isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2);
let checkAtleastTwoValueIsOdd = isTwoOdd >= 2;




//Checking is all numbers are unique
let isUnique =
  n1 !== n2 &&
  n1 !== n3 &&
  n1 !== n3 &&
  n1 !== n4 &&
  n2 !== n3 &&
  n2 !== n3 &&
  n2 !== n4 &&
  n3 !== n4;


//Check all Values are divisible by 5
let isDivisibleBy5 =
  n1 % 5 === 0 &&
  n2 % 5 === 0 &&
  n3 % 5 === 0 &&
  n4 % 5 === 0;

console.log(
  `Is all numbers are divisible by 5?: ${isDivisibleBy5}`
);

//Check if the first number is larger than the last
let compareFirstNumAndLastNum = n1 > n4;
console.log(
  `Is first number is larger than the last?: ${compareFirstNumAndLastNum}`
);

//Arithmetic chain
//Subtract the first number from the second number.
let subFirstNumAndLastNum = n2-n1;
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
  multiplySubResultByThirdNumber % n4;
console.log(
  `Remainder of dividing the multiplication result by fourth number: ${divideMulResultByFourthNumber}`
);


// checking is all numbers are smaller than 25
let isBelow25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(
  `Is all numbers are smaller than 25? : ${isBelow25}`
);

//
const isValid = isSum50 && isTwoOdd && isBelow25 && isUnique;
console.log(isValid)

// Part 2: Practical Math
console.log("");
console.log("--- > PART 2 < ---");
let distance = 1500;
let fuelBudget = 175;
let fuelCostPerGallon = 3;
let speed1 = 55,
  mpg1 = 30;
let speed2 = 60,
  mpg2 = 28;
let speed3 = 75,
  mpg3 = 23;

// Calculate fuel needed
let fuelNeeded1 = distance / mpg1,
  fuelNeeded2 = distance / mpg2,
  fuelNeeded3 = distance / mpg3;

//calculate total fuel cost
let totalFuelCost1 = fuelNeeded1 * fuelCostPerGallon;
let totalFuelCost2 = fuelNeeded2 * fuelCostPerGallon;
let totalFuelCost3 = fuelNeeded3 * fuelCostPerGallon;

//check if the budget is enough
let isWithinBudget1 = totalFuelCost1 <= fuelBudget;
let isWithinBudget2 = totalFuelCost2 <= fuelBudget;
let isWithinBudget3 = totalFuelCost3 <= fuelBudget;

// calculate trip duration
let tripDuration1 = distance / speed1;
let tripDuration2 = distance / speed2;
let tripDuration3 = distance / speed2;

//Find the best option
let bestSpeed =
  isWithinBudget3 * speed3 +
  !isWithinBudget3 * isWithinBudget2 * speed2 +
  !isWithinBudget3 * !isWithinBudget2 * speed1;

console.log("--- If a person travelling in 55mph ---");
console.log(
  `Total fuel needed:${fuelNeeded1} gallons`
);
console.log(
  `Total fuel cost:$${totalFuelCost1}`
);
console.log(
  `Is the budget enough to cover the fuel expenses?: ${isWithinBudget1}`
);
console.log(
  `Total trip duration: ${tripDuration1} hours`
);

console.log("");
console.log("--- If a person travelling in 60mph ---");
console.log(
  `Total fuel needed:${fuelNeeded2} gallons`
);
console.log(
  `Total fuel cost:$${totalFuelCost2}`
);
console.log(
  `Is the budget enough to cover the fuel expenses?: ${isWithinBudget2}`
);
console.log(
  `Total trip duration: ${tripDuration2} hours`
);

console.log("");
console.log("--- If a person travelling in 75mph ---");
console.log(
  `Total fuel needed:${fuelNeeded3} gallons`
);
console.log(
  `Total fuel cost:$${totalFuelCost3}`
);
console.log(
  `Is the budget enough to cover the fuel expenses?: ${isWithinBudget3}`
);
console.log(
  `Total trip duration: ${tripDuration3} hours`
);
console.log("");
console.log(`The best speed for this trip is : ${bestSpeed}`);

