/*
    1)<script> tag i sused to connect JavaScript file to HTML file.
    2)What is DOM- 
        ->DOM is known as Document Object Model.
        ->When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.
        ->We can access our HTML code in JavaScript through DOM. 
        ->It is a tree like structure.

    3)DOM Manipulation-
        1)Selecting with id-
            ->We can select elements by there Id.
            ->Syntax- document.getElementById("Id_name");
            ->Example- document.getElementById("nav");
*/

// let heading = document.getElementById("heading");
// heading.backgroundColor = "green";

document.getElementById("heading").backgroundColor = "green";