/*
    1)The change in the state of an object is known as an Event.
    2)Syntax- node.event = () =>{
        //handle here
    }
    3)Example- btn.onclick = () =>{
        console.log("Button is Clicked");
    }
    4)JS event handling code have higher priority than inline code.

    5)Event Object
        1)Event object is a special type of object that gives details about event.
        2)To know eventg object we use following Syntax.
        3)Syntax- node.event(e){
            console.log(e)
            }
        4)Example- btn.event(e){
            console.log(e)
        }
*/

//On click example and Event Object
let btn = document.querySelector("button");
btn.onclick = (e) =>{
    console.log("Button is Clicked");
    console.log(e);
}

//mouse hover example
let box = document.querySelector(".box");
box.onmouseover = () =>{
    console.log("You are inside the box");
}

