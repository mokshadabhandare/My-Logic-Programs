//Program to find the surface area of sphere   
// A=4πr2

const pi=3.14;

let r=parseInt(prompt("Enter the radius"));

function sphere(r)
{
formula=4*pi*r*r;
return formula;
}

formula=sphere(r);
document.write("Surface area of Sphere","<br>"+formula);