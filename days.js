//Program to convert days into years

"use strict";
let d=parseInt(prompt("Enter no of days"));
 
function days(d)
{
let f=d/365;
return f;
}

let f=days(d);

document.write("Converted no of days into year","<br>"+f);


