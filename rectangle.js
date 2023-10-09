//Program to calculate the area of rectangle
//length*width

"use strict";
let length=parseInt(prompt("Enter length"));
let width=parseInt(prompt("Enter width"));

function rectangle(length,width)
{
let f=length*width;
return f;
}

let f=rectangle(length,width);

document.write("Area of rectangle","<br>"+f)