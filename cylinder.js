//Program to find the volume of cylinder
//πr2h


"use strict";
let r=parseInt(prompt("Enter the radius"));
let h=parseInt(prompt("Enter the height"));

function volume(r,h,pi=3.14)
{
let formula=(pi)*(r)*(r)*(h);
return formula;
}

let formula=volume(r,h);
document.write("Volume of cylinder","<br>"+formula);

