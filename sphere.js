//Program to find the surface area of sphere   
// A=4πr2

"use strict";
const pi=3.14;

let r=parseInt(prompt("Enter the radius"));

function sphere(r)
{
let formula=4*pi*r*r;
return formula;
}

let formula=sphere(r);
document.write("Surface area of Sphere","<br>"+formula);