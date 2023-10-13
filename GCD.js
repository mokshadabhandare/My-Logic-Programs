//GCD of two numbers.

let num1=parseInt(prompt("Enter first number"));
let num2=parseInt(prompt("Enter second number"));

function GCD(num1,num2)
{
    let gcd=Math.min(num1,num2);
    while(gcd>0)
    {
    if(num1%gcd==0 && num2%gcd==0)
    {
               break;
    }
        gcd--;
}
return gcd;
}
document.write("The GCD is "+GCD(num1,num2));


