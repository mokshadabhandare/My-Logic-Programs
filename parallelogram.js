//Program to find the area of parallelogram
//A=Base x Height

"use strict";
let b=parseInt(prompt("Enter base"));
let h=parseInt(prompt("Enter height"));

function parallelogram(b,h)
{
let area=b*h;
return area;
}

let area= parallelogram(b,h);
document.write("Area of parallelogram","<br>"+area);