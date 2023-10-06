//P=2(l+w)
//Program to find the perimeter of the rectangle


let l=parseInt(prompt("Enter length"));
let w=parseInt(prompt("Enter width"));
 
function perimeter(l,w)
{
f=2*(l*w);
return f;
}

f=perimeter(l,w);
document.write("Area of triangle","<br>"+f);



