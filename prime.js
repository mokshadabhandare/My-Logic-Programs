//check whether the number is prime or not.

let num=parseInt(prompt("Enter the number"));

function prime(num)
{
    for(let i=2; i<num; i++)
    {
      if(num%i==0)
      {
    document.write(false);
    break;
      }
      else
    {
   document.write (true); 
    }
} 
}
prime(num);
