//calculate factorial of number.



let num=parseInt(prompt("Enter number"));

function PrintFactor(num)
{
      let fact = 1;
    for (i = 1; i <= num; i++) 
    {
        fact *= i;
    }
    document.write( "The factorial of number is" +fact);
}

PrintFactor(num);