//Program to find the area of a triangle
//A = ½ (b × h) 

"use strict";
let b=parseInt(prompt("Enter base"));
let h=parseInt(prompt("Enter height"));
 
function triangle(b,h)
{
let f=1/2*(b*h);
return f;
}

let f=triangle(b,h);
document.write("Area of triangle","<br>"+f);



