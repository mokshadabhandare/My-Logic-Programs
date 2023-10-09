//Program to find the volume of cone
//⅓ 𝜋r2h

"use strict";

const pi=3.14;

let r=parseInt(prompt("Enter the radius"));

let h=parseInt(prompt("Enter the height"));

function cone(r,h)
{
let formula=1/3*pi*r*r*h;
return formula;
}

let formula=cone(r,h);

document.write("Volume of cone","<br>"+formula);

