/*
    1)Strings is a sequence of characters which is used to represent text.
    2)Ways to create a string.
        ->let str = "JavaScript";
        ->let str2 = 'JS';
    3)Strings have inbuilt properties and functions/methods.
        ->length. Example- str.length;
        ->Indices. Examle- str[2];

    4)Template Literals-
        ->Syntax- let str = `Hello World`;
        ->Created using backticks.
        ->It is a special type of string. 
        ->String Interpolation- To create strings by substitution of placeholders. Syntax- string text ${expression} string text.

    5)Strings are immutable.
*/

let str = "Hello World";
let str2 = "JavaScript";

console.log("String Methods");

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.trim()); //removes whitespaces from starting and ending of the string.

console.log(str.slice(2,4)); //returns part of string, ending value doesn't include.

console.log(str.concat(str2)); //Combines two string.

console.log(str.replace("H", "A")); //replaces character at specific index.

console.log(str.charAt(4)); //returns character at given index.


