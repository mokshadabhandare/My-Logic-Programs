//print all factors of number.


let num=parseInt(prompt("Enter number"));

function PrintFactor(num)
{
    for(let i=1;i<num;i++)
    {
        if(num%i==0)
        {
            document.write(i+"<br>");
        }
    }
}
PrintFactor(num);