//cylinder = 2πr(r + h)
//Program to find the surface area of the cylinder

"use strict";
const pi=3.14;

let r=parseInt(prompt("Enter radius"));
let h=parseInt(prompt("Enter height"));
 

function cylinder(r,h)
{
let f=2*pi*r*(r+h);
return f;
}

let f=cylinder(r,h);

document.write("Surface area of cylinder","<br>"+f);

