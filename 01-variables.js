/*
    1]Variable
    ->Variable is like a container which storee=s some data/vale.

    -->Ways to Declare and Initialze variable
    ->Let
        ->This keyword is used to declare and initalize a variable .
        ->Example- let age = 18;
                   let name = "Batman";

    ->Const
        ->Whenver you want that once you initialize a variable and you don't want to change the data of the variable in the future you use "const" variable.
        ->Example- const age = 18;
                   const name = "Batman";

    ->Var
        ->This keyword was used in earlier days of JS, but var keyword has some issues related to scope of the variable, So to avoid that we used let keyword.
        ->var is not recommended to use becaouse of block and functional scope.
        ->Example- var age  = 18;
                   var name = "Batman";
                   
    2]Variable Naming Rules-
    ->Don't use characters.
    ->Don't use underscores.
    ->Numbers are not allowed and causes error.
    ->safe side is to stick to lower camel case. Example- let age;
    ->Declare variable names as it will tell what is inside the variable.
    ->Variables are case sensitive.
    ->Dont't use reserved keyword's iike var, function, let in the name of the varibale it will cause errors.

*/

let age = 18;
let Name = "Batman";
let name = "Ironman";
const city = "Banglore";
console.log(age);
console.log(Name);
console.log(name);
console.log(city);

console.table([age, Name, name, city]); //console.table() Will output data in tabular format.
