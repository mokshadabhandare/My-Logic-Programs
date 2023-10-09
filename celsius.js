//°F = (9/5) °C+32.
//Program to convert Celsius into Fahrenheit

"use strict";
let c=parseInt(prompt("Enter Celsius"));

function celsius(c)
{
    let f=(9/5)*c+32;
    return f;
}

let f=celsius(c)

document.write("Converted celsius into fahrenheit","<br>"+f);
