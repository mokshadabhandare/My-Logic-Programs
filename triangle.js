//Program to find the area of a triangle
//A = ½ (b × h) 


let b=parseInt(prompt("Enter base"));
let h=parseInt(prompt("Enter height"));
 
function triangle(b,h)
{
let f=1/2*(b*h);
return f;
}

f=triangle(b,h);
document.write("Area of triangle","<br>"+f);



