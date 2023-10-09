//Program to find the area of the right angle triangle
//ab/2


"use strict";
let a=parseInt(prompt("Enter a"));
let b=parseInt(prompt("Enter b"));

function right(a,b)
{
let f=a*b/2;
return f;
}

let f=right(a,b);
document.write("area of the right angle triangle","<br>"+f);
