//swap two numbers.

let a=parseInt(prompt("Enter first number"));
let b=parseInt(prompt("Enter second number"));

document.write("Before swapping"+a,"<br>");
document.write("Before swapping"+b,"<br>");


function swap(a,b)
{
    [a,b]=[b,a];
    
document.write("After Swapping"+a,"<br>");
document.write("After Swapping"+b,"<br>");
}
swap(a,b);