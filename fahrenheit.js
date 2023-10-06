//Program to convert Fahrenheit into Celsius
//Temperature in degrees Fahrenheit (°F) - 32) * 5/9.



let F=parseInt(prompt("Enter fahrenheit"));

function fahrenheit(F)
{
C=(F-32)*5/9;
return C;
}

C=fahrenheit(F);
document.write("Converted fahrenheit into celsius","<br>"+C);
