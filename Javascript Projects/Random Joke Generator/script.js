//https://official-joke-api.appspot.com/jokes/random

let joke = document.querySelector(".joke");
let button = document.querySelector("button");

async function getJoke(){
    let response = await fetch("https://official-joke-api.appspot.com/jokes/random");
    let data = await response.json();
    joke.innerText = "Fetching";
    setTimeout(()=>{
        joke.innerText = data.setup + "      " +  data.punchline; 
    },1000);
    
}

button.addEventListener("click", getJoke);