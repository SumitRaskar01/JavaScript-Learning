/*
    ->Loops are used to repetitive tasks.
    ->Types of Loops-
        1)for loop.
        2)while loop.
        3)do while loop.
        4)for of loop.
        5)for in loop.
        6)Infinite loop.

        1)for loop-
            1)One of the easiest loop in programming.
            2)It takes 3 things i.e initialization, condition,increment/decrement.
            3)Syntax- for(initialization; condition; increment/decrement)
                        {
                            //code to execute
                        }  
                        
        2)while loop-
            1)while loop first checks the condition if it is true and then it will execute the code in it's block.
            2)Syntax- while(condition)
                        {
                            //code to execute
                            increment/decrement.
                        }
            3)Don't put semicolon after while statement.

        3)do while loop-
            1)In do while loop it will first execeute the code 1 time and then it will check for the condition.
            2)Doesn't matter if condition is true or false it will exceute the code code atleast 1 time.
            3)Syntax- do{
                //code to execute
                incfrement/decrement
            }while(condition);
            4)Put semicolon after while statement.

        4)for of loop-
            1)It is used on some special datatypes.
            2)Like Arrays, Strings.
            3)Syntax- for (let variable of variable)
                        {
                                //code to execute
                        }
            4)We can't use for of loop on object.

        5)for in loop-
            1)for in loop is used to iterate over object and array.
            2)Syntax- for (let variable in object)
                        {
                            //code to execute
                        }
            3)Above syntax will return key of the object.
            4)If you want value of the key you can use the fllowing syntax.
            5)Syntax to get value of the key- for (let variable in object)
                {
                    console.log(object[variable]);
                }
*/

console.log("for loop");
for(let i = 0; i < 5; i++)
    {
        console.log("Hello I am JavaScript");
    }

// console.log("while loop");
// let i = 0;
// while(i < 5)
//     {
//         console.log("Hello World");
//         i++;
//     }

// console.log("do while loop");
// let i = 0;
// do{
//     console.log("Hello JS");
//     i++;
// }while(i < 5);

// console.log("iterating for of loop on string");
// let str = "JavaScript";
// for (let i of str)
//     {
//         console.log("i= ",i);
//     }
// console.log("");
// console.log("iterating for of loop on array");
// let arr = ["Batman", "Ironman", 50, 76];
// for (let j of arr)
//     {
//         console.log("j= ",j);
//     }    

// console.log("Here we are trying to iterate for of loop on object but it's not possible");
// let obj = {
//     first_name: "Batman",
//     age: 30
// }
// for(let q of obj)
//     {
//         console.log("q= ",q);
//     }

// console.log("for in loop");
// let superhero = {
//     first_name: "Batman",
//     age: 30,
//     work: "Saves Gotham"
// }
// for(let key in superhero)
//     {
//         console.log("key=", key, "Value=", superhero[key]);
//     }

