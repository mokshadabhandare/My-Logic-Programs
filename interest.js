//Program to find the simple interest
//interest = (p * r * t) / 100;



let p=parseInt(prompt("Enter principle amount"));
let r=parseInt(prompt("Enter rate of interest"));
let t=parseInt(prompt("Enter time in years"));
 

function interest(p,r,t)
{
f=(p * r * t) / 100;
return f;
}

f=interest(p,r,t);
document.write("Area of triangle","<br>"+f);

