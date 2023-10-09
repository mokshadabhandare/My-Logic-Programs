// Program to find the surface area of cuboid
//2(lb+lh+bh)

"use strict";
let l=parseInt(prompt("Enter principle length"));
let b=parseInt(prompt("Enter rate of base"));
let h=parseInt(prompt("Enter time in height"));
 

function cuboid(l,b,h)
{
let f=2*((l*b)+(l*h)+(b*h));
return f;
}

let f=cuboid(l,b,h);
document.write("Area of Cuboid","<br>"+f);

