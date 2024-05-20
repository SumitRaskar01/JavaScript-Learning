/*
    1)<script> tag i sused to connect JavaScript file to HTML file.
    2)What is DOM- 
        ->DOM is known as Document Object Model.
        ->When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.
        ->We can access our HTML code in JavaScript through DOM. 
        ->It is a tree like structure.

    3)DOM Manipulation-
        ->Selected elements is returned so we use variables to store them.

        1)Selecting with id-
            ->We can select elements by there Id.
            ->Syntax- document.getElementById("Id_name");
            ->Example- document.getElementById("nav");

        2)Slecting with class name-
            ->We can select elements with there class name.
            ->It returns a HTML Collection.
            ->Syntax- document.getElementByClassName("class_name");
            ->Example- document.getElementsByClassName("paragraphs");
*/

//Selecting element by ID
let heading = document.getElementById("heading");
heading.style.backgroundColor = "green";

