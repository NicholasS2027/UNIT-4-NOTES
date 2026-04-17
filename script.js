console.log("Welcome to JS!");

// This is a SINGLE-LINE comment

/* This is a MULTI-LINE comment
The code below is an example STATEMENT (instruction/command)
Every statement ends with a SEMICOLON
*/

// VARIABLES are named storage containers for data

// DECLARE a new variable (make space)
let username;

// ASSIGN a value to an exxisting variable
username = "nick.strazicic";

// DECLARE + ASSIGN a new variable in one line
let pokemon = "mewtwo";

// See the value of a variable
console.log(username);
console.log(pokemon);

// Create a variable that holds a NUMBER
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

/* FUNCTIONS:
    Reusable sets of code statements 
    that perform a specific task/process
 */

    // console.log() is a built-in FUNCTION we use a lot
    // TASK: display data in the console (always works the same)
    console.log("I just used a function!");
    // If a function needs something in the parenthesis,
    // we say it requires PARAMETERS (input)

    // DEFINE (create) your own function
    function skincare() {
        // STATEMENTS (actions) to execute in this routine
        console.log("1. Cleanse");
        console.log("2. Apply serums");
        console.log("3. Moisturize");
    }
    // CALL the function to use it!
    skincare();