//Program to calculate the volume of sphere
//V=4/3πr3
"use strict";
const pi=3.14;

let r=parseInt(prompt("Enter the radius"));

function sphere(r)
{
let formula=(4/3)*(pi*r*r*r);
return formula;
}

let formula=sphere(r);
document.write("Volume of sphere","<br>"+formula);