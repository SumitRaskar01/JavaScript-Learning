/*
    1)Attribute 
        1)We can get a attribute's value by using following syntax.
            1)Syntax- getAttribute("attribute");
            2)Example- getAttribute("class");
        2)We can set a attribute's value by using following syntax.
            1)Syntax- setAttribute("attribute", "value");
            2)Example- setAttribute("class", "content");
    2)style  
        1)We can add styles to our elements using JS.
        2)Syntax- element.style.attribue = "value";
        3)Example- box.style.backgroundColor = "red";

    3)Inserting Elements.
        1)We can add elemenrs in our web page by using JS.
        2)First we have to creat the element.
        3)Syntax- document.createElement("element_name");
        4)Example- document.createElement("button");
        5)Now we can add the created element to our web page.
        6)To add the elemnet we have 4 methods.
            1)node.append(element) - Adds at the end of the node(inside). 
            2)node.prepend(element) - Adds at the start of the node(inside).
            3)node.before(element) - Add before the node(outside).
            4)node.after(element) - Adds after the node(outside).

    4)Deleting Elementss
        1)We can also delete a element in our web pages using JS.
        2)Syntax- node.remove()

    5)classList-
        1)When we set a new class to a class attribute it overwrites the previous class so to avoid that we use classList.
        2)Syntax- element.classList
        3)Example- 
*/

let box = document.getElementById("box");
box.style.backgroundColor = "aqua";

//Creating element
let btn1 = document.createElement("button");
btn1.innerText = "Button 1";
//Insering element append method
box.append(btn1);

let heading = document.createElement("h1");
heading.innerText = "This is Heading";
//Inserting element prepend method
box.prepend(heading);

let para = document.createElement("p");
para.innerText = "This is Paragraph";
//Inserting element before method
box.before(para);

let btn2 = document.createElement("button");
btn2.innerText = "Button2";
//Inserting element after method
box.after(btn2);

//Deleting a element
let del_ele = document.getElementById("del");
del_ele.remove();

let section = document.querySelector("section");
console.log(section.classList);
//Adding a class in a element's attribute
section.classList.add("sec2");
//Removing a class in a element's attribute
section.classList.remove("sec2");