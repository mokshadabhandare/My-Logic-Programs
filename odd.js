//print all odd numbers between 1 to 100

let i=1;

function odd(i)
{
    while(i<=100)
    {
        if(i%2!==0)
        {
            document.write("odd no"+i,"<br>");
        }
        i++;
   }
}
odd(i);