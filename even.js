//print all even numbers between 1 to 100

let i=1;

function even(i)
{
    while(i<=100)
    {
        if(i%2==0)
        {
            document.write("Even no"+i,"<br>");
        }
        i++;
   }
}
even(i);