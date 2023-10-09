//Program to find the simple interest
//interest = (p * r * t) / 100;

"use strict";

let p=parseInt(prompt("Enter principle amount"));
let r=parseInt(prompt("Enter rate of interest"));
let t=parseInt(prompt("Enter time in years"));
 

function interest(p,r,t)
{
let f=(p * r * t) / 100;
return f;
}

let f=interest(p,r,t);
document.write("Area of triangle","<br>"+f);

