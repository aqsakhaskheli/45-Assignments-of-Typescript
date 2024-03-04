// Define Variables
var kiwi = "kiwi";
var uppercaseKiwi = "KIWI";
var ten = 10;
var twenty = 20;
var fruits = ["Orange", "Kiwi", "Watermelon"];
// Test for equality and inequality with strings
console.log("Is kiwi is equal to kiwi?");
console.log(kiwi == kiwi);
console.log("\nIs kiwi is not equal to kiwi?");
console.log(kiwi != kiwi);
// Test using the lower case function
console.log("\nIs KIWI is equal to kiwi after coverting to lowercase?");
console.log(uppercaseKiwi.toLowerCase() == "kiwi");
console.log("\nIs KIWI is not equal to kiwi after converting to lowercase?");
console.log(uppercaseKiwi.toLowerCase() != "kiwi");
// Numerical tests 
// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
// Not equal to 
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);
// Greater than or equal to
console.log("\nIs ten is gerater than or equal to 5?");
console.log(ten >= 5);
// Less than or eual to
console.log("\ntwenty is less than or equal to 10");
console.log(twenty <= 10);
// Tests using "and" & "or" Operators
// Using && (AND)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
console.log("\n 20 id greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 id greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is inculde in array
console.log("\nIs Orange incule in my fruits array");
console.log(fruits.includes("Orange"));
// Not Include
console.log("\nIs Orange not incule in my fruits array");
console.log(!fruits.includes("Orange"));
