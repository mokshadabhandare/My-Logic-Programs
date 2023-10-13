// print prime number upto 1 to n.


//let num=parseInt(prompt("Enter the number"));

function prime(num)
{
    for(let i=2; i<num; i++)
    {
      if(num%i==0)
      {
    document.write(false);
      }
      else
    {
   document.write (true); 
    }
}}


let N = 100;
 
// check for every number from 1 to N
  for(var i = 1; i <= N; i++)
  {
      // check if current number is prime
      if(prime()) {
        console.log( i );
      }
}