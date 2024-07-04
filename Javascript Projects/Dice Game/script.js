let dice1 = document.querySelector(".dice1");
let dice2 = document.querySelector(".dice2");
let dice3 = document.querySelector(".dice3");
let dice4 = document.querySelector(".dice4");
let dice1_text = document.querySelector(".dice1 p");
let dice2_text = document.querySelector(".dice2 p");
let dice3_text = document.querySelector(".dice3 p");
let dice4_text = document.querySelector(".dice4 p");
let roll_button1 = document.querySelector(".roll_button1");
let roll_button2 = document.querySelector(".roll_button2");
let total1 = document.querySelector(".total1");
let total2 = document.querySelector(".total2");
let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let reset = document.querySelector(".reset");
let number1, number2, number3, number4;
let result1 = 0,result2 = 0;
let chance = 1;

function generateNumber(){
  return Math.floor(Math.random() * 6) + 1;
}

let target = prompt("Enter Target");

function roll1() {
  if (chance == 1) {
    number1 = generateNumber();
    number2 = generateNumber();
    dice1_text.innerText = number1;
    dice2_text.innerText = number2;
    result1 = result1 + number1 + number2;
    total1.innerText = result1;
    console.log("Player 1 Score is: " + result1);
    chance = 0;
    if (result1 >= target) {
      console.log("Player 1 Wins");
      msg1.innerText = "Player 1 Wins";
    }
  } else {
    console.log("It's player 2 chance");
  }
}

function roll2() {
  if (chance == 0) {
    number3 = generateNumber();
    number4 = generateNumber();
    dice3_text.innerText = number3;
    dice4_text.innerText = number4;
    result2 = result2 + number3 + number4;
    total2.innerText = result2;
    console.log("Player 2 Score is: " + result2);
    chance = 1;
    if (result2 >= target) {
      console.log("Player 2 Wins");
      msg2.innerText = "Player 2 Wins";
    }
  } else {
    console.log("It's player 1 chance");
  }
}

function resetGame(){
  number1 = number2 = number3 = number4 = 0;
  result1 = result2 = 0;
  chance = 1;
  dice1_text.innerText = "";
  dice2_text.innerText = "";
  dice3_text.innerText = "";
  dice4_text.innerText = "";
  total1.innerText = "Total Score";
  total2.innerText = "Total Score";
  msg1.innerText = "";
  msg2.innerText = "";
}


roll_button1.addEventListener("click", roll1);
roll_button2.addEventListener("click", roll2);
reset.addEventListener("click", resetGame);