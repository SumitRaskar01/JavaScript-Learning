/*
    1)Functions are a block of code that performs a specific task, can be called whenever needed.
    2)Syntax- function without parameters- function function_name(){
        //code to execute
    }
    3)Syntax to call a function- function_name();

    4)Function with parameters- Syntax- function(parameter1, parameter2,....){
        //code to execute
    }
        ->Variable used in function defination is called parameter.
        ->Value which is passed in function call is called as argument.
        ->Generally it is used interchangeablly, doesn' matter.
        ->Function parameters are like local variables i.e they are block scoped.

    5)Function can return a value
        ->To do that we use "return" keyword.
        ->It can only return 1 value.
        ->code written after after retun keyword it will not execute.

    6)Arrow Function-
        ->It is a part of Modern JavaScript.
        ->It is a compact way of writing a function.
        ->It is used for smaller task.
        ->Syntax- const function_name = (parameter1, parameter2,....) => {
            //code to execute
        }
*/

//function without parameters
function greeting() {
  console.log("Hello World");
  console.log("I am JavaScript");
}
greeting();

//function with parameters/arguments
function greeting2(message) {
  console.log("Hello", message);
}
greeting2("Batman");

//taking two numbers from user and adding it with return keyword
function sum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
let add = sum(40, 50);
console.log(add);

//Arrow Function
const mul = (num1, num2) => {
  console.log(num1 * num2);
};
mul(5, 10);