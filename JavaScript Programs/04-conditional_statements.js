/*
There are 3 types of Conditional Statements i.e- if, if-else

    ->if statement-
        ->It checks if a condition is true, if it is true then the code in thse scope of if block will be executed.
        
    ->if-else statement-
        ->if the condition present in the if statment is true then exceute the code present in if block, otherwise execute the code present in else block.

    ->else-if statement-
        ->When we have to check multiple condition's then we can you else-if statement.
        ->First it check condtion if its true it will execute the code if it's false it will check the conditon in next else-f block and so on.

    ->Ternary Operator-
        ->Syntax- condition ? true output : false output
*/

console.log("Examples");
let age = 18;

console.log("if statement:-");
if ((age <= 18)) {
  console.log("Adult");
}

// console.log("if-else statement:-");
// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Not a Adult");
// }

// console.log("else-if statment:-");
// if (age > 12 && age < 18) {
//   console.log("You are a Teenager");
// } else if (age >= 18 && age < 60) {
//   console.log("You are a Young Adult");
// } else if (age > 60) {
//   console.log("You are a Senior Citizen");
// }

// console.log("Ternary Operator");
// let result = age >= 18 ? "adult" : "Not Adult";
// console.log(result);