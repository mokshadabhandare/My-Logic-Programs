//Program to find the area of the pentagon
//area of pentagon = 1/2 × p × a

"use strict";
let p=parseInt(prompt("Enter perimeter"));
let a=parseInt(prompt("Enter apothem"));

function pentagon(p,a){
let formula=1/2*p*a;
return formula;
}

let formula=pentagon(p,a);
document.write("Area of pentagon","<br>"+formula)