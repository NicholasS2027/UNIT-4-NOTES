console.log("hello world");

// Create a variable that holds a number
let luckyNum = 13; //numbers dont need quotes!
console.log(luckyNum);
// CHANGE the value stored in a variable (dont repeat LET)
luckyNum = 7;
console.log(luckyNum);

// MATH OPERATORS (+, -, *, /)
let age = 16;
console.log(age);
let ageInTen = age + 10;
console.log(ageInTen);
let ageDogYears = age / 7;
console.log(ageDogYears);
// can also do math with just numbers
let plutoHumanAge = 12 * 7;
console.log(plutoHumanAge);

// PEMDAS applies when you have multiple operators
let score = 0;
score = score + 20 - 2 / 3 * (6 - 5);
console.log(score);


// Combine 2 "literal" strings (CONCATENATION)
console.log("hello " + " world");
// OR concatenate a literal string with a variable
console.log("My age is " + age);
console.log("My age in ten years is " + ageInTen);
console.log("My age in dog years is " + ageDogYears);

// can also concatenate while making variables
let userName = "nick.strazicic";
let message = "Welcome " + userName + "!";
console.log(message)