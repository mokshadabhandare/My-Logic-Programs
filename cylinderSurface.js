//cylinder = 2πr(r + h)
//Program to find the surface area of the cylinder


const pi=3.14;

let r=parseInt(prompt("Enter radius"));
let h=parseInt(prompt("Enter height"));
 
f=2*pi*r*(r+h);


document.write("surface area of cylinder","<br>"+f);

