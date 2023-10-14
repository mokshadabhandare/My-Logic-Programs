//sum of the prime number.

//print sum of the prime no upto 1 to n..

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
    sum=0;
    for(i=0;i<=n;i++)
    {
    if(Isprime(i))
    {
      sum=sum+i;
    }
    document.write(+sum," ");
    }


