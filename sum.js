//program to find sum of all natural numbers from 1 to n.

let num=parseInt(prompt("Enter number"));
let sum=0;

function NaturalNumbers (num){
    for(let i=1;i<=num;i++)
    {
        sum=sum+i;
    }
    document.write("Sum of natural numbers is"+sum,"<br>");
}
NaturalNumbers(num);