/*
    1)Arrays is a collection of items.
    2)Syntax- let array_name = [1, 2, 3,, 4, 5];
    3)Type of array is object. Cause you have indexed pairs.
    4)Array indexing starts from 0. i.e array[0];
    5)Array is mutable.
    6)Looping over Arrays.
    7)Array Methods.
        1)push() - Adds a element in the end of the array.
        2)pop() - Remmoves a element from the end of the array.
        3)toString() - Converts array to string.
        4)concat() - Joins multiple arrays and returns new result.
        5)slice() - Return a piece of array. Exclude end index.
*/

let programming = ["HTML","CSS","JavaScript","Python","Java"];
// console.log(programming[2]); //Accessing specific index.

// console.log(programming); //Accessing Array.

// console.log(typeof programming); //Type of array.

// let mutable = programming[1] = "Rust";
// console.log(programming); //Changing value at specific index.

// for(let i = 0; i < programming.length ; i++) //Looping over Arrays.
//     {
//         console.log(programming[i]);
//     }

// console.log("");

// for(let element of programming){ //Looping over arrays using forof loop.
//     console.log(element);
// }

// console.log("");

// for(let index in programming){ //Looping over arrys using forin loop.
//     console.log(`Index ${index} = ${programming[index]}`);
// }

programming.push("Go"); //push method
console.log(programming); 

programming.pop(); //pop method
console.log(programming);

let a = programming.toString(); //converting array to string. old array remains intact.
console.log(a);

let superheros = ["Batman","Ironman","Thor","captain America","Superman"];
let new_array = programming.concat(superheros); //Concating two arrays
console.log(new_array);

let slice = programming.slice(1,3); //slicing array method
console.log(slice);


