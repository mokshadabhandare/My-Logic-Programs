//print prime no upto 1 to n..

let n=parseInt(prompt("Enter the number"));

function Isprime(num)
{
    for(let i=2; i<num/2; i++)
    {
      if(num%i==0)
      {
    return false;
  
      }
     else
    {
   return true; 
    }
} 
}

    for(i=0;i<=n;i++)
    {
    if(Isprime(i))
    {
      document.write(+i," ");
    }
    }


