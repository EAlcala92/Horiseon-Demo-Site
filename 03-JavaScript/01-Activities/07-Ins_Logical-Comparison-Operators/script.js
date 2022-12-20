var a = 100;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log("Adding");
console.log(a + b);
console.log("Substracting");
console.log(a - b);
console.log("Dividing");
console.log(a / b);
console.log("Multiplying");
console.log(a * b);

// Modulus returns the remainder between two numbers.
console.log("Modulus");
console.log(a % b);

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality

console.log("Equal comparisson");
console.log(b == c);

console.log("Not equal");
console.log(b != c);

// Compares equality and type (strict equality)

console.log("Strict Equal");

console.log(b === c);

console.log("Strict not equal");
console.log(b !== c);

// Greater than or less than
console.log("Greter than");
console.log(a > b);

console.log("Less than");
console.log(a < b);

// Greater than or equal to and less than or equal to
console.log("Less than or Equal");
console.log(a <= b);
console.log("Greater than or Equal");
console.log(a >= b);

// Logical operators take in two or more expressions and return true or false
var expression1 = b === c;
var expression2 = a > b;

// Evaluates to true if expression1 AND expression2 are both true, otherwise false

console.log("AND &&");
console.log(expression1 && expression2);

// Evaluates to true if expression1 OR expression2 is true, otherwise false
console.log("OR ||");
console.log(expression1 || expression2);

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true
console.log("Logical NOT");
console.log(expression2);

// Returns false
console.log(!expression2);
