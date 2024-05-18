/*  Problem No. 1 
    Write a function to convert Temperature from clesius to farenheit and vice versa.


function convertTemperature(number) {

  switch (key) {
    case 1:
      let fahrenheit = number * (9 / 5) + 32;
      console.log(fahrenheit);
      break;

    case 2:
      let celsius = ((number - 32) * 5) / 9;
      console.log(celsius);
      break;

    default:
      break;
  }
}
let key = 1;
convertTemperature(89);

*/


/*
    Problem No. 2
    Write a function reverseString(str) that returns the reversed version of the input string.

function reverseString(str){
    let arrayString = str.split('');
    let reversedString = arrayString.reverse();
    reversedString = reversedString.join('');
    console.log(reversedString);
}
reverseString("Batman");

*/

/*
    Problem No. 3
    Find Largest number in an array

let numbers = [34,67,19,90,32,65,81,1];
function largestNumber(){
    let largestNumber = numbers[0];
    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i] > largestNumber){
            largestNumber = numbers[i];
        }
    }
    console.log(largestNumber);
}

largestNumber();

*/

/*
    Problem No. 4  Task: Write a function factorial(n) that returns the factorial of a number n.

function factorial(number){
    let fact = 1;
    for(let i = 1 ; i <= number; i++){
        fact = fact * i;
    }
    console.log(fact);
}
factorial(19);

*/
