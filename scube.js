//area=6*a*a
//Program to find the surface area of a cube



let a=parseInt(prompt("Enter area"));

function area(a)
{
let f=6*a*a;
return f;
}

f=area(a);
document.write("surface area of a cube","<br>"+f);
