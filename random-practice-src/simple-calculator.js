const prompt = require('prompt-sync')();
let name = prompt("what is your name? ");
console.log("welcome", name);
let x = prompt("input first number ");
let y = prompt("input second number ");
console.log("The sum  of both numbers is", Number(x)+Number(y));
console.log("The difference of both numbers is", x-y);
console.log("The multiplication  of both numbers is", x*y);
console.log("The division of both number is", x/y);
console.log("Goodbye", name);

