//Program to calculate the CGPA percentage
// CGPA*9.5;
"use strict";
let CGPA=parseInt(prompt("Enter your CGPA"));
 
function percentage(CGPA)
{
let f=CGPA*9.5;
return f;
}

let f=percentage(CGPA);
document.write("Converted CGPA into percentage","<br>"+f);