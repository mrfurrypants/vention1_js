// This is a single-line comment
//console.log("Hello World!"); // Inline comment

/*
   This is a multi-line comment.
   It spans multiple lines.
*/

// let age; // 
// age = 25; 
// age = 56; 
// const NAME = "John"; // constant variable

// console.log(age);

// let x = 42;
// let greeting = 'Hello!';
// let isValid = true; 
// let empty = null;
// let notAssigned; 

// console.log(notAssigned, empty);


// let arr = [1, 2, 3, 4]
// console.log(typeof(arr));

// {
//    let a = 10;
//    const b = 20;
//    var c = 30;
//    console.log(a);
// }

// //console.log(a);
// //console.log(b);
// console.log(c);

// console.log(x);
// let x = 10; 

// console.log(typeof "Hello"); // "string"
// console.log(typeof 42);      // "number"
// console.log(typeof true);    // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null);      // "object" (a known quirk in JavaScript)
// console.log(typeof Symbol());  // "symbol"
// console.log(typeof [1, 2, 3]); // "object"
// console.log(typeof { name: "John", age: 30 }); // "object"
// console.log(typeof console.log); // "function"
// console.log(typeof NaN);


// console.log(Number("42.12"));
// console.log(Number("42String"));
// console.log(Number(false)); // 0
// console.log(Number(null));  // 0
// console.log(Number("")); // 0


// console.log(42+"2"); // 422
// console.log(true + "1"); // true1

// console.log(true + 42); // 43

// Key Arithmetic Operators
// Addition (+)
// Subtraction (-)
// Division (/)
// Multiplication (*)
// Remainder (%)
// Exponentiation (**)
// Increment (++)
// Decrement (--)

// console.log(12%5) 

// let counter = 2; 
// console.log(counter);
// ++ counter;
// console.log(counter);
// counter --;
// console.log(counter);

// console.log(20 === "20"); // true
// console.log(20 == "20"); // false

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// always converts to false
// false
// 0 
// ""
// undefined
// NaN 
// null 


// AND: && last true or first false

// const age = 20;
// console.log(age > 10 && age < 30) // true && true

// console.log(1 && 5 && true && "Hello"); // true // true // false // false 
// console.log("Mango"&&"Polly");

// OR: || last false or first true

// const age = 5; 
// console.log(age < 10 || age > 30);

// console.log("" || false || 1 || null || "fsdfsd") 

// NOT ! 
// console.log(!true) // false
// console.log(!false) // true
// console.log(!3);  // false
// console.log(!""); // true

let firstName = "John";
let surname = "Doe";
console.log("Hello " + firstName + " " + surname + " !" );
console.log(`Hello ${firstName} ${surname} !`)