//( 1.73 * a*a) / 4  
//Program to find the area of an equilateral triangle


let a=parseInt(prompt("Enter area"));
 
function Equi(a)
{
let f=( 1.73 * a*a) / 4  ;
return f;
}

f=Equi(a);
document.write("Area of equilateral triangle is","<br>"+f);



