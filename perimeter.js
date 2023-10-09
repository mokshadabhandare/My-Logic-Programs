//P=2(l+w)
//Program to find the perimeter of the rectangle

"use strict";
let l=parseInt(prompt("Enter length"));
let w=parseInt(prompt("Enter width"));
 
function perimeter(l,w)
{
let f=2*(l*w);
return f;
}

let f=perimeter(l,w);
document.write("Perimeter of rectangle","<br>"+f);



