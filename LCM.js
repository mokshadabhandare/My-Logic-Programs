// find LCM of two numbers.

let num1=parseInt(prompt("Enter first number"));
let num2=parseInt(prompt("Enter second number"));

function LCM(num1,num2)
{
     let lcm=Math.min(num1,num2);
     while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            document.write("The LCM of "+num1  +num2 +min);
            break;
        }
        min++;
    }
}
LCM(num1,num2);