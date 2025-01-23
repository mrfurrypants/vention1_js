// Resolving Expressions
console.log('number' + 3 + 3); //
console.log(null + 3); // 
console.log(5 && "qwerty"); // 
console.log(+'40' + +'2' + "javaSkript"); // 
console.log('10' - 5 === 6); // 
console.log(true + false); // 
console.log('4px' - 3); // 
console.log('4' - 3); // 
console.log('6' + 3 ** 0); // 
console.log(12 / '6'); // 
console.log('10' + (5 === 6)); // 
console.log(null == ''); // 
console.log(3 ** (9 / 3)); // 
console.log(!!'false' == !!'true'); // 
console.log(0 || '0' && 1); // 
console.log((+null == false) < 1); // 
console.log(false && true || true); // 
console.log(false && (false || true)); // 
console.log((+null == false) < 1 ** 5); // 


//--------------------------------------------------------------------------------------------------
// --- Conditional Statements ---

// IF

// Example 1: Basic IF statement
let cost = 0;
const subscription = "pro";

if (subscription === "pro") {
    cost = 100; // If the condition is true, set cost to 100
}

console.log(cost); 

// Using a ternary operator for the same logic:
const cost1 = subscription === "pro" ? 100 : 0; 
console.log(cost1); 

// IF...ELSE

// Example 2: Using IF and ELSE
let cost2;
const subscription2 = "free";

if (subscription2 === "pro") {
    cost2 = 100; // If subscription is "pro", set cost to 100
} else {
    cost2 = 0; // Otherwise, set cost to 0
}

console.log(cost2); // Output: 0

// ELSE...IF

// Example 3: Using ELSE IF for multiple conditions
let cost3;
const subscription3 = "premium";

if (subscription3 === "free") {
    cost3 = 0; // Free subscription costs 0
} else if (subscription3 === "pro") {
    cost3 = 100; // Pro subscription costs 100
} else if (subscription3 === "premium") {
    cost3 = 500; // Premium subscription costs 500
} else {
    console.log("Invalid subscription type");
}

console.log(cost3); 

// TERNARY OPERATOR

// Example 4: Simplifying IF...ELSE using a ternary operator
const age = 20;
const type = age >= 18 ? "adult" : "child"; 
console.log(type); // Output: "adult"

// Example 5: Finding the bigger number
const num1 = 5;
const num2 = 10;
const bigNumber = num1 > num2 ? num1 : num2;
console.log(bigNumber); // Output: 10

// SWITCH

// Example 6: Using SWITCH for multiple conditions
let cost4;
const subscription4 = "premium";

switch (subscription4) {
    case "free":
        cost4 = 0;
        break;
    case "pro":
        cost4 = 100;
        break;
    case "premium":
        cost4 = 500;
        break;
    default:
        console.log("Invalid subscription type");
}

console.log(cost4); // Output: 500


// TRY...CATCH

// Example 11: Handling errors in code
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    } catch (error) {
        console.error("Error: " + error.message);
        return null; // Return null when an error occurs
    }
}

const result = divide(10, 0);
if (result === null) {
    console.log("Division failed.");
} else {
    console.log("Result: " + result);
}

// Example 12: Catching errors in undefined functions
/* try {
    let result = someFunction(); // This function does not exist
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
} */

// TRY...CATCH...FINALLY

// Example 13: Code with a finally block
try {
    // Code that might throw an error
    let result = 10 / 2; // This is fine
    console.log(result);
} catch (error) {
    // Handle the error
    console.log("Error:", error.message);
} finally {
    // This block always runs
    console.log("This block always executes");
}


// TASKS

// Task 1: Write a program that checks if a number is even or odd.
const number = 7; // Replace with any number


// Task 2: Write a program that calculates the cost of a movie ticket based on age.
const age2 = 45; // Replace with any age


// Task 3: Write a program that finds the largest of three numbers.
const numA = 25;
const numB = 13;
const numC = 42;

// Task 4: Write a program that determines if a number is positive, negative, or zero.
const numD = -5; // Replace with any number





/*
Loops in JavaScript
A loop is a control structure in high-level programming languages, used to organize 
the repeated execution of a set of instructions.

Loop body: A sequence of instructions meant for repeated execution.

Iteration: A single execution of the loop body.

Exit condition: A condition that determines whether the loop will run again or terminate.

Counter: A variable that keeps track of the current iteration number.

A loop does not always require a counter, and its exit condition may depend on multiple variables 
that are modified during the loop.
*/

// While Loop

/*
A "while" loop is a pre-condition loop. It keeps running as long as a specified condition is true.
The condition is checked before executing the loop body, so the loop may not execute even once
if the condition is false initially.

Syntax:
while (condition) {
  // code to execute (loop body)
}
*/

/*
Example 1: Simple while loop
*/
let i = 0;
while (i < 5) {
  console.log('i = ' + i);
  i++;
}

/*
Example 2: A loop that might not start
*/
while (false) {
  console.log("This will never execute");
}
console.log("Outside the loop");

/*
Example 3: Loop with a `break`
*/
while (true) {
  console.log("This runs once");
  break; // Stops the loop
}
console.log("Outside the loop");

/*
Example 4: Using a counter to control the loop
*/
let counter = 10;
while (counter > 0) {
  console.log(counter);
  counter--;
}

/*
Practical example: Filling up hotel rooms
*/
let clients = 18;
const maxRooms = 25;
while (clients < maxRooms) {
  console.log(`Currently filled: ${clients}`);
  clients++;
}

// Do...While Loop

/*
A "do...while" loop is a post-condition loop. The loop body is always executed at least once 
because the condition is checked after the loop body is executed.

Syntax:
do {
  // code to execute
} while (condition);
*/

/*
Example 1: Basic do...while loop
*/
let j = 0;
do {
  console.log("j = " + j);
  j++;
} while (j < 3);

console.log("After the loop, j = " + j);

/*
Example 2: A loop that executes only once
*/
do {
  console.log("This executes once!");
} while (false);

// Practical Example: Asking for a password
let password = "";
do {
  password = prompt("Enter a password longer than 4 characters", "");
} while (password.length < 5);

console.log("Your password: ", password);

// For Loop

/*
A "for" loop is a counter-based loop. It specifies the starting point, the ending condition, 
and the step for the counter. The loop runs until the condition becomes false.

Syntax:
for (initialization; condition; step) {
  // code to execute
}
*/

/*
Example 1: A basic for loop
*/
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

/*
Example 2: Calculating the sum of numbers up to a target value
*/
const target = 5;
let sum = 0;
for (let i = 1; i <= target; i++) {
  sum += i;
}
console.log("Sum: ", sum);

/*
Example 3: Using modulo to find remainders
*/
const max = 10;
for (let i = 1; i <= max; i++) {
  console.log(`${max} % ${i} = `, max % i);
}

// The `break` Statement

/*
The `break` statement completely stops the loop and transfers control 
to the code immediately after the loop.
*/
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    console.log("Found 3, stopping the loop");
    break;
  }
  console.log(i);
}
console.log("Loop ended");

// The `continue` Statement

/*
The `continue` statement skips the current iteration of the loop and proceeds with the next one.
*/
const number = 10;
for (let i = 0; i < number; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log("Odd number: ", i);
}

/*
Example: Multiplication table for 5
*/
const num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}

/*
Nested Loops
A loop inside another loop is called a nested loop.
*/
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
  console.log("End of inner loop");
}

// Labels for Loops

/*
Labels allow you to name a loop and use `break` or `continue` statements to control outer loops.
*/
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue outerLoop; // Skip to the next iteration of the outer loop
    }
    if (i === 2 && j === 2) {
      break outerLoop; // Exit both loops
    }
    console.log(`i=${i}, j=${j}`);
  }
}
