//print all prime numberbetween 1 to n.


let num=parseInt(prompt("Enter the number"));
let i=1;
function prime(num)
{
    while(i<=num)
    {
      if(num%i==0)
      {
    document.write(false);
      }
      else
    {
   document.write (true); 
    }
} 
}
prime(num);