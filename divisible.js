//Accept two numbers from user and check second number is factor of first number.
//input : 12 6
//output : true 

let num1=parseInt(prompt("Enter First number"));
let num2=parseInt(prompt("Enter Second number"));

function Divisible(num1,num2)
{
        if(num1%num2==0)
        {
            document.write("True");
        }
        else{
            document.write("false");
        }
}
Divisible(num1,num2);