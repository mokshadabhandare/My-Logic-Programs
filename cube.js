//program to find the volume of the cube
//V=a3

"use strict";
let e=parseInt(prompt("Enter edge of cube"));

function cube(e)
{
let formula=e*e*e;
return formula;
}

let formula=cube(e);
document.write("Volume of cube","<br>"+formula);

